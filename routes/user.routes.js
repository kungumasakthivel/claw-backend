const express = require('express');
const bcrypt = require('bcrypt');
const { UserModel } = require('../models/UserModel');
const jwt = require('jsonwebtoken');

const userRouter = express.Router();

userRouter.post('/register', async(req, res) => {
    const {name, email, password} = req.body;

    let data = await UserModel.findOne({email})
    // console.log(data);
    if(data) {
        return res.status(400).json({
            message: 'user already registered',
            status: 0
        })
    }

    bcrypt.hash(password, 5, async function(err, hash) {
        if(err) {
            return res.send({message: 'something went wrong', status: 0})
        }
        try {
            let user = new UserModel({name, email, password:hash})
            await user.save()
            res.send({
                message: 'user created successfully',
                status: 1
            })
        } catch(err) {
            res.send({
                message: err.message,
                status: 0
            })
        }
    })
})

userRouter.post('/login', async(req, res) => {
    const {email, password} = req.body;

    let option = {
        expiresIn: "120d"
    }
    
    try {
        let data = await UserModel.find({email})
        // console.log(data)
        console.log(data.length > 0)
        if(data.length > 0) {
            let token = jwt.sign({userId: data[0]._id}, 'manish', option)
            bcrypt.compare(password, data[0].password, function(err, result) {
                console.log(token)
                if(err) {
                    return res.send({
                        message: 'something went wrong ' + err,
                        status: 0
                    })
                }
                if(result) {
                    res.send({
                        message: "user logged in successfully",
                        token: token,
                        status: 1
                    })
                } else {
                    res.send({
                        message: 'Incorrect Password',
                        status: 0
                    })
                }
            })
        } else {
            res.send({
                message: 'user does not exist',
                status: 0
            })
        }
    } catch(err) {
        res.send({
            message: 'user error block does not exist ' + err.message,
            status: 0
        })
    }
})

module.exports = {userRouter}
