const form = document.querySelector('.signup-form')
const username = document.querySelector('#username')
const feedback = document.querySelector('.feedback')
const usernamePattern = /^[a-zA-Z]{6,12}$/

form.addEventListener('submit', e=>{
    e.preventDefault()

    // validation // 
    const username = form.username.value;


    let result = usernamePattern.test(username)

    console.log(result)

    if(result){
        feedback.textContent = 'Username is valid'
    }
    else{
        feedback.textContent = 'username must contain letters only and 6-12 characters long'
    }

})


//live feedback

form.username.addEventListener('keyup', e => {
   if(usernamePattern.test(e.target.value)){
       form.username.setAttribute('class', 'success')
   }
   else{
    form.username.setAttribute('class', 'error')
   }
})



// testing regular expression

// const username1 = 'armans'

// const pattern = /[a-zA-Z]{6,}      ** includes everything
// const pattern = /^[a-z]{6,}$/

// let result = pattern.test(username1) // return True or False

// let another = username1.search(pattern) ** returns integer of the position it gets match

// console.log(result)
// console.log(another)


