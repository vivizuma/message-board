// imports
const express = require("express")
const path = require("node:path")
const expressLayouts = require("express-ejs-layouts")
const db = require("./db")
// server
const app = express()
const port = 3333
// static files
app.use(express.static("public"))
app.use("/css", express.static(__dirname + "public/css"))


// set templating engine and paths
app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"))
app.use(expressLayouts)
app.set("layout", "./pages/layout")

// navigation
app.get( "/", (req,res)=> {
    res.render("pages/index", {messages: db.messages})
})
app.get( "/new", (req,res)=> {
    res.render("pages/new")
})
app.get("/messages", (req,res)=> {
    res.render("pages/messages")       
})

// 
app.listen(port, ()=> console.log(`Server is listening on PORT:${port}`));
