const express = require('express');
const studentsRepo = require('../repositories/studentRepository');
const path = require('path');
const isAuthenticated = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/', [
    isAuthenticated,
    (err, req, res, next)=>{
        res.json(err);
    },
    async(req, res)=>{
        res.json(await studentsRepo.getAllStudents(req.query.name, req.query.surname));
}])

router.post('/', async(req, res)=>{
    await studentsRepo.addStudent(req.body);
    res.json(req.body);
})

router.patch('/:id', async(req, res)=>{
    await studentsRepo.updateStudent(req.params.id, req.body);
    res.json(req.body);
})

router.delete('/:id', async(req, res)=>{
    await studentsRepo.deleteStudent(raq.params.id);
    res.json(req.body);
})

router.get('/add', (req, res)=>{
    res.contentType('text/html');
    res.sendFile(path.join(__dirname, "..", "form.html"));
})

router.get('/favicon.ico', (req, res) => res.status(204));

router.get('/:id', async(req, res)=>{
    res.json(await studentsRepo.getStudentById(req.params.id));
})

module.exports = router