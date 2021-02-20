function showSumOfMultiples(num1, num2, limit) {
    let sum = 0;
    for(let i = 0; i <= limit; i++) {
        if(i % num1 === 0 || i % num2 === 0)
            sum+=i;
    }
    return sum;
}

const num1 = 3;
const num2 = 5;
let ans = showSumOfMultiples(num1, num2, 10);
console.log(ans);