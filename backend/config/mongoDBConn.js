const mongoose = require("mongoose");
const CONNECTION_STR = process.env.DB_CONNECT_STR;

// Initial Connection

const connectDB = async () => {
    try {
        await mongoose.connect(CONNECTION_STR);
    } catch(error) {
        handleError(error);
    }
}

module.exports = connectDB;

//DB connection

// mongoose
//  .connect(connectstr)
// .then( () => {
//      console.log("Hurray!!! Connected to DB!!!");
//     app.listen(PORT, () => {
//      console.log(`---Project Dashboard Listening to ${PORT}---`);
//         });
// })
// .catch( (error) => {
//     console.log(`Not connected to database => Error Found - ${error}`);
// })
