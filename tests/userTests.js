import { expect } from 'chai';
import request from 'supertest';
import app from '../backend/server.js';

describe('User API Tests', function () {  // Changed to a function to use this.timeout()
    // Increase timeout for this test to handle database operations
    this.timeout(10000);

    it('should create a new user', async () => {
        try {
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
            // Additional checks can be added here, e.g., check for response headers or other body elements
        } catch (error) {
            // Handle possible errors that might occur during the request
            throw error;
        }
    });

    // Optionally, you can add afterEach or beforeEach hooks to clean up or set up test data
    afterEach(async () => {
        // Code to delete test user or rollback changes
    });
});
