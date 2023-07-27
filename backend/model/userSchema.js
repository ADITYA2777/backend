
const mongoose = require('mongoose')
const {Schema}= mongoose;

const UserSchema = new Schema({
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

const userModel = mongoose.model('user',UserSchema)
module.exports = userModel