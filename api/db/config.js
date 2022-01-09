require("dotenv").config();
const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://admin-smartdev:"+process.env.MONGO_PASS+"@cluster0.uitpv.mongodb.net/horseDB",{useNewUrlParser: true, useUnifiedTopology: true})
//    mongoose.connect(
//     `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0.adv0t.mongodb.net/${process.env.MONGO_DATABASE}?retryWrites=true&w=majority`,
//     {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     }
//   );
const connection = mongoose.connection;
connection.on("error",(error) => console.error(error))
connection.once("open",() => console.log("Connected to DB"));

module.exports = connection;