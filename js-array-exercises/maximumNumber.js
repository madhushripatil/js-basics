const numbers = [1,2,367,4,100,53,78];
const max = getMax(numbers);
console.log(max);

function getMax(array) {
    if(array.length === 0) return undefined;

    return array.reduce( (max, num) => (num > max) ? num : max);
}