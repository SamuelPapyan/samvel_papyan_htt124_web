const Student = require('../models/studentSchema');
const bcrypt = require('bcrypt');
const dotenv = require('dotenv');

dotenv.config();

async function getStudentById(id) {
    return await Student.findById(id);
}

async function getStudentByUsername(username) {
    return await Student.findOne({username: username});
}

async function getAllStudents(name, surname) {
    const options = {
        $or: []
    }
    if (name) options['$or'].push({name: {$regex: new RegExp(name), $options: 'i'}});
    if (surname) options['$or'].push({surname: {$regex: new RegExp(surname), $options: 'i'}})
    return await Student.find(options).select('name surname group age username').exec();
}

async function addStudent(newStudent) {
    if (newStudent.password) 
        newStudent.password = await bcrypt.hash(newStudent.password, process.env.SALT_OR_ROUNDS)
    await Student.insertOne(newStudent);
}

async function deleteStudent(id) {
    await Student.findByIdAndDelete(id);
}

async function updateStudent(id, student) {
    if (student.password) 
        student.password = await bcrypt.hash(student.password, process.env.SALT_OR_ROUNDS)
    await Student.findByIdAndUpdate(id, student)
}

module.exports = {getStudentById, getAllStudents, addStudent, deleteStudent, updateStudent, getStudentByUsername};