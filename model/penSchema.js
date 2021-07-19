const mongoose = require('mongoose');

const penSchema = new mongoose.Schema({
    penName : {
        type : String,
        unique : true,
        required : true
    },
    penImage : {
        type : String,
        unique : true,
        required : true
    },
    active : {
        type : Boolean,
        required : true
    }
},
{
    timestamps: true
})

const Pen = mongoose.model('PEN', penSchema);

module.exports = Pen;