function isTriangle(a, b, c, cb) {
    setTimeout(()=>{
      const ab = a+b;
      const bc = b+c;
      const ac = a+c;
      if (ab < c || bc < a || ac < b)
        cb(`It's not triangle: Sides: a:${a} b:${b} c:${c}`);
      else
        cb(null, [a, b, c])
    }, 1000);
  }
  
  async function avgSizeOfTriangle(nums, cb) {
    const avg = nums.reduce((acc, x)=>{
      acc += x;
      return acc;
    }) / nums.length;
    if (avg < 1)
      cb("This triangle is too small");
    else
      cb(null, avg);
  }
  
  isTriangle(1,2,3, (err, nums)=>{
    if (err) console.error(err)
    else {
      avgSizeOfTriangle(nums, (err1, num)=>{
        if (err1) console.error(err1);
        else console.log(`Middle size of this triangle is ${num}`);
      })
    }
  })