let student1 = {
    name: "Samvel",
    surname: "Papyan",
    age: 22
};

let student2 = {
    name: "Garik",
    surname: "Grigoryan",
    age: 23
}
console.log(student1, student2);
student2 = student1
console.log(student1, student2);
student1.age = 25;
console.log(student1, student2);
student2.name = 'Karen';
console.log(student1, student2);

const otherStudent = {...student1};
console.log(student1, student2, otherStudent);
otherStudent.surname = "Saroyan";
console.log(student1, student2, otherStudent);
