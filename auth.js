const express = require('express');
const router = express.Router();
const {check, validationResult} = require('express-validator');
const bcrypt = require('bcryptjs');
const User = require('./usermodel');
const jwt = require('jsonwebtoken');
const checkObjectId = require('./checkObjectID_middleware');

 router.post('/',
[
    check('email', 'Please enter valid email id').isEmail(),
    check('password', 'Please enter a password with 6 or more characters').isLength({min:6, max:10})
], async (req, res) => {
    const {firstname, lastname, email, address, phone, password} = req.body;
    const newUser = new User({firstname, lastname, email, address, phone, password});
    try{
        const user = await User.findOne({email});
        if(user){
            return res.status(400).json({msg:'User already exists'});
        }
    else{
        const salt = await bcrypt.genSalt(10);
        newUser.password = await  bcrypt.hash(password, salt);
        
        await newUser.save();
        return res.status(200).json({msg:'User Registered'});
    }
}catch(err){
    console.log(err.message);
}
} );


// Get user profile
router.get('/:id', checkObjectId('id'), async(req, res) => {
    const user = await User.findById(req.params.id);
    if(!user){
        return res.status(400).json({msg:"User does not exist"})
    }
    else{
        res.status(200).json({user:user});
    }
    
})

module.exports = router;