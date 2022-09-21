const express = require('express')
const app = express()
const MongoClient = require('mongodb').MongoClient;
const jwt = require("jsonwebtoken");
const multer  = require('multer')
const upload = multer({ dest: 'filesUp/images/' })
const cors = require("cors");

app.use(cors ({
  origin:"*"
}));


app.use(express.json({extended : false}));
app.use('/', require('./reservation'));


app.get('/', function (req, res)  {
    res.send('Hello World!');
})


app.listen(3001, function() {
    console.log('listenig on 3001')
})


/************************ LOGIN ********************************/
app.post("/login", async (req, res, next) => {
  let { login,password } = req.body;
 
  let existingUser;
  try {

    MongoClient.connect('mongodb://localhost:27017/velolik', (err, client) => {
      if (err) throw errjwt

      const db = client.db('velolik')

      db.collection('user').find({'login':login}).toArray((err, result) => {
          if (err) throw err
          existingUser = result[0];        
          if (!existingUser || existingUser.password != password) {
            const error = "Wrong details  : password or email are wrong !";
            res.send(error);
          }
          let token;
          if(existingUser)
          {
              try {
                  //Creating jwt token
                  token = jwt.sign(
                    { login: existingUser.login },
                    "1345678GHJK4567GHJ",
                    { expiresIn: "1h" }
                  );
  
                  res.send({login: existingUser.login,token: token , id:existingUser._id});
  
                } catch (err) {
                  console.log(err);
                  const error = "Wrong details please check at once";
                  res.send(error);
                }
          }
          
      })
      })

  } catch {
    const error = new Error("Error! Something went wrong.");
    return next(error);
  }

});

app.get('/accessResource', (req, res)=>{  
  const token = req.headers.authorization.split(' ')[1]; 
  //Authorization: 'Bearer TOKEN'
  if(!token)
  {
      res.status(200).json({success:false, message: "Error Token was not provided."});
  }
  //Decoding the token
  const decodedToken = jwt.verify(token,"1345678GHJK4567GHJ" );
  res.status(200).json({success:true, data:{login:decodedToken.login}});   
})
 
/******************* SIGN UP  **********************************/
app.post('/addUser'  , upload.single('avatar'), function (req, res){

  console.log(req.file);
  var imageObj = req.file ;

 

  MongoClient.connect('mongodb://localhost:27017/velolik', async (err, client) => {
    if (err) throw err
  
  
    const db = client.db('velolik')
    var result =  await db.collection('user').insertOne({firstName: req.body.firstName , lastName : req.body.lastName , age : req.body.age , phone : req.body.phone , address : req.body.address , login : req.body.login , email : req.body.email, password : req.body.password , gender: req.body.gender });
      if (err) throw err
  
      console.log(result)
      res.send(result);

})
})

/********************** GET ALL BIKES  *************************/
app.get('/getAllBikes' , function (req, res){


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
        var result =  db.collection('bikes').find().toArray((err, result) => {
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

/********************** ADD BIKES  *************************/
app.post('/AddBikes' , function (req, res){

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
    var result =  await db.collection('bikes').insertOne({name: req.body.name , category : req.body.category , description : req.body.description , price : req.body.price , image : req.body.image});
      if (err) throw err
  
      console.log(result)
      res.send(result);
    
  })
} catch (err) {
  console.log(err);
  const error = "Error Token Error";
  res.send(error);
}

})

/******************* uploadfile ***************************/



app.post('/uploadFiles', upload.single('avatar'), function (req, res, next) {
  // req.file is the `avatar` file
  // req.body will hold the text fields, if there were any
  console.log(req.file);
  console.log(req.body);
  res.send("file upload done !");
})

/****************** getuserby ID  *********************** */
app.get('/getUserById/:id' , function (req, res){

    

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
        const ObjectId = require('mongodb').ObjectId; 

        
        MongoClient.connect('mongodb://localhost:27017/velolik', (err, client) => {
        if (err) throw err
        
        
        const db = client.db('velolik')
        var result =  db.collection('user').find({_id : ObjectId(req.body._id)});
       
          if (err) throw err

          console.log(result)
          res.send(result);
        
      })

    } catch (err) {
      console.log(err);
      const error = "Error Token Error";
      res.send(error);
  }
})