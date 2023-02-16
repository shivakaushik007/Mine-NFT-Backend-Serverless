import sls from "serverless-http"
import app from "./api/app.js";

export const run = sls(app);
