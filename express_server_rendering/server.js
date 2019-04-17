const express = require("express")
const srv =express();
const todoRoute = require("./routes/todos")
srv.use(express.json())
srv.use(express.urlencoded({extended:true}))
srv.set("view engine" , "hbs")
srv.set("views" , __dirname + "/views")
srv.use("/todos" , todoRoute)

srv.listen(3456)