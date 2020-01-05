const express=require('express');
const cookieParser=require('cookie-parser');
const app=express();
const port=8000;
//for using layouts
const expressLayouts=require('express-ejs-layouts');
//starting mongoose and connecting to database in configs and db has connection
const db=require('./config/mongoose');

const session=require('express-session');
//passport for authentication
const passport=require('passport');
//
const passportLocal=require('./config/passport-local-strategy');
//
const MongoStore=require('connect-mongo')(session);
const sassMiddleware=require('node-sass-middleware');
//middleware
app.use(sassMiddleware({
     src:'./assets/scss',
     dest:'./assets/css',
     debug:true,
     outputStyle:'expanded',
     prefix:'/css'
}));
app.use(express.urlencoded());
//middleware
app.use(cookieParser());
//to use static files
app.use(express.static('./assets'));
//middleware
app.use(expressLayouts);
//extract style n scipts from subpages in layouts
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);

//setting up view engine
app.set('view engine','ejs');
app.set('views','./views');
//setting up cookie
app.use(session({
      name:'codeial',
      //change the secret before deployment
      secret:'blahsomething',
      saveUninitialized:false,
      resave:false,
      cookie:{
          maxAge:(1000*60*100)
      },
      store:new MongoStore({
          mongooseConnection:db,
          autoRemove:'disabled'
      },
      function(err){
          console.log(err||"connect mongodb ok");
      })
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setAuthenticatedUser);
//to send incoming request to routes
app.use('/',require('./routes'));
//listening on port 8000
app.listen(port,(err)=>{
    if(err){
        console.log('error occurred',err);
        return ;
    }
    console.log('express is up on port',port);
})