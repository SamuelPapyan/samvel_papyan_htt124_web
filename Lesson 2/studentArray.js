const fs = require('fs');
const studentArray = require('../students.json')
const path = require('path');

function getStudentById(id) {
    return studentArray.find(student => student.id = id)
}

function updateData() {
    fs.writeFile(path.join(__dirname, '..', "students.json"), JSON.stringify(studentArray), {
        encoding: "utf-8",
        flag: "w"
    },(err)=>{
        if (err) console.log(err);
        else console.log("File's written.")
    })
}

function getAllStudents(name, surname) {
    return studentArray.filter(student => {
        return (name ? student.name.toLowerCase().includes(name.toLowerCase()) : true) &&
            (surname ? student.surname.toLowerCase().includes(surname.toLowerCase()) : true)
    })
}

function addStudent(newStudent) {
    studentArray.push(newStudent);
    updateData();
}

function deleteStudent(student) {
    const index = studentArray.findIndex(std=>std.id == student.id);
    studentArray.splice(index, 1);
    updateData();
}

function updateStudent(student) {
    const tmp = studentArray.find(item=>item.id == student.id);
    Object.assign(tmp, student);
    updateData();
}
// addStudent({id: 5, name: "Garik", surname: "NAghdalyan", age: 22, group: "HTT124"})
// updateStudent({id: 3, name: "Saro"});
// console.log(getAllStudents("Saro"));
// deleteStudent({id: 2})
// console.log(studentArray);

module.exports = {getStudentById, getAllStudents, addStudent, deleteStudent, updateStudent};