





var findingPalindromes = require('../assets/javascripts/findingPalindromes.js');
var chai = require('chai');
var expect = chai.expect;

describe('Testing findingPalindromes', function () {
    context('given Seattle', function () {
        it('return false', function () {
            var word = findingPalindromes('test')
            expect(word).to.equal(false)
        })
    })
})