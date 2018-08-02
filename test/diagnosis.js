var should = require('chai').should(),
  expect = require('chai').expect,
  supertest = require('supertest'),
  api = supertest('http://localhost:3000/api');

describe('Diagnosis', function () {

  it('should return a 200 response for get by id', function (done) {
    api.get('/diagnoses/2')
      .set('Accept', 'application/json')
      .expect(200, done);
  });

  it('should be an object with non null keys and values', function (done) {
    api.get('/diagnoses/2')
      .set('Accept', 'application/json')
      .expect(200)
      .end(function (err, res) {
        expect(res.body).to.have.property("name");
        expect(res.body).to.have.property("frequency");
        expect(res.body.name).to.not.equal(null);
        expect(res.body.frequency).to.be.a('number');
        done();
      });
  });

  it('should return a 404 response for a nonexistant api endpoint', function (done) {
    api.get('/diagnosis')
      .set('Accept', 'application/json')
      .expect(404, done);
  });

  it('should return a 500 response for a badly formatted id', function (done) {
    api.get('/diagnoses/kajfbg')
      .set('Accept', 'application/json')
      .expect(500, done);
  });

  it('should return a 200 response for getting by bad id', function (done) {
    api.get('/diagnoses/50')
      .set('Accept', 'application/json')
      .expect(200, done);
  });

  it('should not return data', function (done) {
    api.get('/diagnoses/50')
      .set('Accept', 'application/json')
      .expect(200)
      .end(function (err, res) {
        expect(res.body).to.be.empty;
        done();
      });
  });

  it('should return a 200 response for getting all diagnoses', function (done) {
    api.get('/diagnoses')
      .set('Accept', 'application/json')
      .expect(200, done);
  });

  it('should return multiple diagnoses', function (done) {
    api.get('/diagnoses')
      .set('Accept', 'application/json')
      .expect(200)
      .end(function (err, res) {
        expect(res.body).to.have.lengthOf(29);
        expect(res.body[0]).to.have.property("name");
        expect(res.body[0]).to.have.property("frequency");
        expect(res.body[0].name).to.not.equal(null);
        expect(res.body[0].frequency).to.be.a('number');
        done();
      });
  });

  var originalNumberOfDiagnoses;

  it('should return a 200 response for putting frequency increase', function (done) {
    api.put('/diagnoses/12')
      .set('Accept', 'application/json')
      .expect(200)
      .end(function (err, res) {
        originalNumberOfDiagnoses = res.body[0].frequency;
      done();
      });
  });
  

  it('should increment diagnosis frequency by one', function (done) {
    api.put('/diagnoses/12')
      .set('Accept', 'application/json')
      .expect(200)
      .end(function (err, res) {
        expect(res.body).to.have.lengthOf(1);
        expect(res.body[0]).to.have.property("name");
        expect(res.body[0]).to.have.property("frequency");
        expect(res.body[0].name).to.not.equal(null);
        expect(res.body[0].frequency).to.be.a('number');
        expect(res.body[0].frequency).to.equal(originalNumberOfDiagnoses + 1);
        done();
      });
  });


});