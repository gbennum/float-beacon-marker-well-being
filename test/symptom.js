var should = require('chai').should(),
  expect = require('chai').expect,
  supertest = require('supertest'),
  api = supertest('http://localhost:3000/api');

describe('Symptom', function () {

  it('should return a 200 response for get by id', function (done) {
    api.get('/symptoms/2')
      .set('Accept', 'application/json')
      .expect(200, done);
  });

  it('should be an object with keys and values', function (done) {
    api.get('/symptoms/2')
      .set('Accept', 'application/json')
      .expect(200)
      .end(function (err, res) {
        expect(res.body).to.have.property("name");
        expect(res.body).to.have.property("diagnoses");
        expect(res.body.diagnoses).to.not.be.empty;
        expect(res.body.name).to.not.equal(null);
        done();
      });
  });

  it('should return a 404 response for a nonexistant api endpoint', function (done) {
    api.get('/symptms')
      .set('Accept', 'application/json')
      .expect(404, done);
  });

  it('should return a 500 response for a badly formatted id', function (done) {
    api.get('/symptoms/kajfbg')
      .set('Accept', 'application/json')
      .expect(500, done);
  });

  it('should return a 200 response for getting by bad id', function (done) {
    api.get('/symptoms/5')
      .set('Accept', 'application/json')
      .expect(200, done);
  });

  it('should not return data', function (done) {
    api.get('/symptoms/5')
      .set('Accept', 'application/json')
      .expect(200)
      .end(function (err, res) {
        expect(res.body).to.be.empty;
        done();
      });
  });

  it('should return a 200 response for getting all symptoms', function (done) {
    api.get('/symptoms')
      .set('Accept', 'application/json')
      .expect(200, done);
  });

  it('should return multiple symptoms', function (done) {
    api.get('/symptoms')
      .set('Accept', 'application/json')
      .expect(200)
      .end(function (err, res) {
        expect(res.body).to.have.lengthOf(3);
        expect(res.body[0]).to.have.property("name");
        expect(res.body[0]).to.have.property("diagnoses");
        expect(res.body[0].diagnoses).to.not.be.empty;
        done();
      });
  });


});