
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
const mongoDB_URL= process.env.mongoDB_URL || "mongodb://localhost:27017/my_database"

const databaseconnect = () => {
    mongoose
    .connect(mongoDB_URL)
    .then((conn) => console.log(`Connected to Db: ${conn.connection.host}`))
    .catch((err) => console.log("Error connecting to MongoDB:", err.message));
}

module.exports = databaseconnect;
