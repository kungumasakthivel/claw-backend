const jwt = require('jsonwebtoken');

function authenticator(req, res, next) {
    const token = req.headers.authorization

    jwt.verify(token, 'manish', (err, decode) => {
        if(err) {
            res.send({
                message: err.message,
                status: 2
            })
        }
        if(decode) {
            req.body.user = decode.userId
            next()
        } else {
            res.send({
                message: 'Token is invalid',
                status: 2,
            })
        }
    })
}

module.exports = {
    authenticator
}