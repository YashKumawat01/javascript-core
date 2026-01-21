// 21 Jan 2026

const arr = [5,2,7,8,6]

function findSum(arr){
    let sum = 0;
    for(let i=0; i<arr.length;i++){
        sum = sum+arr[i];
    }
    return sum;
}

console.log(findSum(arr))

// Above Method is Standard

// Now we Use Reduce Method

// const output = arr.reduce((acc,curr)=>acc+curr,0);

const output = arr.reduce(function(acc,crr){
    acc=acc+crr;
    return acc
},0)



console.log(output)