const jwt = require('jsonwebtoken');
const User = require('../model/userSchema');

const Authenticate = async (req, res, next) =>{
    try {        
        if(req.cookies.jwtoken){
            const token = req.cookies.jwtoken;
            //console.log(process.env.SECRETE_KEY);
            const verifyToken = jwt.verify(token, process.env.SECRETE_KEY);
            console.log(verifyToken);
            const rootUser = await User.findOne({ _id : verifyToken._id, "tokens.token" : token  })

            if(!rootUser) {
                req.success = false;
                req.message = 'User Not Found';
                //throw new Error('User Not Found')
            } else {
                //console.log(rootUser)
                req.token = token;
                req.rootuser = rootUser;
                req.userID = rootUser._id;
                req.success = true;
            }
        } else {
            req.success = false;
            req.message = 'Please Login';
        }
        next()
    } catch (err) {
        res.status(400).send('Internal Error Please Re Login')
        console.log(err)
    }
}

module.exports = Authenticate;