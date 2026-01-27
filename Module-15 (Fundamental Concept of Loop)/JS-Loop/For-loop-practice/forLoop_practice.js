// >>>>>>>>>>>>>>>>>>1. "I will invest at least 6 hrs every single day for next 30 days!" this message 60 times. So display this.
for( let number1 = 1; number1 <= 30 ;number1 ++){
    console.log(`I will invest at least 6 hrs every single day for next 30 days ${number1}=`,number1);
}


console.log();
console.log();

//>>>>>>>>>>>>>>>>> 2. Find all the odd numbers from 61 to 100.
sum= 0;
console.log('Find all the odd numbers from 61 to 100.And sum');
console.log()
for (let number2 = 61 ; number2 <= 100 ; number2 ++){
    if(number2 % 2 !=0){
        sum = sum + number2;
        console.log(`Odd number sum ${number2}+=`,sum);

    }
}


console.log();
console.log();

//>>>>>>>>>>>>>>>>>3.  Generate a multiplication table for number 9

console.log('Generate a multiplication table for number 9');
console.log();
const number3 = 9
for (let i=1 ; i <=10 ; i++){
    multiplication = number3 * i; 
    console.log(`multiplication table for number 9 (${number3} * ${i}) = ${multiplication}`);
}


console.log();
console.log();

// >>>>>>>>>>>>>>>>5. Implement a countdown timer that counts down from 81 to 65.
console.log('counts down from 81 to 65');
console.log();

for(let number5 = 81 ;number5 >=65; number5 --){
    console.log('Count down =',number5);
}