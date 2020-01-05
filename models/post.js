const mongoose= require('mongoose');



const postSchema=new mongoose.Schema({
    content:{
        type:String,
        required:true
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
        }
    },
       {
           timeStamps:true    
    });

    const Post=mongoose.Model('Post',postSchema)
    module.export=Post;