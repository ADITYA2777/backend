
// const mongoose = require('mongoose');
// const mongoDB_URL= process.env.mongoDB_URL || "mongodb://localhost:27017/my_database"

// const databaseconnect = () => {
//     mongoose
//     .connect(mongoDB_URL)
//     .then((conn)=>console.log(`connected to Db:${conn.connection.host}`))
//     .catch((err)=>console.log(err.message))
// }

// module.exports = databaseconnect;

const mongoose = require('mongoose');
const mongoDB_URL = process.env.mongoDB_URL || "mongodb://127.0.0.1:27017/my_database";


const databaseconnect = () => {
  mongoose.connect(mongoDB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Error connecting to MongoDB:', err.message));
};

module.exports = databaseconnect;
