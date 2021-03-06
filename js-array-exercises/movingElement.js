const numbers = [1,2,3,4];

console.log('Original array -', numbers);

let output = move(numbers, 0, 1);
console.log(output);

output = move(numbers, 1, -2);
console.log(output);

output = move(numbers, 4, 1);
console.log(output);

output = move(numbers, 3, -4);
console.log(output);

output = move(numbers, 3, -2);
console.log(output);

output = move(numbers, 2, 1);
console.log(output);

output = move(numbers, 2, -2);
console.log(output);


function move(array, index, offset)  {
    let arrLength = array.length;
    if(index < 0|| index >= arrLength) {
        console.error("Invalid index");
        return;
    }
    const newPosition = index + offset;
    if(newPosition < 0 || newPosition >= arrLength) {
        console.error("Invalid offset");
        return;
    }

    let modified = [];
    modified = [...array.slice(0, index), ...array.slice(index + 1)];
    modified.splice(newPosition, 0, array[index]);
    return modified;
}