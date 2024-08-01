const request = require('supertest');
const app = require('../index.js');

describe('GET /user/login', () => {
    test('shoud return jwt token', async () => {
        const res = await request(app).get('/user/login');

        expect(res.status).toBe(200);
        expect(res.body).toHaveProperty('gmail', 'abc@gabc.com');
        expect(res.body).toHaveProperty('password', '123');
    });

    // test('should return 400 if no ID is provided', async () => {
    //     const res = await request(app).get('/api/users/');

    //     expect(res.status).toBe(400);
    //     expect(res.body).toHaveProperty('error', 'User ID is required');
    // });
});