const express = require('express');
const app = express();

//body-parser 라이브러리 추가
//const { MongoClient } = require('mongodb');
const { MongoClient, ObjectId } = require('mongodb');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
    

//const db = require('node-mysql/lib/db');
app.set('view engine', 'ejs');

app.use(express.static("public"));

//const MongoClient = require('mongodb').MongoClient;
const url = 
'mongodb+srv://ulwnslo:1234@cluster0.odbemtd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
let mydb;



MongoClient.connect(url)
    .then(client => {
        console.log('Mongodb 연결 성공');
        mydb = client.db('myboard');
        // mydb.collection('post').find().toArray().then(result =>{
        //     console.log(result)
        // })
        app.listen(8080, function(){
            console.log('포트 8080으로 서버 대기중...');
        });
        
    })
    .catch(err => {
    console.log(err);
});

        

app.get('/enter', function(req,res){
    //res.sendFile(__dirname + '/enter.html');
    res.render('enter.ejs')
});


app.get('/login', function(req,res){
    //res.sendFile(__dirname + '/enter.html');
    res.render('login.ejs')
});

app.get('/homepage', function(req,res){
    //res.sendFile(__dirname + '/enter.html');
    res.render('homepage.ejs')
});

app.get('/myexercise', function(req,res){
    //res.sendFile(__dirname + '/enter.html');
    res.render('myexercise.ejs')
});

app.get('/afterhomepage', function(req,res){
    //res.sendFile(__dirname + '/enter.html');
    res.render('afterhomepage.ejs')
});

app.get('/mypage', function(req,res){
    //res.sendFile(__dirname + '/enter.html');
    res.render('mypage.ejs')
});

app.get('/join', function(req,res){
    //res.sendFile(__dirname + '/enter.html');
    res.render('join.ejs')
});

app.get('/playlist', function(req,res){
    //res.sendFile(__dirname + '/enter.html');
    res.render('playlist.ejs')
});

app.get('/mymate', function(req,res){
    //res.sendFile(__dirname + '/enter.html');
    res.render('mymate.ejs')
});

app.post('/save',function(req, res){
    console.log(req.body.title);
    console.log(req.body.content);
    console.log(req.body.someDate);
    //몽고DB에 데이터 저장하기
    mydb.collection('post').insertOne(
        {title:req.body.title, content:req.body.content, date: req.body.someDate},
        ).then(result => {
            console.log(result);
            console.log('데이터 추가 성공');
        });
    res.send('데이터 추가 성공');
});

app.get("/content/:id", function(req, res){
    console.log(req.params.id);
    req.params.id = new ObjectId(req.params.id);
    mydb
        .collection("post")
        .findOne({_id : req.params.id})
        .then((result) => {
            console.log(result);
            res.render("content.ejs", {data : result });
        });
});
