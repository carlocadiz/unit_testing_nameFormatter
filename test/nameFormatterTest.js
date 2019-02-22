const chai = require('chai');
const assert = chai.assert;
const expect = chai.expect;

const NameFormatter = require('../nameFormatter');

describe('invert name', function() {
  let nameFormatter;
  beforeEach(function() { // 1
    nameFormatter = new NameFormatter();
  });

  it("should throw an error when there is no name", function() {
    expect(function(){ nameFormatter.invertName();
    }).to.throw('No Name!');
  });

  it('should return an empty string when passed an empty string', function() {
    const inputName = "";
    const expectedOutput = "";
    assert.equal(nameFormatter.invertName(inputName), expectedOutput);
  });

  it('should return a single name when passed a single name', function() {
    const inputName = "name";
    const expectedOutput = "name";
    assert.equal(nameFormatter.invertName(inputName), expectedOutput);
  });

  it('should return last-name, first-name when passed first-name last-name', function() {
    const inputName = "carlo cadiz";
    const expectedOutput = "cadiz, carlo";
    assert.equal(nameFormatter.invertName(inputName), expectedOutput);
  });

  context('when an honorific is sent', function() {
    it('should return an empty string when passed a single honorific', function() {
      const inputName = "Mr. ";
      const expectedOutput = "";
      assert.equal(nameFormatter.invertName(inputName), expectedOutput);
    });

    it('should return an honorific and first-name when passed an honorific and first-name', function() {
      const inputName = "Mr. Carlo ";
      const expectedOutput = "Mr. Carlo";
      assert.equal(nameFormatter.invertName(inputName), expectedOutput);
    });

    it('should return an honorific last-name, first-name when passed an honorific first-name last-name', function() {
      const inputName = "Mr. Carlo Cadiz";
      const expectedOutput = "Mr. Cadiz, Carlo";
      assert.equal(nameFormatter.invertName(inputName), expectedOutput);
    });
  });


  context('when leading or trailing spaces are sent', function() {

    it('should remove these spaces', function() {
      assert.equal(nameFormatter.invertName( "Mr. Carlo Cadiz   "), "Mr. Cadiz, Carlo");
      assert.equal(nameFormatter.invertName(" Carlo  "), "Carlo");
      assert.equal(nameFormatter.invertName("  Carlo Cadiz"), "Cadiz, Carlo");
    });
  });

});


