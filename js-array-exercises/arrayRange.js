const numbers = arrayFromRange(2, 10);

console.log(numbers);

function arrayFromRange(start, end) {
    let array = [];
    for (let i = start; i <= end; i++)
        array.push(i);
    return array;
}