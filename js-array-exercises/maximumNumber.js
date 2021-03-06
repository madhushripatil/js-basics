const numbers = [1,2,367,4,100,53,78];
const max = getMax(numbers);
console.log(max);

function getMax(array) {
    return array.reduce( (max, num) => {
        max = (num > max) ? num : max;
        return max;
    }, Number.MIN_SAFE_INTEGER);
}