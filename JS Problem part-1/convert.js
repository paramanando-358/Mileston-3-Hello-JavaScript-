
// convert inch to feet
function inchToFeet (inch){
    const feet = inch /12;
    return feet;
}

function inchToFeet2 (inch){
    const feetNumber = inch / 12;
    const remainingInch = inch % 12;
    const result = feetNumber + ' ft ' + remainingInch + ' inch ';
    return result ;
}
const  height = inchToFeet(75);
// console.log(height);
const height2 = inchToFeet2(75);
console.log('Convert cm to Ft and inch=',height2);

console.log('----------------------------------');
//convert mile to km 

function mileToKm (mile){
    const km = mile * 1.60934;
    return km;
}
const mile = 8;
const distance = mileToKm(mile);
console.log(`(${mile}) To km =`,distance);