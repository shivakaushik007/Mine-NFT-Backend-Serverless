import express from "express"
import bodyParser from "body-parser"
import routes from "../routes/index.js" 
import connectDb from "./db.js";

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

connectDb();
console.log("dbdb");
app.use("/", routes);

export default app