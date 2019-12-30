const express=require('express');
const cookieParser=require('cookie-parser');
const app=express();
const port=8000;
const expressLayouts=require('express-ejs-layouts');
const db=require('./config/mongoose');

app.use(express.urlencoded());
app.use(cookieParser());


app.use(express.static('./assets'));
app.use(expressLayouts);
//extract style n scipts from subpages in layouts
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);

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