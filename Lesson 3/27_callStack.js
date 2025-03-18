(function first() {
    console.log(1);
  })();
  (function first() {
    console.log(1.25);
  })();
  (function first() {
    console.log(1.5);
  })();
  
  setTimeout(() => {
    console.log(2);
  }, 0);
  
  setTimeout(() => {
    console.log(2.5);
  }, 0);
  
  Promise.resolve().then(() => {
    console.log(3);
  });
  
  Promise.resolve().then(() => {
    console.log(3.5);
  });
  
  (function third() {
    console.log(3.25);
  })();
  (function third() {
    console.log(3.5);
  })();
  (function third() {
    console.log(4);
  })();