const express = require('express');
const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');

const placeRoutes = require("./routes/places-routes");

const usersRoutes = require("./routes/users-routes");
const app = express();


app.use(express.json());

app.use('/uploads/images', express.static(path.join('uploads', 'images')));

app.use((req, res, next) =>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With,Content-Type, Accept,Authorization');
    res.setHeader('Access-Control-Allow-Methods','GET, POST, PATCH, DELETE');
    next();
})

app.use('/api/places', placeRoutes);

app.use('/api/users', usersRoutes);

app.use((req, res, next) => {
    const error = new Error("Could not find a page");
    error.code = 404;
    throw error;

})

// Error Handler
app.use((error, req, res, next) => {
    if (res.headerSent){
        return next(error)
    }
    res.status(error.code || 500);
    res.json({message: error.message || "An unknown error occured!"});
})

app.use((error, req, res, next) => {
    if (req.file) {
      fs.unlink(req.file.path, err => {
        console.log(err);
      });
    }
    if (res.headerSent) {
      return next(error);
    }
    res.status(error.code || 500);
    res.json({ message: error.message || 'An unknown error occurred!' });
  });

mongoose.connect('')
 .then( () => {
    app.listen(process.env.PORT || 5000);
 })
 .catch( err => {
     console.log(err);
 })



 