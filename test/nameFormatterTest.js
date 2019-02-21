const chai = require('chai');
const assert = chai.assert;

const NameFormatter = require('../nameFormatter');

describe('invert name', function() {

  it('should return an empty string when passed an empty string', function() {
    const nameFormatter = new NameFormatter();
    const inputName = "";
    const expectedOutput = "";
    assert.equal(nameFormatter.invertName(inputName), expectedOutput);
  });

  it('should return a single name when passed a single name', function() {
    const nameFormatter = new NameFormatter();
    const inputName = "name";
    const expectedOutput = "name";
    assert.equal(nameFormatter.invertName(inputName), expectedOutput);
  });

});