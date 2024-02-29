const express = require("express")
const app = express()
require('dotenv').config()
const ConnectDB = require("./Config/ConnectDB")
const contact_router = require("./Routes/person_routes")
app.use(express.json())
app.use("/person", contact_router)

ConnectDB()



app.listen(process.env.port, (err)=> {
    err? console.error(err): console.log("server is running on port 5000")
})