var express = require('express');
var AuthorSchema= require('../db/Author_db');
var router= express.Router();
var bcrypt= require('bcrypt');
const jwt = require("jsonwebtoken");
require('dotenv').config();
var mongoose = require('mongoose');
const { getMaxListeners } = require('../db/Post_db');
var ObjectId= mongoose.Types.ObjectId;

router.post("/register", async (req, res) => {
    try {
      const {fname, lname, email, password, qualification, domain, awards, gender } = req.body;
      if (!(email && password)) {
        res.status(400).send("All input is required");
      }
      const oldUser = await AuthorSchema.findOne({ email });
  
      if (oldUser) {
        return res.status(409).send("Author Already Exist. Please Login");
      }

      encryptedPassword = await bcrypt.hash(password, 10);
      const author = await AuthorSchema.create({
        fname: fname,
        lname: lname,
        email: email.toLowerCase(),
        password: encryptedPassword,
        qualification: qualification,
        domain: domain,
        awards: awards, 
        gender: gender

      });
      res.status(201).json(author);
      
    } catch (err) {
      console.log(err);
    }
  });


  router.post("/login", async (req, res) => {
    try {
      const { email, password } = req.body;

      if (!(email && password)) {
        res.status(400).send("Enter email and password");
      }
      const author = await AuthorSchema.findOne({ email });
      AuthorSchema.aggregate([{
        $match:{
            email: author.email
    }},
          {$lookup:{
              from:"postschemas",
              localField:"_id",
             foreignField:"author_id",
                   as:"posts"
          }
        }
      ],function(error,data){
        if(error){
          res.send(error)
        }
         //res.json(data);
    });
      if (author && (await bcrypt.compare(password, author.password))) {
      
        const token = jwt.sign(
          { author_id: author._id, email },
          process.env.TOKEN_KEY,
          {
            expiresIn: "2h",
          }
        );
  
      author.token = token;
      res.header('authtoken',token).send(token);
      }
      res.status(400).send("Invalid Credentials");
    } catch (err) {
      console.log(err);
    }

  }
  );


router.get('/',function(req,res){
    AuthorSchema.find({}).exec(function(err, authors){
        if(err){
            res.send('Error occured');
        }
        else{
            res.json(authors);
        }
    });
});

router.get('/:id',function(req,res){
    AuthorSchema.findOne({_id: req.params.id}).exec(function(err,authors){
        if(err){
            res.send('Error Occured');
        }
        else{
            res.json(authors);
        }
    });
});

router.put('/:id', function(req,res){
    AuthorSchema.findOneAndUpdate({_id: req.params.id},
        {$set: {
        fname: req.body.fname,
        lname: req.body.lname,
        email: req.body.email,
        password: req.body.password,
        qualification: req.body.qualification,
        domain: req.body.domain,
        awards: req.body.awards,
        gender: req.body.gender
        }
        },{
            uppsert: true
        }, function(err, newAuthor){
            if(err){
                res.send('Error updating Author details');
            }
            else{
                res.send(newAuthor);
            }
        });
});

router.delete('/:id', function(req,res){
    AuthorSchema.findByIdAndRemove({
        _id:req.params.id},
        function(err, author){
            if(err){
                res.send('Error deleting Author details');
            }
            else{
                res.send(author);
            }
    });
});

module.exports= router;