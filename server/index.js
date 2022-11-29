var path = require('path');
const express = require('express')
const app=express()
const cors=require('cors')
const multer=require('multer')
const Cookies = require('js-cookie')
var cookieParser = require('cookie-parser');
app.use(cookieParser())
const fs = require('fs')


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

//Images location
// app.use("/images",express.static("public\\Virajbhagat"))

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

// const upload = multer({storage: storage}).single('Photo')
// const user = multer({}).single('username');

// app.post("/api/insertItemlist", upload,(req,res) => {
//     console.log(req.body)
//     // console.lof(req.file)
//     // console.log(req.file.path)

// })


// Saving Files
const upload = multer({dest: './public'}).array('Photo');
app.post('/api/insertItemlist',upload, function (req, res) {

    // const photo=req.files[0].originalname

    // console.log(JSON.stringify(this.state.photoList[0].Photo.name))

    const user=req.body.user
    const ItemList=JSON.parse(req.body.ItemList)
    // const photo=req.files[0].originalname
    console.log(ItemList.length)

    for(var i=0;i<ItemList.length;i++){
        console.log(ItemList[i].productName)
        const insertQuery= "insert into itemlist(user,productName,productType,weight,photoName,price) values (?,?,?,?,?,?)";
        db.query(insertQuery, [user,ItemList[i].productName,ItemList[i].productType,ItemList[i].Weight,`http://localhost:3001/images/${req.files[i].originalname}`,ItemList[i].Price], (err,result) => {
            console.log("test")
            // res.send(result)
            console.log(result)
        })
    }


    if(!fs.existsSync('public\\'+req.body.user)){
        fs.mkdir(path.join(__dirname, 'public\\'+req.body.user),(err)=>{
            if(err){
                console.log("Unable to create folder")
            }
        })
    }        

    for(var i=0;i<req.files.length;i++){
        let newFileName=req.files[i].originalname;
        console.log(`./public/${newFileName}`)
        fs.rename(
            `./public/${req.files[i].filename}`,
            `./public/${req.body.user}/${newFileName}`,
            function(req){
                console.log("File Saved")
            }
        )
        console.log("File: "+req.files[i].filename+"Added inside " + req.body.user)
    }

    res.sendStatus(200);


})




// app.post("/api/insertItemlist", )


app.post("/api/getItemList",(req,res)=>{
    
    //check user
    //get items for that user

    // var filepath = __dirname+'\\images\\delivery.png'
    // res.sendFile(__dirname+filepath);
    const user=req.body.user
    app.use("/images",express.static(`public\\${user}`))
    const insertQuery= "select * from itemlist where user=?";
    db.query(insertQuery, user,(err,result) => {
        console.log(user)
        res.send(result)
    })
    // res.json(
        // [
        //     {
        //         'p_name':'maggi 4pcs',
        //         'p_type':'grocery',
        //         'p_weight':'250g',
        //         'p_photo':"http://localhost:3001/images/delivery.png",
        //         'p_price':'50Rs'
        //     },
        //     {
        //         'p_name':'maggi 4pcs',
        //         'p_type':'grocery',
        //         'p_weight':'250g',
        //         'p_photo':"http://localhost:3001/images/call.png",
        //         'p_price':'50Rs'
        //     },
        //     {
        //         'p_name':'maggi 4pcs',
        //         'p_type':'grocery',
        //         'p_weight':'250g',
        //         'p_photo':"http://localhost:3001/images/refund.png",
        //         'p_price':'50Rs'
        //     },
        //     {
        //         'p_name':'maggi 4pcs',
        //         'p_type':'grocery',
        //         'p_weight':'250g',
        //         'p_photo':"http://localhost:3001/images/delivery.png",
        //         'p_price':'50Rs'
        //     }
        // ]
    // )
})


app.listen(3001,() => {
    console.log("Running on port 3001")
})