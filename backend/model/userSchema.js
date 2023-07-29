
const mongoose = require('mongoose')
const {Schema}= mongoose;
const jWT =require('jsonwebtoken')

const UserSchema = new Schema({
name:{
    type:String,
required:[true,'user name required'],
minLength:[5,'name must be at least 5 char'],
maxLength:[50,'name must be less than 50 char'],
trim:true
},
email:{
    type:String,
    required:[true,'email  name required'],
    unique:true,
    lowercase:true,
    unique:[true,'alredy register']

},
password:{
    type:String,
    select:false
},
forgotPasswordToken:{
    type:String
},
forPasswordExpiryDate:{
    type:Date
}
},{
    timesStamps:true
});

UserSchema.pre('save',async function(next) {
    if (!this.isModified('password')) {
        return next();
    }
    this.password= await bcrypt(this.password,10)
    return next();
})
UserSchema.methods = {
  jwtToken(){
    return jWT.sign(
        { id:this._id,email:this.email },
        process.env.SECRET,
        {expiresIn:'24h'}
    )
  }
}

const userModel = mongoose.model('user',UserSchema)
module.exports = userModel