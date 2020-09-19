// const content = document.querySelector('.error-text')

// content.classList.add('error')
// content.classList.remove('error')
// content.classList.toggle('error')
 
const content = document.querySelectorAll('p')

content.forEach(element => {
    if(element.textContent.includes('error')){
            element.classList.add('error')
    }
    if(element.textContent.includes('success')){
        element.classList.add('success')
    }

});

// For adding 

const article = document.querySelector('article')

// Converting into Array //

Array.from(article.children)

Array.from(article.children).forEach((child) => {
    child.classList.add('article-content')
})


// 

const title = document.querySelector('h2')
console.log(title.parentElement)
console.log(title.nextElementSibling)
console.log(title.prevElementSibling)