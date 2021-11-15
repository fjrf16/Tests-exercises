// this function sum two numbers
const sum = (a,b) => {
    return a + b
}
console.log(sum(7,3))

 // Declare a few functions to convert a certain number into another divise
const fromEuroToDollar = (valueInEuro) => {
    let valueInDollar = Math.round(100*(valueInEuro * 1.2))/100;
    return valueInDollar;
}

const fromDollarToYen  = (valueInDollar) => {
    let valueInYen = Math.round(100*(valueInDollar * 127.9))/100;
    return valueInYen;
}

const fromYenToPound = (valueInYen) => {
    let valueInpound = Math.round(100*(valueInYen * 0.8))/100;
    return valueInpound;
}

// We have to include the functions to be export to another files 
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound }