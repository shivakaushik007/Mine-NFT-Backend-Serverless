import express from "express"
import cors from "cors"
import bodyParser from "body-parser"
import routes from "./routes/index.js" 
import connectDb from "./db/db.js";

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

connectDb();
console.log("dbdb");
app.use("/", routes);

export default app
// module.exports = app