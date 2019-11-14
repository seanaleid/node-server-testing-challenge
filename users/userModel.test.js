const db = require('../data/dbConfig.js');

const { insert, find } = require('./usersModel.js');

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
            await remove({ id });

            const users = await db('users');

            expect(users).toNotInclude(user[0]);
        })
    })
})