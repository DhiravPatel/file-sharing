const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000;  

app.use(express.static('public'));
app.use(express.json());

const {connectDB} = require('./config/db.js');
connectDB();


//Template engine
app.set('views',path.join(__dirname, '/views'));
app.set('view engine','ejs');


//Routes
app.use('/api/files',require('./routes/files.js'));
app.use('/files', require('./routes/show'));
app.use('/files/download',require('./routes/download.js'));

app.listen(PORT,()=>{
    console.log(`Listening on port ${PORT}`);
})