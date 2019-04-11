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

        // making a test asynchronous
        it('should respond with 200 OK', async () => {
            const response = await request(server).get('/');

            expect(response.status).toBe(200);
        });

        // using 'done' to handle async
        it('should respond with 200 OK', done => {
            return request(server)
                .get('/')
                .then(response => {
                    expect(response.status).toBe(200);

                    done();
                });
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

        it('should check for json', () => {
            return request(server)
                .get('/') // => returns a promise
                .expect('Content-Type', /json/);
        });

        it('should return { api: "up" }', () => {
            return request(server).get('/').then(res => {
                expect(res.body).toEqual({ api: 'up' }); // Use '.toEqual' instead of '.toBe' it's comparing two different objects
            })
        });
    });
});
