

const jWT = require('jsonwebtoken');

const jwtAuth = (req,res,next)=>{

    const token = (req.cookies && req.cookies.token)|| null;
    if (!token) {
        return res.status(400).json({
            success: false,
            meesage:'Not Authorzied'
          })
    }
  next()
}

   try {
       const payload = jWT.verify(token,process.env.SECRET);
       req.user = {id:payload.id,email:payload.email}
   } catch (e) {
    return res.status(400).json({
        success: false,
        meesage:e.meesage
      })
   }

module.exports = jwtAuth