const { expect } = require('chai');
const cheerio = require('cheerio');
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

    it('has valid title', (done) => {
      req
        .expect((res) => {
          const content = res.text;
          const $ = cheerio.load(content);
          expect($('title').text()).to.eq('Slava Pavlutin');
        })
        .end(done);
    });
  });

  describe('/templates', () => {
    beforeEach(() => {
      req = request(app).get('/templates');
    });

    it('returns 200 OK', (done) => {
      req.expect(200, done);
    });

    it('renders template', (done) => {
      req.expect('Content-Type', /text\/html/, done);
    });

    it('has valid title', (done) => {
      req
        .expect((res) => {
          const content = res.text;
          const $ = cheerio.load(content);
          expect($('title').text()).to.eq('Slava Pavlutin | Templates');
        })
        .end(done);
    });
  });
});
