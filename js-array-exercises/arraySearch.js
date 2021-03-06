const numbers = [10,15,23,56,77,43,66,29];
console.log(numbers.includes(43));

function includes(number) {
    return numbers.indexOf(number) !== -1;
}