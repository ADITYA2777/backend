
const express = require('express')
const app  = express();

const authRoute = require('./routes/authRoutes.js');
const databaseconnect =require('./config/configdb.js');
const cookieParser = require('cookie-parser')
const core = require('cors')

databaseconnect();

app.use(express.json());
app.use(cookieParser());
app.use(core({
    origin:[process.env.CLIENT_URL],
    credentials:true
}));


app.use('/api/auth/',authRoute);



app.use('/',(req,res)=>{
res.status(200).json({data:'jwTauth server-updating'})
})

  

module.exports = app;


