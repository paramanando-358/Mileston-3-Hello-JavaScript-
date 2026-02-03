const num = 45;

// declear the function
function mehek(){
    console.log('bhat khai nah');
    console.log('ulta palta jenish mukhe dei');
    console.log('tuntuni');
}


// call the function 
mehek();


function sum ( x, y){
    const result = x + y ;
    return result;
}

const total = sum(5, 3);
console.log(`Sum two number=`,total);

console.log("------------------");

function square(number){
    const square1 = number * number ;
    console.log(`Square of the number (${number})=`,square1);
    console.log()
}
square(4);
square(420);