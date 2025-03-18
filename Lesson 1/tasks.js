function deepCopy(obj) {
    const newObj = {}
    Object.keys(obj).forEach(key=>{
        newObj[key] = typeof obj[key] === 'object' ? deepCopy(obj[key]) : obj[key];
    });
    return newObj;
}

function myMap(arr, callback) {
    const newArr = [];
    for (let i = 0; i < arr.length; i++)
        newArr[i] = callback(arr[i], i, arr);
    return newArr;
}


// Solution #1
function myPromiseAll(promiseArr) {
    return new Promise((resolve, reject)=>{
        const results = [];
        let completed = 0;
        promiseArr.forEach(promise=>{
            Promise.resolve(promise).then(res=>{
                results.push(res);
                completed += 1;
                if (completed == promiseArr.length)
                    resolve(results);
            }).catch(err=>{
                reject(err);
            })
        });
    });
}

// Solution #2
// function myPromiseAll(promiseArr) {
//     if (promiseArr.length == 0)
//         return Promise.resolve([]);
    
//     const [first, ...rest] = promiseArr;
//     return Promise.resolve(first).then(firstResult => {
//         return myPromiseAll(rest).then(restResults => {
//             return [firstResult, ...restResults];
//         })
//     })
// }

// Solution #3
// function myPromiseAll(promiseArr) {
//     return new Promise((resolve, reject)=>{
//         promiseArr.reduce((results, promise)=>{
//             Promise.resolve(promise).then(res=>{
//                 return 
//             })
//         })
//     }, Promise.resolve([]))
// }

myPromiseAll([
    123,
    "sasda",
    new Promise((resolve, reject) => {
        setTimeout(resolve, 1000, "foo");
    })
]).then(console.log).catch(err => console.log("Error:", err));
Promise.all([
    123,
    "sasda",
    new Promise((resolve, reject) => {
        setTimeout(resolve, 1000, "foo");
    })
]).then(console.log).catch(err => console.log("Error:", err));

