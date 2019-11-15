const db = require('../data/dbConfig.js');

const { insert, remove } = require('./usersModel.js');

describe('users model', function() {
    describe('insert()', function() {
        beforeEach(async () => {
            await db('users').truncate();
        })

        it('should insert a user', async function() {
            await insert({ name: 'sean', age: '29'});

            const users = await db('users');

            expect(users).toHaveLength(1)
            expect(users[0].name).toBe('sean');
        })

        it('should remove a user', async function() {
            const users = await db('users');
            await remove({ name: 'sean', age: '29'});

            expect(users).toHaveLength(0);
        })
    })
})