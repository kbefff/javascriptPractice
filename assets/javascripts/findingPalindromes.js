/*JavaScript*/
(function() {

// var word = anything


  function isPalandrome(word){


// == means true or false
//is word equal to word
    return word == word.split("").reverse().join("");
    //variable.split("") gives you an array of that variable, reverse then joing it back together using .join("");
    //this is assuming this is a real word
  }

console.log(isPalandrome("bob"));
console.log(isPalandrome("racecar"));
console.log(isPalandrome("eric"));


})();
