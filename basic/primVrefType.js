// Primitive Types -> Numbers, String, Boolean , null, undefined , symbols //

// Reference Types -> all types of objects -> object literal, arrays, functions,dates,all other objects


// primitive values 

// Changing doesnot affect the other in primitive types and they are seperated variable in stack //
let scoreOne = 50;
let scoreTwo = scoreOne;

console.log(`scoreOne ${scoreOne}`, `scoreTwo ${scoreTwo}`);

scoreOne = 100;

console.log(`scoreOne ${scoreOne}`, `scoreTwo ${scoreTwo}`);


// Reference Types //

// Changing affect the other in reference types //
// Both will be changed as they both point to the same thing in Heap//

const userOne = { name: 'Arman', age:30};
const userTwo = userOne;

console.log(userOne, userTwo)

userOne.age = 45

console.log(userOne, userTwo)