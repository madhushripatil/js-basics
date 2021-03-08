let numbers = [1,2,3,4,1,5,8,6,1,5,1,4,1,10];

try {
    const count = cntOccurrences(numbers, 1);
    console.log(count);
    console.log(cntOccurrences(null, 6));
} catch (e) {
    console.log(e.message);
}

function cntOccurrences(array, searchElement) {
    if(!Array.isArray(array))
        throw new Error('Argument is not an array');

    return array.reduce((cnt, num) => (num === searchElement) ? cnt + 1 : cnt);
}