const chai = require('chai');
const assert = chai.assert;
const expect = chai.expect;

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

  it('should return a name when passed a name with leading and/or trailing spaces', function() {
    const nameFormatter = new NameFormatter();
    const inputName = "  name ";
    const expectedOutput = "name";
    assert.equal(nameFormatter.invertName(inputName), expectedOutput);
  });

  it('should return lastname, firstname when passed firstname lastname', function() {
    const nameFormatter = new NameFormatter();
    const inputName = "carlo cadiz";
    const expectedOutput = "cadiz, carlo";
    assert.equal(nameFormatter.invertName(inputName), expectedOutput);
  });

  it('should return lastname, firstname when passed firstname lastname with leading and/or trailing spaces', function() {
    const nameFormatter = new NameFormatter();
    const inputName = "  carlo cadiz   ";
    const expectedOutput = "cadiz, carlo";
    assert.equal(nameFormatter.invertName(inputName), expectedOutput);
  });

  it('should return an empty string when passed a single honorific', function() {
    const nameFormatter = new NameFormatter();
    const inputName = "Mr. ";
    const expectedOutput = "";
    assert.equal(nameFormatter.invertName(inputName), expectedOutput);
  });

  it('should return an honorific and first-name when passed an honorific and first-name', function() {
    const nameFormatter = new NameFormatter();
    const inputName = "Mr. Carlo ";
    const expectedOutput = "Mr. Carlo";
    assert.equal(nameFormatter.invertName(inputName), expectedOutput);
  });

  it('should return an honorific last-name, first-name when passed an honorific first-name last-name', function() {
    const nameFormatter = new NameFormatter();
    const inputName = "Mr. Carlo Cadiz";
    const expectedOutput = "Mr. Cadiz, Carlo";
    assert.equal(nameFormatter.invertName(inputName), expectedOutput);
  });

  it('should return an honorific last-name, first-name when passed an honorific first-name last-name with leading and/or trailing spaces', function() {
    const nameFormatter = new NameFormatter();
    const inputName = " Mr. Carlo Cadiz  ";
    const expectedOutput = "Mr. Cadiz, Carlo";
    assert.equal(nameFormatter.invertName(inputName), expectedOutput);
  });

  it("should throw an error when there is no name", function() {
    const nameFormatter = new NameFormatter();
    expect(function(){ nameFormatter.invertName();
    }).to.throw('No Name!');
  });
});