// 19 Jan 2026

const insta = new Object() // Singleton Object

const whatsapp ={} // Non-Singleton Object

console.log(whatsapp)

insta.name = "Yash"
insta.id = "123"
insta.LoggedIn = false

console.log(insta)

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const regularUser = {
    email : "xyz@gmail.com",
    fullname : {
        userFullName : {
            firstName : "Yash",
            lastName : "Kumawat"
        }
    }
}

console.log(regularUser.fullname)
console.log(regularUser.fullname.userFullName)
console.log(regularUser.fullname.userFullName.firstName)
console.log(regularUser.fullname.userFullName.lastName)

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const obj1 = {
    1 : "a", 2: "b"
}

const obj2 ={ 3: "c", 4 : "d"}

// const obj3 = {obj1,obj2}
// const obj3 = Object.assign({},obj1,obj2 )

const obj3 = {...obj1,...obj2}
console.log(obj3)


const course = {
    coursename : "JS in Hindi",
    Price : 999,
    courseInstructor : "Hitesh"
}

// course.courseInstructor

const {courseInstructor} = course;

console.log(courseInstructor)