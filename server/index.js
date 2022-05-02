var path = require('path');
const express = require('express')
const app=express()
const cors=require('cors')
const multer=require('multer')
// const fs = require('fs')

const mysql= require('mysql')
const bodyParser = require('body-parser')

const db=mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'shopers-stop'
})

app.use(cors());
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}));

//Images loction
app.use("/images",express.static("img"))

// app.get("/",(req,res) => {
//     res.send("Hello World")
// })

app.get("/api/get", (req,res) => {
        const insertQuery= "select * from usersData";
        db.query(insertQuery, (err,result) => {
            res.send(result)
        })
})

app.post("/api/insert", (req,res) => {
    const username=req.body.username

    const email=req.body.email
    const password=req.body.password
    if(email !== '' && password !== ''){
        const insertQuery= "insert into usersData(username,email,password) values (?,?,?)";
        db.query(insertQuery, [username,email,password], (err,result) => {
            res.send(result)
            // console.log(result)
        })
    }
})

// Saving image
const storage=multer.diskStorage({
    destination : (req,file,cb) =>{
        cb(null, 'public')
    },
    filename : (req,file,cb) =>{
        cb(null, Date.now() + '-' + file.originalname)
    }
})

// const upload = multer({storage: storage}).single('Photo')
// const user = multer({}).single('username');

// app.post("/api/insertItemlist", upload,(req,res) => {
//     console.log(req.body)
//     // console.lof(req.file)
//     // console.log(req.file.path)

// })

var storage1 = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public');
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + file.originalname);
    }
  });
  
var upload1 = multer({ storage: storage1 });

app.use(express.static(path.join(__dirname, 'public')));
  
app.post('/api/insertItemlist', upload1.array('Photo'), function (req, res) {
    // Text data from the form
    console.log(req.body);
    // const items = JSON.stringify(req.body.itemList);
    console.log(req.body.ItemList);
    console.log(req.body.Photo);
    // Details about the uploaded file
    console.log(req.files, 'files');
    // var imagePath = req.file.path;
    // res.redirect(imagePath);
    // return res.status(201).send();


});
  

// app.post("/api/insertItemlist" , (req,res,file) => {
//     // console.log('test')
//     // const ItemList=req.body.ItemList
//     // console.log("Test")
//     // console.log(req.body.photoData)

//     // user(req,res,(err) => {
//     //     if(err){
//     //         // return res.status(500).json(err)
//     //         console.log(err)
//     //     }
//     //     return console.log()
//     // })

//     console.log(req.username)
//     console.log(file.username)
//     // console.log(req.body.ItemList)
//     // console.log(req.body.photoData)

//     upload(req,res,(err) => {
//         if(err){
//             // return res.status(500).json(err)
//             console.log(err)
//         }
//         return res.status(201).send()
//     })


//     // if(email !== '' && password !== ''){
//     //     const insertQuery= "insert into usersData(username,email,password) values (?,?,?)";
//     //     db.query(insertQuery, [username,email,password], (err,result) => {
//     //         res.send(result)
//     //         // console.log(result)
//     //     })
//     // }
// })



app.get("/api/item",(req,res)=>{
    //check user
    //get items for that user

    // var filepath = __dirname+'\\images\\delivery.png'
    // res.sendFile(__dirname+filepath);

    res.json(
        [
            {
                'p_name':'maggi 4pcs',
                'p_type':'grocery',
                'p_weight':'250g',
                'p_photo':"http://localhost:3001/images/delivery.png",
                'p_price':'50Rs'
            },
            {
                'p_name':'maggi 4pcs',
                'p_type':'grocery',
                'p_weight':'250g',
                'p_photo':"http://localhost:3001/images/call.png",
                'p_price':'50Rs'
            },
            {
                'p_name':'maggi 4pcs',
                'p_type':'grocery',
                'p_weight':'250g',
                'p_photo':"http://localhost:3001/images/refund.png",
                'p_price':'50Rs'
            },
            {
                'p_name':'maggi 4pcs',
                'p_type':'grocery',
                'p_weight':'250g',
                'p_photo':"http://localhost:3001/images/delivery.png",
                'p_price':'50Rs'
            }
        ]
    )
})

// app.delete("/api/delete/:username", (req,res) => {
//     const username=req.params.username
//     console.log(username)
//     const sqlDelete = "DELETE FROM users WHERE username = ?";
//     db.query(sqlDelete, username, (err,result) => {
//         if(err) console.log(err)
//     })
// })


app.listen(3001,() => {
    console.log("Running on port 3001")
})