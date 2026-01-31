const numbers= [1, 2, 3, 4, 5, 6, 7];

console.log('Array Numbers=',numbers);
numbers.reverse();

console.log('Array Reverse=',numbers);

console.log();
console.log();

rev_numbers = [];

for (const num of numbers){
    rev_numbers.unshift(num);

}
console.log('Array reverse another way='rev_numbers);