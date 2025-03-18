function isTriangle(a,b,c) {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const ab = a+b;
            const bc = b+c;
            const ac = a+c;
            if (ab <= c || bc <= a || ac <= b)
            reject(`It's not triangle: Sides: a:${a} b:${b} c:${c}`)
            resolve([a,b,c]);
        }, 1000);
    })
}

function avgSizeOfTriangle(nums) {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
        const avg = nums.reduce((acc, x)=>{
            acc += x;
            return acc;
        }) / nums.length;
        if (avg < 1)
            reject("This triangle is too small");
        resolve(avg);
        }, 1000);
    });
}

isTriangle(0.1,0.2,0.4)
.then(avgSizeOfTriangle)
.then(res=>{
console.log(`Middle size of this triangle is ${res}`);
})
.catch(console.error);