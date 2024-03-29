const number = require('@hapi/joi/lib/types/number')
const string = require('@hapi/joi/lib/types/string')
const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    id:{type:String,unique:true,required:true},
    name:{type:String,min:2,max:20,required:true},
    middlename:{type:String,min:2,max:20,required:true},
    lastname:{type:String,min:2,max:20,required:true},
    percentile:{
        type:number,
        max:100,
        min:0
    },
    imageUrl:{
        type:String,
        default:'http://10.14.30.288/images/defaultImage.jpg'
    },
    gender:{
        type:String,
        max:10,
        default:"male"
    },
    schoolId:{
        type:String,
        max:15,
        required:true
    },
    schoolname:{
        type:String,
        max:200,
    },

    result:{
        tigrigna:{
            type:number,
            min:0,
            max:100,
            default:0
        },
        amharic:{
            type:number,
            min:0,
            max:100,
            default:0
        },
        english:{
            type:number,
            min:0,
            max:100,
            default:0
        },
        maths:{
            type:number,
            min:0,
            max:100,
            default:0
        },
        physics:{
            type:number,
            min:0,
            max:100,
            default:0
        },
        chemistry:{
            type:number,
            min:0,
            max:100,
            default:0
        },
        biology:{
            type:number,
            min:0,
            max:100,
            default:0
        },
        geography:{
            type:number,
            min:0,
            max:100,
            default:0
        },
        civic:{
            type:number,
            min:0,
            max:100,
            default:0
        }
    },
    total:{type:Number,default:0},
    average:{type:Number,default:0}
})

module.exports = mongoose.model('user',userSchema)
//[{subject:String,score:{type:Number,default:0,max:100,min:0,_id:false}}]