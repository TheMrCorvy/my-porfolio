import express from "express"
import morgan from "morgan"
import bodyParser from "body-parser"

import projectRoutes from "./routes/projects.routes.js"

const app = express()

// create application/json parser
const jsonParser = bodyParser.json()
// https://stackoverflow.com/questions/9177049/express-js-req-body-undefined

app.use(morgan("dev"))

app.use("/projects", jsonParser, projectRoutes)

export default app
