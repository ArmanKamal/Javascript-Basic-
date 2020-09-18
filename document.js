// DOCUMENT OBJECT MODEL // 

// The Document Object Model (DOM) is a programming interface for HTML and XML documents. 
// It represents the page so that programs can change the document
//  structure, style, and content. 
// The DOM represents the document as nodes and objects. 
// That way, programming languages can connect to the page.


//Query Selector //

// Selecting one specific node or elements //
const para = document.querySelector('.error')
console.log(para)

// For taking all nodes or elements //
const allPara = document.querySelectorAll('p')


console.log(allPara)
console.log(allPara[0])

// get an element by id // 

const title = document.getElementById('title')

console.log(title)

// get element by their class name // 

const errors = document.getElementsByClassName('error')
console.log(errors)

// get element by their tag name //

const tag = document.getElementsByTagName('p')
console.log(tag)

const paragraph = document.querySelector('p')
//  console.log(paragraph.innerText)

// For chaning a paragraph 

paragraph.innerText = 'Now you are a ninja'

const paras = document.querySelectorAll('p')

paras.forEach(para => {
    console.log(para.innerText)
    para.innerText += ' New Text added'
})

// Replacing an html

const content = document.querySelector('.content')

// content.innerHTML = '<h2>This is a new h2 </h2>'

const people = ['mario','luigi','yoshi']

people.forEach(p => {
    content.innerHTML += `<p>${p}</p>`
})

// Get & Set Attribute

const link = document.querySelector('a')

console.log(link.getAttribute('href'))
    
link.setAttribute('href', 'https://www.google.com')

link.innerText =  'Google Link'

const msg =  document.querySelector('.error')

console.log(msg.getAttribute('class'))

msg.setAttribute('class','success')

// Creating new attribute

msg.setAttribute('style','color:green')

// Now if style attribute already exists then you cant use setAttribute because it will overwrite it

// For appending properties to style attrbute

msg.style.margin = '20px'
msg.style.fontSize = '50px'
msg.style.margin = ''
