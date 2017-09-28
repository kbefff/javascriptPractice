function avg(...numbers) {

    return numbers.reduce((acc, num) => acc + num) / numbers.length

}



module.exports = avg