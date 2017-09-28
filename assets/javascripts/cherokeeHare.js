
  function cherokeeHare(startingPopulation, birthRate, numberOfWeeks){

    let finalPop = 0;

    for (let i=0; i <= numberOfWeeks; i++) {
      finalPop += (startingPopulation * birthRate - startingPopulation);

      
    }

    return Math.floor((finalPop) + startingPopulation);

  }

  console.log(cherokeeHare(200, 1.1, 5))

  module.exports = cherokeeHare



