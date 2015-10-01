 var request = require('supertest')('http://localhost:1337');

 describe('Express Backend Tests', function() {
  it('status code 200', function(done) {
	 request.get('/destinations.json')
	 .expect(200)
	 .end(done)
  })
 });