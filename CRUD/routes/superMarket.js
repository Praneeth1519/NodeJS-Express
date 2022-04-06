var express = require('express');
var Product = require('../db/db');
var router = express.Router();

router.get('/', function(req, res){
    console.log('getting all product details');
    Product.find({}).exec(function(err, products){
        if(err) {
            res.send('error has occured');
        } else {
            console.log(products);
            res.json(products);
        }
    });
});

router.get('/:id', function(req, res){
    console.log('getting product details by id');
    Product.findOne({
        _id: req.params.id
    }).exec(function(err, product){
        if(err) {
            res.send('error has occured');
        } else {
            console.log(product);
            res.json(product);
        }
    });
});

router.post('/', function(req, res){
    var newProd = new Product();
    newProd.pname = req.body.pname;
    newProd.pid = req.body.pid;
    newProd.quantity = req.body.quantity;
    newProd.price = req.body.price;
    newProd.save(function(err, product){
        if(err) {
            res.send('error saving details');
        } else {
            console.log(product);
            res.send(product);
        }
    });
});

router.put('/:id', function(req, res){
    Product.findOneAndUpdate({
        _id: req.params.id
    },{
        $set: {
            pname: req.body.pname,
            pid: req.body.pid,
            quantity: req.body.quantity,
            price: req.body.price
        }
    },{
        upsert: true
    },function(err, newProd){
        if(err) {
            res.send('error updating product details');
        } else {
            console.log(newProd);
            res.send(newProd);
        }
    });
});

router.delete('/:id', function(req, res){
    Product.findByIdAndRemove({
       _id: req.params.id
    },function(err, product){
        if(err) {
            res.send('error deleting product details');
        } else {
            console.log(product);
            res.send(product);
        }
    });
});

module.exports = router ;