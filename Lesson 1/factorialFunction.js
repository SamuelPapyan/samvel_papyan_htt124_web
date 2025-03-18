function factorial(num) {
    let x = 1;
    for (let i = 2; i <= num; i++)
        x *= i;
    return x;
}

function factorial(num) {
    if (num == 1) return num;
    return num * factorial(num - 1);
}

function factorial(num) {
    return num < 2 ? num : num * factorial(num - 1);
}


const fact = factorial(4);
console.log(fact);