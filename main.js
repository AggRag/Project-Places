// const express = require('express');

// const MongoClient = require('mongodb').MongoClient;

// const url = 'mongodb+srv://raghav:eBcoWEwcErcWxc2U@cluster0.8sxsw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

// const app = express();

// app.use(express.json());

// app.post('/products', async (req, res, next) => {
//     const newProduct = {
//         name: req.body.name,
//         price: req.body.price
//     }
//     const client = new MongoClient(url);
//     try{
//         await client.connect();
//         const db = client.db();
//         const result = await db.collection('products').insertOne(newProduct);
//         client.close();
//     }catch(e){
//         return res.json({message: 'Could not store data'});
//     }
   
//     res.json(newProduct);


// });

// app.get('/products', async (req, res, next) => {
//     const client = new MongoClient(url); 
//     let products;
//     try{
//         await client.connect();
//         const db = client.db();
//         products = await db.collection('products').find().toArray();
//         client.close();
//     }catch(e){
//         return res.json({message: 'Could not retrieve data'});
//     }
    
//     res.json(products);
// });


// app.listen(3000);


const mongoose = require('mongoose');

const express = require('express');

const app = express();

app.use(express.json());

const productSchema = new mongoose.Schema({
    name: {type: String, required: true},
    price: {type: Number, required:true}
});

const products = mongoose.model('Product', productSchema);

mongoose.connect('mongodb+srv://raghav:eBcoWEwcErcWxc2U@cluster0.8sxsw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');

app.post('/products', async (req, res, next) => {

    const createdProduct = new products({
        name: req.body.name,
        price: req.body.price
    })
    
    const result = await createdProduct.save();

    res.json(result);
});

app.get('/products', async (req, res, next) => {
    const result = await products.find().exec();
    res.json(result);
});

app.listen(3000);