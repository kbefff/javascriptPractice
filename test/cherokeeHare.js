var cherokeeHare = require('../assets/javascripts/cherokeeHare.js');
var chai = require('chai');
var expect = chai.expect;

describe('Testing cherokeeHare', function () {
    context('given pop', function () {
        it('return finalPop', function () {
            var pop = cherokeeHare(200, 1.1, 5)
            expect(pop).to.equal(320)
        })
    })
})
