const route = require("express").Router();
let todos =[
    {task:"this is task one"},
    {task:"this is task two"}
]
route.get("/" , function(req,res){
    res.render("todos",{todos})

})
route.post("/" , function(req,res){
    todos.push({
        task:req.body.newtodo
    })
    res.redirect("todos")

})
module.exports= route