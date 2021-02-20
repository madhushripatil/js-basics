function showStars(num) {
    for(let i=1; i<=num; i++) {
        let stars = '';
        for(let j=0; j<i; j++) {
            stars += '*';
        }
        console.log(stars);
    }
}

showStars(5);