function countTruthyUsingIncludes(values) {
    const falsyValues = [0, false, '', null, undefined, NaN];
    let cnt = 0;
    for(let i=0; i < values.length; i++) {
        if (!falsyValues.includes(values[i]))
            cnt++;
    }
    return cnt;
}

function countTruthy(values) {
    let cnt = 0;
    for(let value of values) {
        if(value)
            cnt++;
    }
    return cnt;
}

let values = [true, undefined, 1, 'hello', 'js', 80, null];
let count = countTruthy(values);
console.log(values, count);

values = [0, 1, 'computer', 80, null, 'hi', false, NaN];
count = countTruthy(values);
console.log(values, count);

values = [1, 2, 'computer'];
count = countTruthy(values);
console.log(values, count);