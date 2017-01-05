const request = require('supertest');
const cheerio = require('cheerio');
const { expect } = require('chai');
const app = require('../app');


describe('Middleware', () => {
  describe('http', () => {
    describe('.pageNotFound', () => {
      let req;

      beforeEach(() => {
        req = request(app).get('/nonexisting');
      });

      it('sets HTTP status to 404', (done) => {
        req.expect(404, done);
      });

      it('renders HTML page', (done) => {
        req.expect('Content-Type', /text\/html/, done);
      });

      it('sets page title', (done) => {
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
