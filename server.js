import sls from "serverless-http"
import app from "./api/db/app.js"

export const run = sls(app);
