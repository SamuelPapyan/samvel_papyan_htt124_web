const jwt = require('jsonwebtoken');

function isAuthenticated(req, res, next) {
    const headerKey = process.env.JWT_HEADER_KEY;
    const secretKey = process.env.JWT_SECRET_KEY;
    try {
        const authorization = req.header(headerKey);
        if (authorization) {
            const token = authorization.split(" ")[1];
            const verified = jwt.verify(token, secretKey);
            console.log("Verified", verified);
            if (verified) {
                next();
            }
            else {
                console.log("Not verified");
                res.status(401).send("Bad Token");
            }
        }
        else
            res.status(401).send("Not Authorized");

    } catch (err) {
        console.log("Error", err.message);
        res.status(401).send(err);
    }
}

module.exports = isAuthenticated