const User=require('../models/user');
module.exports.profile=(req,res)=>{
    return res.render('users',{
        title:'users profile'
    });
}
module.exports.signUp=function(req,res){
    return res.render('user_sign_up',{
        title:'sign up'
    })
};
module.exports.signIn=function(req,res){
    return res.render('user_sign_in',{
        title:'sign in'
    })
};

//get sign up data
module.exports.create=function(req,res){
    //to create
    if(req.body.password!=req.body.confirm_password){
        return res.redirect('back');
    }
    User.findOne({email:req.body.email},(err,user)=>{
        if(err){
            console.log('error in finding in db');
            return ;
        }
        if(!user){
            User.create(req.body,function(err,user){
                if(err){
                    console.log('error in creating in db');
                    return ;
                    
                }
                return res.redirect('/users/sign-in');
            })
        } 
        else{
            return res.redirect('back');
        }
    })
}
//get sign in data
// module.exports.createSession=(req,res)=>{
//     //to do
// }
