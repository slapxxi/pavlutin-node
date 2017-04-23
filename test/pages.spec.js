const request = require('supertest');
const app = require('../app');

describe('/', () => {
  it('returns 200 OK', (done) => {
    const req = request(app).get('/');
    req.expect(200, done);
  });

  it('renders template', (done) => {
    const req = request(app).get('/');
    req.expect('Content-Type', /text\/html/, done);
  });
});
