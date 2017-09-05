/*JavaScript*/




(function() {



var startingPopulation = 200;
var birthRate = 1.1;


let finalPop = [startingPopulation]
let numberOfWeeks = 0;

while (numberOfWeeks <= 5) {
  finalPop.push(Math.floor(startingPopulation += (startingPopulation * birthRate - startingPopulation)));
  numberOfWeeks++;

  console.log("There will be " + finalPop[numberOfWeeks] + " Cherokee Hares after " + numberOfWeeks + " weeks");
}



//other method
//
// for (let numberOfWeeks = 0; numberOfWeeks <= 5; numberOfWeeks++) {
//   finalPop.push(Math.floor(startingPopulation += (startingPopulation * birthRate - startingPopulation)));
//   console.log("There will be " + finalPop[numberOfWeeks] + " Cherokee Hares after " + numberOfWeeks + " weeks");
// }

console.log(finalPop);


})();
