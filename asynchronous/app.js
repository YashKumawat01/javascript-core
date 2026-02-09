// console.log("ONE")
// console.log("TWO")


// function hello(){
//     console.log("Hello")
// }

// setTimeout(hello,2000)

// console.log("THREE")
// console.log("FOUR")


// =============================  CALL BACK =============================

// function sum(a,b){
//     console.log(a+b)
// }

// function calculator(a,b,sumCallback){
//     sumCallback(a,b)
// }

// // calculator(3,78,sum)
// calculator(12,45, (c,d)=>{
//     console.log(c+d)
// })

// =============================  CALL BACK & SET TIME OUT =============================
const greet = ()=>{
    console.log("Weeeeee")
}
setTimeout(greet,3000)


// =============================  NESTING ========================================

let age = 89;
if(age>=19){
if(age>=60){
    console.log("Please")
}
else{
    console.log("Nikal Na")
}
} else{
    console.log("Hatt BE")
}

// =============================  NESTING ========================================

for(i=0;i<5;i++){
    str=""
    for(j=0;j<5;j++){
        str = str+j;
    }
    console.log(i,str)
}


// =============================  CALLBACK - NESTING (CALLBACK HELL)========================================

function getData(dataId, getNextdata){
    setTimeout(()=>{
        console.log("Data",dataId)
        if(getNextdata){
            getNextdata()
        }
    },3500)
}

getData(1,()=>{
    getData(2)
})
