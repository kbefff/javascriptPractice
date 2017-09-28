
var hasVowel = require('../assets/javascripts/hasVowel.js');
var chai = require('chai');
var expect = chai.expect;

describe('Testing hasVowel', function () {
    context('given hamper;', function () {
        it('return TRUE', function () {
            var vows = hasVowel("hamper")
            expect(vows).to.equal(true)
        })
    })
    context('given hmmmm;', function () {
        it('return FALSE', function () {
            var vows = hasVowel("hmmmm")
            expect(vows).to.equal(false)
        })
    })
})


