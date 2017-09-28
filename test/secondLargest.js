
var secondLargest = require('../assets/javascripts/secondLargest.js');
var chai = require('chai');
var expect = chai.expect;

describe('Testing secondLargest', function () {
    context('given 10, 32, 12 and 1000', function () {
        it('return 32', function () {
            var sec = secondLargest([10, 32, 12, 1000])
            expect(sec).to.equal(32)
        })
    })
})