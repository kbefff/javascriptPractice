var changeMachine = require('../assets/javascripts/changeMachine.js');
var chai = require('chai');
var expect = chai.expect;

describe('Testing changeMachine', function () {
    context('given amount', function () {
        it('return change', function () {
            var change = changeMachine(5)
            expect(change).to.eql([0,0,1,0])
        })
    })
})
