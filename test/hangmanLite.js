





var hangmanLite = require('../assets/javascripts/hangmanLite.js');
var chai = require('chai');
var expect = chai.expect;

describe('Testing hangmanLite', function () {
    context('given word', function () {
        it('return 4', function () {
            var word = hangmanLite('s', 'mississippi')
            expect(word).to.equal(4)
        })
    })
})