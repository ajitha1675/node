const express = require("express");
const connection = require("../src/config/connection");
const router = require("../src/routes/register.route");
const accountRoute = require("./routes/account.route");
const productrouter = require("../src/routes/product.route");
require("dotenv").config();
const app = express();
app.use(express.json());
connection();


app.use(router);
app.use(accountRoute);
app.use(productrouter);
app.use("/", (req,res) =>{
    res.send("Server is Alive")
});

const port = 8000;

app.listen(port, () => {
    console.log("server is running on:", port); 
});
