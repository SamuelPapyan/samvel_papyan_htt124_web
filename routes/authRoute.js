const express = require("express")
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv")
const path = require("path");
const bcrypt = require('bcrypt');
const studentRepo = require("../repositories/studentRepository");
const router = express.Router()

dotenv.config();

router.get('/login', (req, res)=>{
    res.sendFile(path.join(__dirname, "..", "auth.html"));
})

router.post('/', async(req, res)=>{
    const secretKey = process.env.JWT_SECRET_KEY;
    const data = await studentRepo.getStudentByUsername(req.body.username);
    const isValid = await bcrypt.compare(req.body.password, data.password);
    if (data) {
        if (isValid)
            res.send(jwt.sign({
                username: data.username,
                name: data.name,
                surname: data.surname,
                age: data.age,
                group: data.group,
                exp: Math.floor(Date.now() / 1000) + (10 * 60),
            }, secretKey));
        else
        res.status(404).send("Wrong password, try again.");
    }
    else
        res.status(404).send("Invalid username or password.");
})

router.post('/token', (req, res)=>{
    const headerKey = process.env.JWT_HEADER_KEY;
    const secretKey = process.env.JWT_SECRET_KEY;
    try {
        const authorization = req.header(headerKey);
        const token = authorization.split(" ")[1];
        const verified = jwt.verify(token, secretKey);
        if (verified) {
            res.send(jwt.decode(token));
        }
        else
            res.status(401).send("Access denied.")

    } catch (err) {
        res.status(401).send(err);
    }
})

module.exports = router