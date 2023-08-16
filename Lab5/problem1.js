function getInteger() {
    do {
        let number = prompt("Enter a positive integer: ");
        let numint = Number(number);

        if (!isNaN(numint) && numint > 0 && Number.isInteger(numint)) {
            return numint;
        }

    } while (true);
}

function showPrimes(n){
    let primes = [];
    for(let i = 2; i < n; i++){
        if(!isPrime(i)) continue;
        primes.push(i);
    }
    return primes;
}

function isPrime(n){
    for(let i = 2; i < n; i++){
        if(n % i == 0) return false;
    }
    return true;
}

let inputNum = getInteger();
alert(`For n = ${inputNum} primes number are ${showPrimes(inputNum)}`);