function checkSpeed(speed) {
    let speedLimit = 70;
    if(speed <= speedLimit)
        return 'Ok';

    let kmPerPoint = 5;
    let points = Math.floor((speed - speedLimit) / kmPerPoint);
    return (points === 0) ? 'Ok' : ((points < 12) ? points : 'License suspended');
}

let arrow = '->';
let speed = 50;
let ans = checkSpeed(speed);
console.log(speed, arrow, ans);

speed = 54;
ans = checkSpeed(speed);
console.log(speed, arrow, ans);

speed = 72;
ans = checkSpeed(speed);
console.log(speed, arrow, ans);

speed = 76;
ans = checkSpeed(speed);
console.log(speed, arrow, ans);

speed = 84;
ans = checkSpeed(speed);
console.log(speed, arrow, ans);

speed = 190;
ans = checkSpeed(speed);
console.log(speed, arrow, ans);

speed = 120;
ans = checkSpeed(speed);
console.log(speed, arrow, ans);