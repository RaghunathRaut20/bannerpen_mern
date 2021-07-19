const mongoose = require('mongoose');

const subpenSchema = new mongoose.Schema({
    penId : {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    img : {
        type : String,
        required : true,
    },
    name : {
        type : String,
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

const subPen = mongoose.model('SUBPEN', subpenSchema);

module.exports = subPen;