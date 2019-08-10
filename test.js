/* eslint-disable no-undef */
const assert = require('assert');
const C = require('./cash.js');

describe('Basic C Tests', () => {
  describe('Module C', () => {
    it('Type Of C', () => {
      assert.equal(typeof C, 'object');
    });

    it('First Test Case', () => {
      assert.deepEqual(C.FirstTestCase(), [50, 20, 20]);
    });

    it('Second Test Case', () => {
      assert.deepEqual(C.SecondTestCase(), 'Arif');
    });
  });
});
