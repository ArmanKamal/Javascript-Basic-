const add_item = document.querySelector('.add');
const list = document.querySelector('.todo')
const search = document.querySelector('.search input')

const generateTemplate = function (todo) {
    const html = `<li class="list-group-item d-flex justify-content-between">
                     <span>${todo}</span>
                    <i class="fa fa-trash delete"></i>
                  </li>`

                list.innerHTML += html
}

// Adding Items

if (add_item) {
    add_item.addEventListener('submit', (e) => {
        e.preventDefault();
        const todo = add_item.add.value.trim()
        if(todo.length){
            generateTemplate(todo)
            add_item.reset()
        }
        
    })
}

// delete Todos

list.addEventListener('click', e=> {
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove()
    }
})


const filterTodo = function (term){
     Array.from(list.children)
     .filter((todo) => {
        return !todo.textContent.toLowerCase().includes(term);
     })
     .forEach((todo) => {
         todo.classList.add('filtered')
     })

     Array.from(list.children)
     .filter((todo) => {
        return todo.textContent.toLowerCase().includes(term);
     })
     .forEach((todo) => {
         todo.classList.remove('filtered')
     })
}


// Search todo

search.addEventListener('keyup', () => {
    const term = search.value.trim().toLowerCase();
    filterTodo(term)

})
