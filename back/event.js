const express = require('express')
const app = express()
const MongoClient = require('mongodb').MongoClient;
const jwt = require("jsonwebtoken");
const router = express.Router()
const path = require('path');



// GET ALL Event

router.get('/getAllEvent', function (req,res) {
    if(!req.headers.authorization)
    {
        res.status(200).json({success:false, message: "Error Token was not provided."});
    }

    const token = req.headers.authorization.split(' ')[1]; 
    //Authorization: 'Bearer TOKEN'
    if(!token)
    {
        res.status(200).json({success:false, message: "Error Token was not provided."});
    }
    //Decoding the token
    let decodedToken
    try{
        decodedToken = jwt.verify(token,"1345678GHJK4567GHJ" );

        MongoClient.connect('mongodb://localhost:27017/velolik', (err, client) => {
        if (err) throw err


        const db = client.db('velolik')
        var result =  db.collection('event').find().toArray((err, result) => {
          if (err) throw err

          console.log(result)
          res.send(result);
        
      })
      })
    } catch (err) {
      console.log(err);
      const error = "Error Token Error";
      res.send(error);
  }
})

// Add Event

router.post('/addEvent' , function (req, res){

    if(!req.headers.authorization)
    {
        res.status(200).json({success:false, message: "Error Token was not provided."});
    }

    const token = req.headers.authorization.split(' ')[1]; 
    //Authorization: 'Bearer TOKEN'
    if(!token)
    {
        res.status(200).json({success:false, message: "Error Token was not provided."});
    }
    //Decoding the token
    let decodedToken
    try{
        decodedToken = jwt.verify(token,"1345678GHJK4567GHJ" );

        MongoClient.connect('mongodb://localhost:27017/velolik', async (err, client) => {
            if (err) throw err
          
          
            const db = client.db('velolik')
            var result =  await db.collection('event').insertOne({ name: req.body.name  , description : req.body.description  , maxParticipant   : req.body.maxParticipant   , date   : req.body.date  });
              if (err) throw err
          
              sendEmailFn(req,res);
              console.log(result)
              res.send(result);
            
          })
        } catch (err) {
          console.log(err);
          const error = "Error Token Error";
          res.send(error);
        }


})


// update event

router.put('/updateevent' , function (req ,res){

    if(!req.headers.authorization)
    {
        res.status(200).json({success:false, message: "Error Token was not provided."});
    }

    const token = req.headers.authorization.split(' ')[1]; 
    //Authorization: 'Bearer TOKEN'
    if(!token)
    {
        res.status(200).json({success:false, message: "Error Token was not provided."});
    }
    //Decoding the token
    let decodedToken
    try{
        decodedToken = jwt.verify(token,"1345678GHJK4567GHJ" );

    MongoClient.connect('mongodb://localhost:27017/velolik', async (err, client) => {
        if (err) throw err
    
        const db = client.db('valolik')
    
        var result = await db.collection('event').updateMany({"_id" : req.body._id},{ $set : { "name": req.body.name  , "description" : req.body.description  , "maxParticipant"   : req.body.maxParticipant   , "date"   : req.body.date   }})
    
        console.log(result)
        res.send(result);
          
    })
    } catch (err) {
    console.log(err);
    const error = "Error Token Error";
    res.send(error);
     }
})
