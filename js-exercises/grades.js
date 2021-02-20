function calculateGrade(marks) {
    let avg = calculateAverage(marks);
    if(avg < 60)
        return 'F';
    else if(avg < 70)
        return 'D';
    else if(avg < 80)
        return 'C';
    else if(avg < 90)
        return 'B';
    return 'A';
}

function calculateAverage(nums) {
    let sum = 0;
    for(let num of nums) {
        sum += num;
    }
    return sum / nums.length;
}

let marks = [80, 80, 50];
console.log(marks, calculateGrade(marks));

marks = [80, 80, 100];
console.log(marks, calculateGrade(marks));

marks = [74, 86, 93];
console.log(marks, calculateGrade(marks));

marks = [95, 91, 93];
console.log(marks, calculateGrade(marks));