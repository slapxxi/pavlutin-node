const { expect } = require('chai');
const request = require('supertest');
const app = require('../app');


describe('Pages', function() {
  let req;

  describe('/', function() {
    beforeEach(function() {
      req = request(app).get('/')
    });

    it('returns 200 OK', function(done) {
      req.expect(200, done);
    });

    it('renders template', function (done) {
      req.expect('Content-Type', /text\/html/, done);
    });
  });

  describe('/contact', function() {
    beforeEach(function() {
      req = request(app).get('/contact');
    });

    it('returns 200 OK', function (done) {
      req.expect(200, done);
    });

    it('renders template', function (done) {
      req.expect('Content-Type', /text\/html/, done);
    });
  });
});
