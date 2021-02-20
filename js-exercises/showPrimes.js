function showPrimes(limit) {
    for(let num = 2; num <= limit; num++) {

        let isPrime = true;
        for(let i = 2; i < num; i++) {
            if(num % i === 0) {
                isPrime = false;
                break;
            }
        }
        if(isPrime)
            console.log(num);
    }
}

showPrimes(15);