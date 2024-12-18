const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { authenticator } = require('../middlewares/authenticator');
const { CrudModel } = require('../models/CrudModel');
const crudRouter = express.Router();
crudRouter.use(authenticator)

crudRouter.get('/', async(req, res) => {
    console.log(req.body.user)
    try {
        let data = await CrudModel.find({user:req.body.user})
        res.send({
            data: data,
            message: 'success',
            status: 1
        })
    } catch (err) {
        res.send({
            message: err.message,
            status: 0
        })
    }
    
})

crudRouter.post('/create', async(req, res) => {
    // const {title, description, user} = req.body;
    try {
        let note = new CrudModel(req.body);
        await note.save();
        res.send({
            message: 'created successfully',
            status: 1 
        })
    } catch (err) {
        res.send({
            message: 'Not created, Error: ' + err.message,
            status: 0 
        })
    }
})

crudRouter.patch('/', async(req, res) => {
    let {id} = req.headers;
    // const {title, description} = req.body;
    try {
        await CrudModel.findByIdAndUpdate({_id: id}, req.body)
        res.send({
            message: 'Updated successfully',
            status: 1 
        })
    } catch (err) {
        res.send({
            message: 'Not updated, Error: ' + err.message,
            status: 0 
        })
    }
})

crudRouter.delete('/', async(req, res) => {
    let {id} = req.headers;
    try {
        await CrudModel.findByIdAndDelete({_id:id})
        res.send({
            message: 'Deleted successfully',
            status: 1
        })
    } catch (err) {
        res.send({
            message: 'Not Deleted, Error: ' + err.message,
            status: 0
        })
    }
})

module.exports = {crudRouter}