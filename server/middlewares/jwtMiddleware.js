const jwt = require('jsonwebtoken')

function verifyToken(req, res, next) {
    const token = req.headers.authorization
    if (token) {
        jwt.verify(token, "secret-key", function (err, decoded) {
            if (err) {
                res.status(400).json("invalid token")
            } else {
                next()
            }
        })
    } else {
        res.status(401).json("No Token Supplied")
    }
}

module.exports = verifyToken
