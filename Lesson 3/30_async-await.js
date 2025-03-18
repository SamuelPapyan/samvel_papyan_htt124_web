async function isTriangle(a,b,c) {
    const ab = a+b;
    const bc = b+c;
    const ac = a+c;
    if (ab <= c || bc <= a || ac <= b)
        throw new Error(`It's not triangle: Sides: a:${a} b:${b} c:${c}`)
    return [a,b,c];
}

async function avgSizeOfTriangle(nums) {
    const avg = nums.reduce((acc, x)=>{
        acc += x;
        return acc;
    }) / nums.length;
    if (avg < 1)
        throw new Error("This triangle is too small");
    return avg;
}
  
(async function(){
    try {
        const nums = await isTriangle(0.1, 0.2, 0.4);
        console.log(`Middle size of this triangle is ${await avgSizeOfTriangle(nums)}`);
    } catch (err) {
        console.error(err.message);
    }
})();