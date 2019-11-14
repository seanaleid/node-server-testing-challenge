const db = require('../data/dbConfig.js');

const { insert } = require('./usersModel.js');

describe('users model', function() {
    describe('insert()', function() {
        beforeEach(async () => {
            await db('users').truncate();
        })

        it('should insert a user', async function() {
            await insert({ name: 'sean'});

            const users = await db('users');

            expect(users).toHaveLength(1);
        })
    })
})