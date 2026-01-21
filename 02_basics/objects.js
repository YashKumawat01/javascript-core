// 19 Jan 2026


/*
   Object Constructor ---singleton
   Object.create
*/

// Object Literals


const mySym = Symbol("key1")

const JsUser={
    name : "Yash",
    "Full Name":"Yash Kumawat",
    [mySym]:"myKey1",
    age : 23,
    occupation : "Student",
    email : "yash.gmail.com",
    isLoggedIn : false,
    lastLogin : ["Monday","Saturday"]
}

// Access Object ->

console.log(JsUser.email)

console.log(JsUser["email"])

console.log(JsUser["Full Name"])

console.log(JsUser[mySym])
// console.log(typeof JsUser[mySym])

JsUser.email="yash@email.com"
// Object.freeze(JsUser)
// JsUser.email="zzz@gmail.com"

console.log(JsUser)

// =============================================================================

JsUser.greeting = function(){
    console.log("Hello Js User")
}
console.log(JsUser.greeting())

JsUser.greetingTwo = function(){
    console.log(`Hello User,${this.name}`)
}
console.log(JsUser.greetingTwo())