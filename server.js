const express = require("express")
const app = express()

const path = require("node:path")

// set view engine to ejs
app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")
app.get("/", (req,res)=>res.send("hello World"))
app.get("/index", (req,res)=> res.render("ejs"))
// new message route
app.get("/", (req,res)=> {res.send("new message form"); })


const port = 3333
app.listen(port);
console.log(`Server is listening on ${port}`)