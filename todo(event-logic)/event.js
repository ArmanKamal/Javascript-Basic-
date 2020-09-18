// const button = document.querySelector('button')

// button.addEventListener('click', () => {
//     console.log('You clicked me')
// })

// Removing Elements Using Click

// const lists = document.querySelectorAll('li')

// lists.forEach(list => {
//     list.addEventListener('click',(e) => {
//         // e.target.style.textDecoration = 'line-through'
//         e.target.remove()
//     })
// })

// Adding Elements using Click

const ul = document.querySelector('ul')
const button = document.querySelector('button')

button.addEventListener('click', () =>{
    // const li = document.createElement('li')
    // li.textContent = 'Something new'

    ul.innerHTML += '<li>Something New </li>'
    // ul.append(li)
    // ul.prepend(li)
})

// In JS there is a concept called Event Bubbling , 
//if you fire up childs event then it will also fire parent event
// TO stop this from happening just use

// e.stopPropagation()



// Best way to delete event is using delegation 

// const lists = document.querySelector('ul')

// lists.addEventListener('click', (e) =>{
//     if(e.target.tagName === 'LI'){
//         e.target.remove()
//     }
// })  

const copy = document.querySelector('.copy-me')

copy.addEventListener('copy', () => {
    console.log('Copyright dude ')
})

const box = document.querySelector('.box')

box.addEventListener('mousemove', e => {
     
   box.textContent = `Mouse X ${e.offsetX}, Mouse Y ${e.offsetY}`
    
})

document.addEventListener('wheel', e =>{
    console.log(e)
})