const express = require('express');

const Users = require('./usersModel.js');

const router = express.Router();

router.get('/users', (req, res) => {
    Users.find()
    .then(users => {
        res.json(users);
      })
      .catch(err => {
        res.status(500).json({ message: 'Failed to get users' });
      });
})

router.post('/users', (req, res) => {
    const userData = req.body;
    
    Users.insert(userData)
    .then(user => {
        res.status(201).json(user);
    })
    .catch (err => {
        res.status(500).json({ message: 'Failed to create new user' });
    });
});

// version 2 async function refactor --> DOES NOT WORK
// router.post('/', async (req, res) => {
//     const userData = req.body;

//     if(userData){
//         try{
//             const newUser = await Users.insert(userData);
//             res.status(201).json(newUser);
//         } catch(error) {
//             res.status(500).json({ message: 'Failed to create new user' });
//         }
//     } else {
//         res.status(400).json({ message: `name and age required to create account.` });
//     }
// });

router.delete('/users/:id', (req, res) => {
    const { id } = req.params;
  
    Users.remove(id)
    .then(deleted => {
      if (deleted) {
        res.status(200).json({ message: "user deleted" });
      } else {
        res.status(404).json({ message: 'Could not find user with given id' });
      }
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to delete user' });
    });
  });

module.exports = router;