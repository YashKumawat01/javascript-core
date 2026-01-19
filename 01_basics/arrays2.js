// 19 Jan 2026

console.log("Hello")

const marvelHero = ["Spiderman", "Ironman", "Hulk", "Thor"]

const dcHero = ["Batman", "Superman","Shazam","Flash"]

// marvelHero.push(dcHero)

// console.log(marvelHero)

// ===========================================================

// Instead of push we can use concat
console.log("by using concat")
const allHero = marvelHero.concat(dcHero)
console.log(allHero)

// ===========================================================



//  We can use spread method
console.log("by using spread operator")
const allSuperhero = [...marvelHero,...dcHero]
console.log(allSuperhero)


// ===========================================================


const anotherArray = [1,2,3,[,4,5,6],7,[6,7,[8,9]]]

const fixed_anotherArray = anotherArray.flat(Infinity)
console.log(fixed_anotherArray)



// ===========================================================


console.log(Array.isArray("YASHU"))
console.log(Array.from("YASHU"))

console.log(Array.from({name:"Kumawat"}))


// ===========================================================



let score1 = 300
let score2 = 400
let score3 = 500

console.log(Array.of(score1,score2,score3))


