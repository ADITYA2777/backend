const userModel = require("../model/userSchema");
const emailvalidator = require("email-validator")
const bcrypt = require('bcrypt')

const signup = async(req,res,next)=>{
const {name,email,password,confirmpassword} = req.body;
console.log({name,email,password,confirmpassword});

     if (!name || !email || ! password || !confirmpassword) {
        return res.status(400).json({
            success:false,
             message:'every  feild are required'
           });
     }
const validEmail = emailvalidator.validate(email)
     if (!validEmail) {
        return res.status(400).json({
            success:false,
             message:'please provided valid email id'
           });
     }

     if (password !== confirmpassword) {
        return res.status(400).json({
            success:false,
             message:'please chacked password does not match  with confirm password'
           });
     }

    try {
        const userInfo = userModel(req.body);
        const result  = await userInfo.save();

      return res.status(200).json({
       success:true,
        data:result
      });
    } catch (e) {
        if (e.code === 11000) {
            return res.status(400).json({
                success:false,
                 message:'Account alredy exits with provided email id'
               }); 
        }
        return res.status(400).json({
            success:false,
             message:e.message
           }); 
    }
}

    const signin =async (req,res)=>{
        const {email,password} = req.body
      
        if (!email || !password) {
          return res.status(400).json({
              success:false,
               message:'every felid is mandatory'
             });
        }
   try { 
        const user = await userModel
        .findOne({
          email
        })
          .select('+password')
      
          if (!user || !(await bcrypt.compare(password,user.password))){
              return res.status(400).json({
                  success:false,
                   message:'invalid credentials'
                 });
          }
          const token = user.jwtToken();
       user.password = undefined ;

       const cookieOption = {
        maxAge:24 * 60 * 60 * 1000,
        httpOnly:true
       };

       res.cookie("token",token,cookieOption)
       res.status(200).json({
        success: true,
        data:user
       })
      
       } catch (e) {
     res.status(400).json({
        success:false,
        message:e.message
          })
      }
  }
 
const getUser = async (req,res,next)=>{
  const userId = req.user.id;

  try {
    const user = await userModel.findById(userId);
    return res.status(200).json({
      success: true,
      data:user
    })
  } catch (e) {
    res.status(400).json({
      success:false,
      message:e.message
   })
  }
}

const logout = (req,res)=>{
  try {
      const cookieOption ={
        expries:new Date(),
        httpOnly: true
      };
      res.cookie("token",null,cookieOption);
      res.status(200).json({
        success:true,
        message:"logged out"
      })
  } catch (e) {
    res.status(200).json({
      success:false,
      message:"logged out"
    })
  }
}

module.exports = {
    signup,
    signin,
    getUser,
    logout
}