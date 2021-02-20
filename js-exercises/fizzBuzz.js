function fizzbuzz(num) {
    if(typeof num !== "number")
        return NaN;

    return (num % 15 === 0) ? 'FizzBuzz' : ((num % 5 === 0) ? 'Buzz' : ((num % 3 === 0) ? 'Fizz' : num));
}

let num = 50;
let ans = fizzbuzz(num);
console.log(num, ans);

num = 45;
ans = fizzbuzz(num);
console.log(num, ans);

num = false;
ans = fizzbuzz(num);
console.log(num, ans);

num = 21;
ans = fizzbuzz(num);
console.log(num, ans);

num = 10;
ans = fizzbuzz(num);
console.log(num, ans);

num = 88;
ans = fizzbuzz(num);
console.log(num, ans);