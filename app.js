//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

var items = [];
items = ["Buy Food", "Cook Food", "Eat Food"]
let workItems = [];
const app = express();
app.set('view engine', 'ejs');

app.use(express.urlencoded({extended: true}))
app.use(express.static("public"));

app.get("/", function(req, res){

    let day = date.getWeek();
      
    


    res.render("list", {listTitle: day, newListItems: items});
});

app.post("/", function(req, res){
    
    var item = req.body.newItem;

    if (req.body.list === "Work List"){
        workItems.push(item);
        res.redirect("/work");    
    }else {
        items.push(item);
        res.redirect("/");
    }
    
    
})

app.post("/work", function(req,res){
    c
    let item = req.body.newItem;
    workItems.push(item);
    res.redirect("/work");
})


app.get("/work", function(req, res){
    res.render("list", {listTitle: "Work List", newListItems: workItems});
})

app.get("/about", function(req, res){
    res.render("about");
})


app.listen(3000, function(){
  console.log("Server started on port 3000.");
});
