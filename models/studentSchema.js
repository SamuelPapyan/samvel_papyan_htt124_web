const mongoose = require('mongoose');
const studentSchema = new mongoose.Schema({
    name: String,
    surname: String,
    age: Number,
    group: String,
    username: String,
    password: String
});

const Student = mongoose.model('Student', studentSchema);
module.exports = Student;