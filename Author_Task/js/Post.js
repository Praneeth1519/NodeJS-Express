var express = require('express');
var PostSchema= require('../db/Post_db');
var router= express.Router();
var datetime = new Date();

router.get('/',function(req,res){
    PostSchema.find({}).exec(function(err, posts){
        if(err){
            res.send('Error occured');
        }
        else{
            res.json(posts);
        }
    });
});

router.get('/public', async(req,res) => {
    try{

        PostSchema.aggregate([{
             $match:
                     {visibility:"public"}    
        },
        ],function(error,data){
            if(error)
            {
                res.send(error)
            }
             res.json(data);
        });
 }
 catch(err){
     res.send('Error ' + err)
 }
})


router.get('/:id',function(req,res){
    PostSchema.findOne({_id: req.params.id}).exec(function(err,posts){
        if(err){
            res.send('Error Occured');
        }
        else{
            res.json(posts);
        }
    });
});

router.post('/', function(req,res){
    var newPost= new PostSchema();
    newPost.title= req.body.title;
    newPost.description= req.body.description;
    newPost.created_date= datetime.toDateString(),
    newPost.updated_date= datetime.toDateString(),
    newPost.visibility= req.body.visibility;
    newPost.author_id= req.body.author_id;
    newPost.save(function(err, posts){
        if(err){
            res.send('error saving details');
        }
        else{
            res.send(posts);
        }
    });
});


router.put('/:id', function(req,res){
    PostSchema.findOneAndUpdate({_id: req.params.id},
        {$set: {
            title: req.body.title,
            description: req.body.description,
            created_date: req.body.created_date,
            updated_date: datetime.toDateString(),
            author_id: req.body.author_id,
            visibility: req.body.visibility
        }
        },{
            uppsert: true
        }, function(err, newPost){
            if(err){
                res.send('Error updating Post details');
            }
            else{
                res.send(newPost);
            }
        });
});

router.delete('/:id', function(req,res){
    PostSchema.findByIdAndRemove({
        _id:req.params.id},
        function(err, Post){
            if(err){
                res.send('Error deleting Post details');
            }
            else{
                res.send(Post);
            }
    });
});

module.exports= router;