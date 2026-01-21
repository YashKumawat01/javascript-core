// 21 Jan 2026

const arr = [1,2,3,4,5,6,8]

// Transform of Array

// Double - > [2,4,6,8,10,12,16]
// Triple - > [3,6,9,12,15,18,24]

function double(x){
    return x*2;
}
function triple(x){
    return x*3;
}




const output = arr.map(double)

const outputTriple = arr.map(triple)

const outputBinary = arr.map(function binary(x){
    return x.toString(2)
})


console.log(output)
console.log(outputTriple)
console.log(outputBinary)

const prices = [100, 200, 300];
const gstPrices = prices.map(p => p * 1.18);
console.log(gstPrices)
