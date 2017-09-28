function findingPalindromes(word) {
  return word.split("").reverse().join("") === word
}
module.exports = findingPalindromes