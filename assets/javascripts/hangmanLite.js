(function() {

 let word = "mississippi";
 let letter = "m";



 let wordArray = word.split(letter).length;
 let result = wordArray - 1;

 if (result > 0) {
   var response = "Yeah, the letter " + letter + " exists " + result + " time(s) in my word"
 } else {
    var response = "Nope, that letter doesn't exist in my word."

 };

 console.log(response);






 })();
