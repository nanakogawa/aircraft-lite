 var request = require('supertest')('http://localhost:1337');

 describe('Express Backend Tests', function() {

  it('status code 200 for "/"', function(done) {
	 request.get('/')
	 .expect(200)
	 .end(done)
  });

  it('status code 200 for "/destinations.js"', function(done) {
	 request.get('/destinations.json')
	 .expect(200)
	 .end(done)
  });

  it('status code 200 "/exotic.js"', function(done) {
	 request.get('/exotic.json')
	 .expect(200)
	 .end(done)
  });
 });