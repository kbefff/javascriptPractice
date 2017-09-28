
var avg = require('../assets/javascripts/avg.js');
var chai = require('chai');
var expect = chai.expect;

describe('Testing getAvg', function () {
    context('given [80, 77, 88, 95, 68];', function () {
        it('return 81.6', function () {
            var nums = avg(80, 77, 88, 95, 68)
            expect(nums).to.eql(81.6)
        })
    })
})