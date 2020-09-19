// Callback is a regular function which takes function as a argument 

// const myFunc = (callbackFun) =>{
//     let value = 40
//     callbackFun(value)
// }

// myFunc((value) => {
//     console.log(value)
// })

const numArray = [1,2,3,4,5]

// Foreach and Map takes callback function as an argument //

let newNum = numArray.forEach(x => x*x)

let oldNum = numArray.map(x => x*x)
console.log(newNum)
console.log(oldNum)


