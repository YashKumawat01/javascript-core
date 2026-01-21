// 21 Jan 2026

// const person = {
//     name: "Yash",
//     age : 23,
//     number : 999999999,
//     printFullname : function(){
//         console.log("Yash Kumawat")
//     }
// }
// const p2 = {
//     name: "ABC",
//     age : 23,
//     number : 999999999,
//     printFullname : function(){
//         console.log("ABC")
//     }
// }
// const p3 = {
//     name: "XYZ",
//     age : 23,
//     number : 999999999,
//     printFullname : function(){
//         console.log("XYZ")
//     }
// }

// console.log(person)
// console.log(person.age)
// console.log(person.name)
// console.log(person.number)
// console.log(person.printFullname())



// ----------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------


function Person(fname,lname,contact){  // It is a Constructor Function
    this.fname = fname;
    this.lname = lname;
    this.contact = contact;

    this.getName = function(){
        console.log(this.fname, this.lname)
    },

    this.getContact = function(){
        console.log(this.contact)
    }
}

const p1 = new Person("Yash","Kumawat","98746321")
const p2 = new Person("XYZ","Kumawat","98746321")
const p3 = new Person("ABC","Kumawat","98746321")
console.log(p1)
console.log(p1.getName)
p1.getName()

p2.getContact()

console.log(p3.fname)

console.log(typeof p1)
console.log(typeof Person)