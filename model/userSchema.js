const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    fName : {
        type : String,
        required : true
    },
    lName : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    phoneNo : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true
    },
    tokens : [{
        token : {
            type : String,
        }
    }],
},
{
    timestamps: true
}) 

userSchema.pre('save', async function(next){
    if(this.isModified('password')){
       this.password = await bcrypt.hash(this.password, 12); 
    }
    next();
})

userSchema.methods.generateauthtoken = async function(){
    try{
        let token = jwt.sign({ _id : this._id},  process.env.SECRETE_KEY)
        this.tokens = this.tokens.concat({ token : token });
        await this.save();
        return token;
    } catch (err) {
        console.log(err)
    }
}

const User = mongoose.model('USER', userSchema);

module.exports  = User;    