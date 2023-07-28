
const express = require('express')
const app  = express();

const authRoute = require('./routes/authRoutes.js');
const databaseconnect =require('./config/configdb.js');

databaseconnect();

app.use(express.json())
app.use('/api/auth/',authRoute);



app.use('/',(req,res)=>{
res.status(200).json({data:'jwTauth server-updating'})
})

  

module.exports = app;


