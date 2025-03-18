const jwt = require('jsonwebtoken');

function isAuthenticated(req, res, next) {
    const headerKey = process.env.JWT_HEADER_KEY;
    const secretKey = process.env.JWT_SECRET_KEY;
    try {
        const authorization = req.header(headerKey);
        if (authorization) {
            const token = authorization.split(" ")[1];
            const verified = jwt.verify(token, secretKey);
            if (verified) {
                next();
            }
            else {
                next("Bad Token");
            }
        }
        else
            next("Not Authorized");

    } catch (err) {
        next(err);
    }
}

module.exports = isAuthenticated