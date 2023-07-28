require('dotenv').config();

const port = process.env.port || 2222;

const app = require('./app');

const mongoDB_URL = process.env.mongoDB_URL;
const SECRET = process.env.SECRET;
const CLIENT_URL = process.env.CLIENT_URL;


app.listen(port,()=>{
console.log(`Server is listening at http://localhost:${port}`);
});

