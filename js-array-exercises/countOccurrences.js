const numbers = [1,2,3,4,1,5,8,6,1,5,1,4,1];
const count = cntOccurrences(numbers, 1);
console.log(count);

function cntOccurrences(array, searchElement) {
    /*let cnt = 0;
    for(let num of array)
        cnt = (num === searchElement) ? cnt + 1 : cnt;
    return cnt;*/

    /*let cnt = 0;
    let indexOfElement = array.indexOf(searchElement);
    while(indexOfElement !== -1 && indexOfElement < array.length) {
        cnt++;
        indexOfElement = array.indexOf(searchElement, indexOfElement + 1);
    }
    return cnt;*/

    // reduce method
    return array.reduce((cnt, num) => {
        cnt = (num === searchElement) ? cnt + 1 : cnt;
        return cnt;
    }, 0);
}