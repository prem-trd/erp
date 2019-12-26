require('./model/db');

const express = require('express');

const emp = require('./router/classiirouter');
var bodyParser = require('body-parser');
var cors = require('cors')
var app = express()
 
var corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200  
}

app.use(express.json())  
app.use(express.urlencoded({ extended: true }))  


app.use('/test', (req,res) =>{
    res.status(200).send('this is test');
})

app.use('/employee', (req,res) =>{
    res.status(200).send('this is employees');
     
})

app.use('/emp', emp);

app.listen(3000, ()=>{
    console.log('Express server started at port : 3000');
});