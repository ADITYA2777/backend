require('dotenv').config();

const port = process.env.port || 9009;

const app = require('./app');

app.listen(port,()=>{
console.log(`Server is listening at http://localhost:${port}`);
});

