// const md5 = require('md5');

// const txt = "Hello World";
// console.log(md5(txt));

const {
    v4: uuidv4,
    parse: uuidParse,
    stringify: uuidStringify
} = require('uuid');
const generatedId = uuidv4();
console.log(generatedId);
console.log(uuidParse(generatedId));
console.log(uuidStringify(uuidParse(generatedId)));