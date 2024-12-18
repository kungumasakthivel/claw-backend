const mongoose = require('mongoose');

const CrudSchema = mongoose.Schema({
    title: {type: String, required: true},
    body: {type: String, required: true},
    user: {type: String, required: true}
}, {
    versionKey: false
});

const CrudModel = mongoose.model("crud", CrudSchema);

module.exports = {CrudModel};
