
//Imports
const express = require("express");
const app = express();
const dotenv = require("dotenv");
const bulkConsumer = require("./communication/bulkConsumer");

//middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

dotenv.config("./.env");
const adminRouter = require("./router/adminRouter/index")
const logger = require("morgan");
app.use(logger("common"))


//const
const PORT = process.env.PORT || 7006




app.listen(PORT, () => {
    console.log("Profile started at Port : " + PORT)
})