const request = require('supertest');
const app = require('../../app');

describe('Test index route', () => {
    test('It should respond to the GET method with the proper body and headers', (done) => {
        request(app)
            .get('/')
            .then((response) => {
                expect(response.statusCode).toBe(200);
                expect(response.body).toBe('Queloqueh!');
                done();
            });
    });
});
