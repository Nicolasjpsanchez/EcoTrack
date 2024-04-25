import { expect } from 'chai';
import request from 'supertest';
import app from '../backend/server.js';

describe('User API Tests', () => {
    // Increase timeout for this test to handle database operations
    this.timeout(10000);

    it('should create a new user', async () => {
        const res = await request(app)
            .post('/api/users/register')
            .send({
                username: 'testuser',
                email: 'test@example.com',
                password: 'password123'
            });
        // Assert the response status and username
        expect(res.status).to.equal(201);
        expect(res.body.username).to.equal('testuser');
    });
});
