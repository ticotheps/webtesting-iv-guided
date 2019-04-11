const request = require('supertest');
const server = require('./server.js');

// testing endpoints
// returns correct http status code
describe('server.js', () => {
    describe('GET /', () => {
        it('should respond with 200 OK', () => {
            return request(server)
                .get('/') // => returns a promise
                .then(response => { 
                    expect(response.status).toBe(200);
                }) 
        });

        it('should work', () => {
            return request(server)
                .get('/') // => returns a promise
                .expect(200);
        });

        it('should return JSON', () => {
            return request(server)
                .get('/')
                .then(res => {
                    expect(res.type).toBe('application/json')
                });
            });
        });
});
