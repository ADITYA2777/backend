
const mongoose = require('mongoose')
const {schema}= mongoose;

const UserSchema = new schema({
name:{
    type:String,

},
email:{
    type:String,
},
password:{
    type:String,
},
forgotPasswordToken:{
    type:String,
},
forPasswordExpiryDate:{
    type:Date,
}
},{
    timesStamps:true
});

const userModel=mongoose.model('user',mongoose)
module.exports=userModel