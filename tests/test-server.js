const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require ('../v1/words');
const should = chai.should();

chai.use(chaiHttp);

describe('words', function() {
  it('should list ALL words on /words GET');
  it('should list a SINGLE word on /word/<id> GET');
  it('should add a SINGLE word on /words POST');
  it('should update a SINGLE word on /word/<id> PUT');
  it('should delete a SINGLE word on /word/<id> DELETE');
});
