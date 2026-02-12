// alert("Welcome To DOM Manipulation Chapter")

document.body.style.backgroundColor="green"

// document.body.childNodes[1].innerText="GFFGF"

let header = document.getElementById("heading");

console.dir(header)
console.log(header)

header.style.color="black"

// let paras = document.getElementsByTagName("p")
// console.log(paras)


let element1 = document.querySelector('p')
console.dir(element1)
console.log(element1.tagName)

let allElement = document.querySelectorAll("p")
console.dir(allElement)