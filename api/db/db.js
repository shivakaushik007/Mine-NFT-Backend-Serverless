// const {MongoClient, ServerApiVersion} = require("mongodb");

import mongoose from "mongoose";

const MONGODB_URI_DEV = "mongodb+srv://shiva-kaushik:shiva-kaushik@cluster0.czabgwp.mongodb.net/minenft-dev?retryWrites=true&w=majority";

const MONGODB_URI_PROD = "mongodb+srv://shiva-kaushik:shiva-kaushik@cluster0.czabgwp.mongodb.net/minenft-prod?retryWrites=true&w=majority";

// console.log("connect to mongo", process.env.CURRENTSTAGE);

const connectDb = async () => {

  // let MONGODB_URI = MONGODB_URI_DEV;
  // if (process.env.CURRENTSTAGE === "prod") {
  //   MONGODB_URI = MONGODB_URI_PROD;
  // }

  mongoose.connect(
    MONGODB_URI_DEV,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      socketTimeoutMS: 45000,
    },
    function (err) {
      if (err) throw err;
    }
  );

  mongoose.connection.on("error", (e) => {
    console.log("mongo connect error!");
  });
  mongoose.connection.on("connected", () => {
    console.log("connected to mongo");
  });
}

export default connectDb;


