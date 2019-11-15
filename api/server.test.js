const request = require('supertest');

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

    describe('POST /', function () {
        it("should return 201", function() {
            return request(server)
            .post('/api/users')
            .send({ name: 'rick', age: '29'})
            .then(res => {
                expect(res.status).toBe(201)
            });
        })
    });
})