//task-1

const colors = {
    red: "#ff0000",
    green: "#00ff00",
    blue: "#0000ff",
    "golden rod": '#daa520'
}

console.log(colors['golden rod']);


//================================================


const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020
};
car[`passenger capacity`] = 5;

console.log(car);


console.log();
console.log();
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// 3. Display the physics marks as output.

const student = {
    name: "Hamim Sakep",
    id: 5421,
    physics: {
        subject: "HSC Physics",
        author: "Shahjahan Tapan",
        marks: 30
    }
};

console.log(student.physics.marks);



console.log();
console.log();
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// 4. Count the `number of properties`.

let student4 = {
    name: 'Ariana Grande',
    age: 21,
    city: 'Gaibandha',
    isStudent: true
};
const length = Object.keys(student4).length;
console.log('NUmber of properties of student4 = ',length);


console.log();
console.log();
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


let myObject = {

    name: 'John Doe',
    age: 25,
    city: 'Example City',
    isStudent: true

};

const keys = Object.keys(myObject);
console.log(keys);

for (const key of keys){
    console.log('key: ',key, ' | ' ,' Type: ', typeof myObject[key]);
}



