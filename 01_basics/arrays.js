// Arrays inJavascript - 16 Jan 20266

const myArr = [1,2,3,4,5]

const myHeroes = ["Krrish","Ironman","Spiderman"]

console.log(myArr)
console.log(myHeroes)

const myArr2 = new Array(1,2,3,4)
console.log(myArr2[2])


// Array Methods

myArr.push(6)
console.log(myArr)

myArr.push(8)
console.log(myArr)

// myArr.pop(5)
// console.log(myArr)

myArr.unshift(10)
console.log(myArr)
console.log(".join method ->")


const newArr = myArr.join()
console.log(newArr)
console.log(typeof(newArr))



//  Slice and Splice Method

console.log("Slice and Splice Method")

console.log("A",myArr)

const myN1 = myArr.slice(1,4)
console.log(myN1)

console.log("B",myArr)


// 


const myN2 = myArr.splice(1,4)
console.log("C", myArr)
console.log(myN2)