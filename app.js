// declaramos una funcion con el mismo nombre "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * 1.2;
    // returnamos el valor
    return valueInDollar;
}
const fromDollarToYen = function(valueInDollar){
    // convertimos el valor a yens
    let valueInYens = valueInDollar * 106.5;
    // returnamos el valor
    return valueInYens;
}
const fromYenToPounds = function(valueInYens){
    // convertimos el valor a pounds
    let valueInPounds = valueInYens * 0.0067;
    // returnamos el valor
    return valueInPounds;
}

// this is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// just a console log for ourselves.
console.log(sum(7,3));

// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)
module.exports = { sum, fromEuroToDollar,fromDollarToYen,fromYenToPounds };