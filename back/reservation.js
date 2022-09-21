const express = require('express')
const app = express()
const MongoClient = require('mongodb').MongoClient;
const jwt = require("jsonwebtoken");
const router = express.Router()
const path = require('path');
const nodemailer = require('nodemailer');


// GET ALL RESERVATION

router.get('/getAllReservation', function (req,res) {
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
        var result =  db.collection('reservation').find().toArray((err, result) => {
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

// ADD RESERVATION 

router.post('/addReservation' , function (req, res){

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
            var result =  await db.collection('reservation').insertOne({rentalDateFrom : req.body.rentalDateFrom  , rentalDateTo  : req.body.rentalDateTo  , pickUpTime  : req.body.pickUpTime  , returnTime  : req.body.returnTime  , accessories  : req.body.accessories , qunatity : req.body.qunatity});
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

// UPDATE RESERVATION 

router.put('/updateReservation' , function (req ,res){

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
    
        var result = await db.collection('reservation').updateMany({"_id" : req.body._id},{ $set : { "rentalDateFrom":req.body.rentalDateFrom,"rentalDateTo":req.body.rentalDateTo, "pickUpTime":req.body.pickUpTime }})
    
        console.log(result)
        res.send(result);
          
    })
    } catch (err) {
    console.log(err);
    const error = "Error Token Error";
    res.send(error);
     }
})



async function sendEmailFn(req,res)
{

    // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "salma.mouelhi@esprit.tn", // generated ethereal user
      pass: "181JFT2158", // generated ethereal password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Fred Foo 👻" <foo@example.com>', // sender address
    to: req.body.email, // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<h1 style='color:red'>Hello From DELL 13 AOUT</h1>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...

  
    res.send("email Send !");
}

app.post('/sendEmail', async function (req, res) {
    
    sendEmailFn(req,res);

})







// Export all routers
module.exports = router