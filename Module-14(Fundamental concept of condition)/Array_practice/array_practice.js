// 1
const fruits= ['apple'  , 'banana' , 'mango' , 'orange' ,'jackfruit'];
console.log(fruits[2]);

let abc= 'strawberry'
abc='namNaii';

 fruits [2]= 'jambura' ;
console.log(fruits);



// 2
const touristPlace=['cox bazar' , 'sentmartin' , 'sundarbon'];
console.log(touristPlace);
// add a new element in an Array
touristPlace.push('Sajek');
console.log(touristPlace);

//add two more array values
touristPlace.push('Tanguar hoar' , 'Bandarban');
console.log(touristPlace);

// 3
const book= ['Bhagvat_gita' ,'Mahabharata' ,'Ramayana'];
//search a element 
console.log(''+book.includes('javascript'));
console.log('this book is not present in the book list.');


// 4
const car=['Toyota' , 'Volkswagen' , 'Hyundai-Kia' , 'Honda'];
const age= 20;

console.log('It is an Array : '+Array.isArray(car));
console.log('It is not an Array: '+Array.isArray(age));


// 5
const fruits1 = ['apple', 'banana'];
const vegetables = ['carrot', 'potato'];

const groceries = fruits.concat(vegetables);

console.log(groceries);
console.log(fruits1);
