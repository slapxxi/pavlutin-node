const { expect } = require('chai');
const request = require('supertest');
const app = require('../app');

describe('Pages', () => {
  let req;

  describe('/', () => {
    beforeEach(() => {
      req = request(app).get('/');
    });

    it('returns 200 OK', (done) => {
      req.expect(200, done);
    });

    it('renders template', (done) => {
      req.expect('Content-Type', /text\/html/, done);
    });
  });
});
