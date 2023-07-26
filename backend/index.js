require('dotenv').config();
const port = process.env.port ||9009;

const app = require('./app');

app.listen(port,()=>{
console.log(`srver is listening at http//localhost:${port}`);
});

