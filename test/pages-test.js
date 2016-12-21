const { expect } = require('chai');
const request = require('supertest');
const app = require('../app');


describe('Pages', function() {
  describe('/', function() {
    let req;

    beforeEach(function() {
      req = request(app).get('/');
    });

    it('returns 200 OK', function(done) {
      req.expect(200, done);
    });

    it('renders a template', function (done) {
      req.expect('Content-Type', /text\/html/, done);
    });
  });
});
