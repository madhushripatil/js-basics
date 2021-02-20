function isLandscape(width, height) {
    return (width == height) ? 'Square' : ((width > height) ?'landscape' : 'portrait');
}

let width = 10;
let height = 6;
let ans = isLandscape(width, height);
console.log('Given picture is', ans);

width = 13;
height = 18;
ans = isLandscape(width, height);
console.log('Given picture is', ans);

width = 20;
height = 20;
ans = isLandscape(width, height);
console.log('Given picture is', ans);