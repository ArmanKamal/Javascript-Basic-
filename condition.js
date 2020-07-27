//if statements
// const age = 20

// if (age>20)
// {
//     console.log('You are not teenager anymore')
// }
// else
// {
//     console.log('You are still a teenager')
// }

//if else if else

 const password = "  passssadd"

// if(password.length >=12)
// {
//     console.log('Password might be strong')
// }
// else if(password.length >=8)
// {
//     console.log('That password is long enough')
// }
// else{
//     console.log('password is not long enough')
// }

// Logical Operator

// if(password.length >=12 && password.includes('@'))
// {
//     console.log('Password is correct')
// }
// else if(password.length >=8 || password.includes('@'))
// {
//     console.log('Password is 8 character')
// }
// else
// {
//     console.log('Something went wrong')
// }

// //Logical Not

// let user = false

// if(!user)
// {
//     console.log('I am a user')
// }

// Break and Continue

// const numbers = [10,20,30,50,80,100]

// for (let i=0; i<numbers.length;i++)
// {
    
//     if(numbers[i] === 20)
//     {
//         continue;
//     }
//     console.log(numbers[i])

//     if(numbers[i] === 30)
//     {
//         console.log('finsih it dude')
//         break;
//     }
// }

//Switch Statement

const grade = 'D'

switch(grade){
    case 'A':
        console.log('You got A')
        break;
    case 'B':
        console.log('You got B')
        break;
    case 'D':
        console.log('You got D')
        break;
    default:
        console.log('You failed')
}