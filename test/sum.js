
var sum = require('../assets/javascripts/sum.js');
var chai = require('chai');
var expect = chai.expect;

describe('Testing sum', function () {
    context('given 1 and 3', function () {
        it('return 4', function () {
            var word = sum(1, 3)
            expect(word).to.equal(4)
        })
    })
})