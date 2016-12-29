const request = require('supertest');
const cheerio = require('cheerio');
const { expect } = require('chai');
const app = require('../app');


describe('Middleware', function() {
  describe('http', function() {
    describe('.pageNotFound', function() {
      let req;

      beforeEach(() => {
        req = request(app).get('/nonexisting');
      });

      it('sets HTTP status to 404', function (done) {
        req.expect(404, done);
      });

      it('renders HTML page', function (done) {
        req.expect('Content-Type', /text\/html/, done);
      });

      it('sets page title', function (done) {
        req
          .expect((res) => {
            const content = res.text;
            const $ = cheerio.load(content);
            expect($('title').text()).to.eq('Slava Pavlutin | Page Not Found');
          })
          .end(done);
      });
    });
  });
});
