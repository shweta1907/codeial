//requiring mongoose
const mongoose= require('mongoose');
//connecting to database
mongoose.connect('mongodb://localhost/codeial_development');
//acquiring the connection
const db= mongoose.connection;
//error in connecting to db
 db.on('error',console.error.bind(console,'error connected to db'));
//if successfully connected 
 db.once('open',function(){
     console.log('connected to db');
 });
 module.exports=db;