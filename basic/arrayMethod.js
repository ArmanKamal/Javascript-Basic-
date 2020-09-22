// Filter Method

// Only return those element which satisfies the condition


// const scores = [10, 30, 15,25,50, 40,5]

// const newScores = scores.filter((score) => {
//     return score>20
// })

// console.log(newScores)

// const users = [
//     {name:'Arman', premium:true},
//     {name:'John', premium:false},
//     {name:'Cena', premium:false},
//     {name:'Kyle', premium:true},
// ]

// pre_user = users.filter(user => {
//     return user.premium
// })


// console.log(pre_user)


// MAP METHOD

// const prices = [20,10,30 ,25,15,50,80,5]

// const halfPrice = prices.map(price => {
//     return price/2
// })

// console.log(halfPrice)

// MAP METHOD IN OBJECT LITERAL ARRAY

// const products = [
//     {name: 'Gold', price: 20},
//     {name: 'Brown', price: 60},
//     {name: 'Blue', price: 30},
//     {name: 'Green', price: 12},
// ]

// salesPrice = products.map(product => {
//     if(product.price>30){
//         return {name:product.name, price:product.price/2}
//     }
//     else{
//         return product
//     }
// })

// console.log(salesPrice)

// Reduce Method

// Returns  a number

//  const scores = [10, 30, 85,25,50, 40,90]

//  const result = scores.reduce((acc,curr) => {
//     if(curr> 50){
//         acc++
//     }

//     return acc
//  }, 0)

//  console.log(result)


 const scores = [
     {player: 'mario', score:60},
     {player: 'yoshi', score:30},
     {player: 'mario', score:70},
     {player: 'john', score:60},
 ]

 const marioTotal = scores.reduce((acc,curr) => {
     if(curr.player == 'mario'){
         acc += curr.score
     }

     return acc
 },0)

 console.log(marioTotal)