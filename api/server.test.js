const request = require('supertest');

const db = require('../data/dbConfig.js');

const server = require('./server.js');

describe('router tests', function() {
    describe('GET /', function () {
        it("should return 'up and running'", function() {
            return request(server)
            .get('/')
            .then(res => {
                expect(res.body).toEqual({message: "up and running" })
            });
        })
    });

    describe('POST /users', function () {
        beforeEach(async () => {
            await db('users').truncate();
        })

        it("should return 201", function() {
            return request(server)
            .post('/api/users')
            .send({ name: 'rick'})
            .then(res => {
                expect(res.status).toBe(201);
                expect(res.body.name).toEqual('rick');
            });
        })
    });

    describe('DELETE /users/:id', function () {

        it("should return res.status 200 and 'user deleted'", function() {
            return request(server)
            .delete('/api/users/1')
            .then(res => {
                expect(res.status).toBe(200)
                expect(res.body).toEqual({message: "user deleted"  })
            });
        })
    });
})