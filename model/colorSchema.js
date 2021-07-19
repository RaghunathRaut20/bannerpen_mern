const mongoose = require('mongoose');

const colorSchema = new mongoose.Schema({
    penId : {
        type : mongoose.Schema.Types.ObjectId,
        required : true
    },
    img : {
        type : String,
        required : true,        
    },
    name:{
        type : String,
        required : true
    },
    active : {
        type : Boolean,
        required : true
    } 
})
const color = mongoose.model('COLOR', colorSchema)

module.exports = color;