// I will invest at least 6 hrs every single day for next 60 days!" this message 60 times. So display this.
let count = 1;
while( count <= 60){
    console.log('Serial Number is-',count);
    count++;
    console.log('I will invest at least 6 hrs every single day for next 60 days');
}

console.log();
console.log();

// Find all the odd numbers from 61 to 100.
let number=61;
console.log('Find all the odd numbers from 61 to 100.');
console.log();
while( number <= 100){
    if ( number % 2 !=0){
        console.log('Odd number from(61-100)=',number);
    }
    number++;
}


console.log();
console.log();

// Find all the even numbers from 78 to 98.
let number1 = 78;
console.log('Find all the even numbers from 78 to 98.');
while( number1 <= 98){
    if (number1 % 2 === 0){
        console.log('Even number from (78-98)=',number1);
    }
    number1++;
}


console.log();
console.log();

// Display sum of all the odd numbers from 81 to 131.
let number2=81;
console.log('Display sum of all the odd numbers from 81 to 131.');
console.log();
sum =0;
while(number2 <= 131){
    if(number2 % 2 ===1){
        console.log('odd number from(81-131)=',number2);
        sum = sum + number2;
        console.log('Sum of odd number from(81-131)=',sum);
    }
    number2 ++;

}


console.log();
console.log();

//Display sum of all the even numbers from 206 to 311.
let number3=206;
console.log('Display sum of all the odd numbers from 206 to 311.');
console.log();
sum =0;
while(number3 <= 311){
    if(number3 % 2 ===0){
        console.log('Even number from(206-311)=',number3);
        sum = sum + number2;
        console.log('Sum of Even number from(206-311)=',sum);
    }
    number3 ++;

}

console.log();
console.log();

//As Ersa is learning now, she wants to explore more and more. Tell Ersa to generate a multiplication table for number 5
const number4= 5;
console.log('Multiplication table for number 5');
console.log();
count =0;
let i= 1;
while ( i <= 10){
    result= number4 * i;
    console.log(`${number4} * ${i} =`,result);
    i++;
}


console.log();
console.log();

// Implement a countdown timer that counts down from 21 to 15.
let number5= 21;
console.log('count down');
console.log();
while(number5 >= 15){
    console.log('count down=',number5);
     number5 --;
}

