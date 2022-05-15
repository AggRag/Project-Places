const express = require('express');
const { check, validationResult } = require('express-validator');

const router =  express.Router();

const User = require("../models/user");

const { v4: uuidv4 } = require('uuid');


router.get('/', async (req, res, next) => {
    let users;
    try{
        users = await User.find({}, '-password');
    } catch(err){
        const error = new Error('Fetching users failed');
        error.code = 500;
        return next(error);
    }

    res.json({users: users.map(user => user.toObject({getters:true}))});
})

router.post('/signup', [
    check('name').not().isEmpty(),
    check('email').normalizeEmail().isEmail(),
    check('password').isLength({min:8})

    ], async (req,res,next)=> {
        
        const errors = validationResult(req);
        if (!errors.isEmpty()){
            const error = new Error('Invalid Input');
            error.code = 422;
            return next(error);
        }
        const {name, email, password} = req.body;

        let existingUser;
        try{
            existingUser = await User.findOne({email: email});
        } catch(err){
            const error = new Error("Signup Failed");
            error.code = 500;
            return next(error);         
        }

        if (existingUser){
            const error = new Error("User Already Exists");
            error.code = 422;
            return next(error); 
        }

        const createdUser = new User({
            name,
            email,
            image: "https://dog.ceo/api/breeds/image/random",
            password,
            places: "p1"
        })

        try{
            await createdUser.save();
        }catch(err){
            const error = new Error("Signup Failed");
            error.code = 500;
            console.log(err);
            return next(error);         
        }

        res.status(201).json({user: createdUser.toObject({getters:true})});
})

router.post('/login', async (req,res,next)=> {
    const {email, password} = req.body;

    let existingUser;
    try{
        existingUser = await User.findOne({email: email});
    } catch(err){
        const error = new Error("Login Failed");
        error.code = 500;
        return next(error);         
    }

    if (!existingUser || existingUser.password!==password){
        const error = new Error("Invalid Credentials");
        error.code = 401;
        return next(error);
    }

    res.json({message: 'Logged In!', user: existingUser.toObject({getters: true})})

})

module.exports = router;