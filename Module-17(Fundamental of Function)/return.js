function add (price1, price2){
    const total = price1 + price2;
    return total;
}
const rice = 30;
const dal =35;
const totalPrice = add(rice, dal);
console.log(`rice price(${rice}),dal price(${dal}) and total price is =`,totalPrice);

console.log('---------------------------')
function doMath (num1, num2){
    const sum = num1 + num2;
    const diff = num1 - num2;
    const multiply = sum * diff; 
    const result = multiply / 2; 
    return result;
}
const result = doMath(10, 5);
console.log(result);