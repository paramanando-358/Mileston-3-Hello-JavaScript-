const age=17;


// normal if else
// if(age >= 18){
//     console.log('voter');
// }
// else{
//     console.log('Not a voter');
// }


// simple ternary
// age >= 18 ? console.log('voter') : console.log('Not a voter')



let price =500;
const isLeader = false;


// if (isLeader === true){
//     price=0;
// }
// else{
//     price = price + 100;
// }

// console.log(price);
// price = isLeader === true ? 0 : price + 100;


//semi-advanced ternary 
if (isLeader === true){
    if(price > 1000){
        price = price / 2;
    }
    else {
        price=0;
    }
}
else{  
    price += 100;
}

// console.log(price);



