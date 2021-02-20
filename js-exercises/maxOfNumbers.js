function maxOfTwoNumbers(a, b) {
    return (a > b) ? a : b;
}

let num1 = 10;
let num2 = 87;
let ans = maxOfTwoNumbers(num1, num2);
console.log('Max of', num1, 'and', num2, 'is', ans);

num1 = 65;
num2 = 43;
ans = maxOfTwoNumbers(num1, num2);
console.log('Max of', num1, 'and', num2, 'is', ans);

num1 = 55;
num2 = 55;
ans = maxOfTwoNumbers(num1, num2);
console.log('Max of', num1, 'and', num2, 'is', ans);