const jwt = require('jsonwebtoken');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs')
const cookieParser = require('cookie-parser');
router.use(cookieParser());
const authenticate = require('../middleware/Authenticate')
require('../db/conn');
const User = require('../model/userSchema');
const Bannerpen = require('../model/penSchema');
const subpen = require('../model/subpenSchema');
const color = require('../model/colorSchema');

router.post("/register", async (req, res) => {
    console.log(req.body);
    const { fName, lName, email, phoneNo, password } = req.body;
    if( !fName || !lName || !email || !phoneNo || !password ){
        return res.status(400).json({message : "Please insert all required fields", success : false})
    }
    try{
        const userExist = await User.findOne({ email : email})
        if(userExist){
            return res.status(200).json({message : "Email already exist. Please Login", success : true})
        }
        const userData = new User({fName, lName, email, phoneNo, password});
        await userData.save();
        res.status(200).json({ message : "User registered successfully" , success : true });
    } catch(err){
        console.log(err)
    }
})

router.post('/pendetails', async (req, res) => {
    try{
        console.log(req.body);
        const { penId } = req.body;
        if(!penId){
            return res.status(400).json({ message : "Please insert required fields", success : false })
        }
        const penDet = [];
        pens = await Bannerpen.findOne({ _id : penId });
        color = await color.find({ penId : penId });
        subpen = await color.find({ penId : penId });
        console.log(penDet);

        res.status(200).json({ success : true , pens : pens, color : color, subpen : subpen })    
    }catch(err){
        console.log(err)
    }
})

router.get("/about", authenticate, (req, res) => {
    if(req.success){
        res.status(200).json({ success : true, responce : req.rootUser  })
    } else {
        res.status(200).json({ success : false, message : req.message })
    }
})


// router.post("/addusers", async (req,res) => {
//     console.log(req.body)
//     const { fName, email, password } = req.body;
//     if( !fName || !email || !password ){
//         return res.status(400).json({message : "Please insert all required fields", success : false})
//     }
//     try{
//         const userExist = await User.findOne({ email : email})
//         if(userExist){
//             return res.status(200).json({message : "Email already exist. Please Login", success : true})
//         }
//         const userData = new User({fName, email, password});
//         await userData.save();
//         res.status(200).json({ message : "User registered successfully" , success : true });
//     } catch(err){
//         console.log(err)
//     }
//     // const getPen = await User.find();
//     // if(getPen){
//     //     //res.send({pen : getPen, success : true})
//     //     res.json(getPen)
//     // } else {
//     //     res.send({message : 'Empty Pen' , success : false})
//     // }
// })

router.get("/users", async (req,res) => {
    const getPen = await User.find();
    if(getPen){
        res.send({pen : getPen, success : true})
        // res.json(getPen)
    } else {
        res.send({message : 'Empty Pen' , success : false})
    }
})

router.get("/subpen", async (req,res) => {
    const getPen = await Bannerpen.find();
    if(getPen){
        res.send({pen : getPen, success : true})
    } else {
        res.send({message : 'Empty Pen' , success : false})
    }
})

router.get("/pen", async (req,res) => {
    const getPen = await Bannerpen.find();
    if(getPen){
        res.send({pen : getPen, success : true})
    } else {
        res.send({message : 'Empty Pen' , success : false})
    }
})

router.get("/color", async (req, res) => {
    const getColor = await color.find();    
    if(getColor){
        res.status(200).json({ success : true , data : getColor })
    } else {
        res.status(400).json({ success : false , data : "No Data found"  })
    }
})
router.post("/addcolor", async (req, res) => {
    console.log(req.body);
    try{
        const { penId, img, name, active } = req.body;
        if(!penId || !img || !name || !active){
            return res.status(400).json({message : 'Please fill all the required fields', success : false});
        }
        const chkDuplicate = await color.findOne({name : name})
        if(chkDuplicate){
            return res.status(400).json({ message : "Name already Exist", success : false})
        } 
        const colorDetail = new color({penId, img, name, active});
        await colorDetail.save();
        res.status(200).json({ message : "Color added successfully", success : true })
    }catch(err){
        console.log(err)
    }
})

router.post("/addsubpen", async (req, res) => {
    try{
        const { penId, img, name } = req.body;
        if( !penId || !img || !name){
            return res.status(400).json({ messagae : "Please insert all required field", success : false})                
        }
        const chkDuplicate = await subpen.findOne({ name : name}) 
        if(chkDuplicate){
            return res.status(400).json({ messagae : "Name already available", success : false })            
        }
        const subpenData = new subpen({penId,img,name})
        await subpenData.save();
        res.status(200).json({ message : "Subpen added successfully", success : true });
    }catch(err){
        console.log(err)
    }
})

router.post("/addpen", async (req,res) => {
    try{
        const { penName, penImage, active } =  req.body;
       
        if( !penName || !penImage || !active ){
            return res.status(400).json({ message : "All fields are required", success : false })
        }

        const chkDuplicate = await Bannerpen.findOne({ penName : penName })
        if(chkDuplicate){
            return res.status(400).json({ message : "Pen allready exist", success : false })
        }

        const penData = new Bannerpen({penName,penImage,active}); 
        await penData.save();
        res.status(200).json({ message : "Pen added successfully" , success : true });
       
    } catch(err){
        console.log(err)
    }    
})


router.post("/signin", async(req, res) => {
    console.log(req.body);     
    const { email, password } = req.body; 
    if( !email || !password ){
        return res.status(400).json({ message : "Please insert all required fields", success : false})
    }

    try {
        const userExist = await User.findOne({ email : email })       
        if(userExist){
            const isMatch = await bcrypt.compare(password, userExist.password);  
            
            if(!isMatch){
                res.status(400).json({message : "Password does not match" , success : false })
            } else {
                const token = await userExist.generateauthtoken();
                res.cookie("jwtoken", token , {
                    expires : new Date(Date.now(), 25892000000),
                    httponly : true
                })
                res.status(400).json({message : "You are login successfully" , success : true })
            }
        } else {
            return res.status(400).json({ "message" : "User does not exist please register", success : false })
        }    
    } catch(err){
        console.log(err)
    }
})



module.exports = router;
