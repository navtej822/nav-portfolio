require("dotenv").config;
const express = require("express");
const cors = require("cors");
const path = require("path");

const contactRoute = require('./route/contactRoute')

const app = express();

//creating the middleware
app.use(express.json());
app.use(cors());

app.use("/",contactRoute);


if(process.env.NODE_ENV === "production"){
    app.use(express.static("client/build"));
    app.get("/",(req,res)=>
        res.sendFile(path.resolve(__dirname,"client","build", "index.html"))
    );
}

<<<<<<< HEAD
const port = process.env.PORT || 6000;
app.listen(port, console.log(`server listening to port 6000 only`));
=======
const port = process.env.PORT || 5000;
app.listen(port, console.log(`server listening to port 5000 only`));
>>>>>>> 086b9d766f4814c3d5d30d532bd3326f9cba1119
