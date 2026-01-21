// 21 Jan 2026


const arr = [5,1,3,2,6]

// Filter Out Odd Values

const output = arr.filter(x => {
    return x%2;
})

const lessOutput = arr.filter(x =>{
    return x>4;
})

console.log(output)

console.log(lessOutput)