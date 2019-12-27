const express=require('express');
const app=express();
const port=3000;

app.use('/',require('./routes'));
app.set('view engine','ejs');
app.set('views','./views');
app.listen(port,(err)=>{
    if(err){
        console.log('error occurred',err);
        return ;
    }
    console.log('express is up on port',port);
})