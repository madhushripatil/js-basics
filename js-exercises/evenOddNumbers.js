function showNumbers(limit) {
    let start = 0;

    while(start <= limit) {
        if(start % 2  === 0)
            console.log(start, "EVEN");
        else
            console.log(start, "ODD");
        start++;
    }
}

console.log("-----------------------");
console.log("Test case");
console.log("-----------------------");
showNumbers(10);

console.log("-----------------------");
console.log("Test case");
console.log("-----------------------");
showNumbers(35);

console.log("-----------------------");
console.log("Test case");
console.log("-----------------------");
showNumbers(26);

console.log("-----------------------");
console.log("Test case");
console.log("-----------------------");
showNumbers(16);