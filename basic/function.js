
//Function //

// A block of code to do something when it is called //

// Function declaration

function greet(){
    console.log('Hello this is a greeting')
}

// Function expression 

const meet = function(){
    console.log('Meeting me wow')
}

// Receieving parameter
const sum = function(num1,num2){
    console.log(num1+num2)
}

// Return keyword in a function
const Area = function(len,heg){
    return len*heg
}

//Arrow Function 

const Velocity = (distance,time) =>{
    return distance/time
}

// Making the same function in one line 

// const Velocity = (distance,time) => distance/time

//   Practicing some arrow function 

// const greet = function(){
//     return 'hello, world'
// }

// const greet = () => 'hello, world';

const bill = (product,tax) =>{
    let total = 0
    for(let i=0;i<product.length;i++){
        total += product[i] + product[i] * tax
    }
    return total
}


greet()
meet()
sum(10,12) //Argument
const area = Area(20,30)
console.log(area)
const velo = Velocity(200,5)
console.log(`Velocity: ${velo}`)
let get_bill = bill([20,30,40,50], .20)
console.log(`The total is ${get_bill}`)