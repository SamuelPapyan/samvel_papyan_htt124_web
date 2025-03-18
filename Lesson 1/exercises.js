function greeting(name, surname, age) {
    if (age)
        console.log(`Hello ${name} ${surname} ${age}`);
    else
        console.log("not provided");
}

function getMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++)
        max = arr[i] > max ? arr[i] : max;
    return max;
}

greeting("Samvel", "Papyan", 23);
greeting("Samvel", "Papyan");

console.log(getMax([5,7,12,4,6]));