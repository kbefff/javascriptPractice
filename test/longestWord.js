var longestWord = require('../assets/javascripts/longestWord.js');
var chai = require('chai');
var expect = chai.expect;

describe('Testing longestWord', function () {
    context('given the sentence, "Yesterday I watched four hours of"', function () {
        it('return "Yesterday"', function () {
            var sec = longestWord("Yesterday I watched four hours of")
            expect(sec).to.equal(9)
        })

})
})
