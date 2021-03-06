const numbers = [1,4,3,6,8,3,2,1,8,0,5,1,9,7];

const output = except(numbers, [0,3]);

console.log(output);

function except(array, excluded) {
    return array.filter( n => !excluded.includes(n) )
}