// Objects in  Javascript have properties & things they can do(methods)

/* Blog Object -> properties -> title, content, author
               -> methods -> publish,unpublish,delete  */


// Object Literal
let user = {
    name: 'Arman',
    age: 25,
    email: 'arman@arman.com',
    location: 'berlin',
    // blogs: ['why mac & cheese rules','10 things to make with marmite'],

    blogs: [
        {title: 'why mac & cheese rules', likes:30},
        {title:'10 things to make with marmite', likes:100}
    ],

    login: function(){
        console.log('the user is logged in')
    },
    logout(){
        console.log('The user is logout')
    },
    logBlogs(){
        this.blogs.forEach(blog =>{
            console.log(blog.title)
        })
    }

    // If we use arrow function and then use this keyword then it will be Browser window object 
    // So Try to use normal function inside an object

};  



console.log(user)
console.log(user.name)
console.log(user.email.toUpperCase())
console.log(user.blogs[1])
console.log(user['name'])
user.login()
user.logout()
user.logBlogs()
console.log(user.blogs[0].title)
console.log(`Likes: ${user.blogs[1].likes}`)
user.logBlogs()

//Math Objects

console.log(Math.PI)
console.log(Math.round(7.7))
console.log(Math.round(7.2))
console.log(Math.floor(7.8))
console.log(Math.ceil(4.2))
console.log(Math.trunc(5.2))
console.log(Math.abs(-32))

const random = Math.random()
console.log(Math.round(random *40))  // Number between 0-39