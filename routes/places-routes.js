const express = require('express');
const path = require('path');
const fs = require('fs');

const {check, validationResult} = require('express-validator');

const router = express.Router();

const Place = require('../models/places')

const { v4: uuidv4 } = require('uuid');

const fileUpload = require('../middleware/file-upload');


router.get('/:pid', async (req, res, next) => {
    console.log("Get Request");
    const placeId = req.params.pid;
    let place;

    try{
        place = await Place.findById(placeId);
    }catch(err){
        const error = new Error("Could not find a place");
        error.code = 500;
        return next(error);
    }
    

    if (!place){
        const error = new Error("Could not find a place");
        error.code = 404;
        return next(error);
    }
    else{
        res.json({place: place.toObject({getters:true})});
    }
});

router.get('/user/:uid', async (req, res, next) => { 
    const userId = req.params.uid;
    
    let place;

    try{
        place = await Place.find({creator:userId});
    } catch(err){
        const error = new Error("Could not find a user");
        error.code = 404;
        return next(error);
    }
    if (!place){
        const error = new Error("Could not find a place");
        error.code = 404;
        return next(error);
    }
    else{
        res.json({place: place.map(place => place.toObject({getters: true}))});
    }
});
 
router.post('/', fileUpload.single('image'), [
    check('title').not().isEmpty(),
    check('description').not().isEmpty(),
    check('address').not().isEmpty()
], async (req,res,next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()){
        const error = new Error('Invalid Input');
        error.code = 422;
        return next(error);
    }
    const {title, description, address, creator} = req.body;
    const createdPlace = new Place({
        title,
        description,
        location: {lat: 75, lng:67},
        address,
        image: "https://picsum.photos/200/300",
        creator
    });
    console.log(createdPlace)
    try{
        await createdPlace.save();
    
    }catch(err){
        const error = new Error('Failed creating place');
        error.code = 500;
        return next(error);
        
    }

    res.status(201).json({createdPlace});
})

router.patch('/:pid', [
    check('title').not().isEmpty(),
    check('description').isLength({min:5})
    ], async (req,res,next)=>{

        const errors = validationResult(req);
        if (!errors.isEmpty()){
            const error = new Error('Invalid Input');
            error.code = 422;
             return next(error);
        }
        const {title, description} = req.body;
        const placeId = req.params.pid;


        let place;

        try{
            place = await Place.findById(placeId);
        } catch(err){
            const error = new Error('Could not update the place');
            error.code = 500;
            return next(error);
        }

        place.title = title;
        place.description = description;

        try{
            await place.save();
        } catch(err){
            const error = new Error('Could not update the place');
            error.code = 500;
            return next(error);
        }

        res.status(200).json({place: place.toObject({getters:true})});
})


router.delete('/:pid', async (req,res,next) => {
    const placeId = req.params.pid;

    let place;

    try{
        place = await Place.findById(placeId);
    } catch(err){
        const error = new Error('Could not find a place');
        error.code = 500;
        return next(error);
    }

    try{
        await place.remove();
    } catch(err){
        const error = new Error('Could not delete a place');
        error.code = 500;
        return next(error);
    }

    res.status(200).json({message: 'Deleted Place!'});
})

 
module.exports = router; 
 
 
// npm install --save uuid




// For this exercise we will be building a simple application where we will store a shopping list. You should use an array to store your items in the shopping list.

// Our application should have the following routes:

//     GET /items - this should respond with a list of shopping items.
//     POST /items - this route should accept form data and add it to the shopping list.
//     GET /items/:id - this route should display a single item's name and price
//     PATCH /items/:id - this route should accept edits to existing items.
//     DELETE /items/:id - this route should allow you to delete a specific item from the array.

