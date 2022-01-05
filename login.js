const express = require('express');
const router = express.Router();
const {check, validationResult} = require('express-validator');
const bcrypt = require('bcryptjs');
const User = require('./usermodel');
const jwt = require('jsonwebtoken');

router.post('/',
[
    check('email', 'Please enter valid email id').isEmail(),
    check('password', 'Please enter a password with 6 or more characters').isLength({min:6, max:10})
], async (req, res) => {
    const {email, password} = req.body;
    try{
        const user = await User.findOne({email});
        if(!user){
            return res.status(400).json({msg:'Invalid Credentials'});
        }
    else{
        const isMatch = await bcrypt.compare(password, user.password)
        if(!isMatch){
            return res.status(400).json({msg:'Invalid Credentials'});
        }
        const payload={
            user:{
                id: user.id
            }
        }
        jwt.sign(payload, 'jwtsecret', (err, token) => {
            if(err) throw err
            res.json({token})
        });

        
    }
}catch(err){
    console.log(err.message);
}
} );


module.exports = router;