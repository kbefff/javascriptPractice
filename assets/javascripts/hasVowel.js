function hasVowel(word) {
    const pattern = /[aeiou]/i
    return pattern.test(word)
    // for (letter of word) {
    //     return letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u' || letter === 'A' || letter === 'E' || letter === 'I' || letter === 'O' || letter === 'U'
    // }
}

module.exports = hasVowel