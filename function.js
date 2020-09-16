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

greet()
meet()
sum(10,12) //Argument
const area = Area(20,30)
console.log(area)