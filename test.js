var assert = require("assert");
var C = require('./cash.js');

describe('Basic C Tests', function(){
  describe('Module C', function(){
    it('Type Of C', function(){
      assert.equal(typeof C, 'object');
    })

    it('First Test Case', () => {
      assert.deepEqual(C.FirstTestCase(),[50,20,20])
    })

    it('Second Test Case', () => {
      assert.deepEqual(C.SecondTestCase(),"Arif")
    })
  })
});
