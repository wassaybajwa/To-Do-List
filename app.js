//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
var items = ["Buy Food", "Cook Food", "Eat Food"]
const app = express();
app.set('view engine', 'ejs');

app.use(express.urlencoded({extended: true}))

app.get("/", function(req, res){

    var today = new Date();
    
    var options = {
        weekday: "Long",
        day: "Numeric",
        month: "Long" 
    };

    var day = today.toDateString("en-US", options);
      
    


    res.render("list", {kindOfDay: day, newListItems: items});
});

app.post("/", function(req, res){
    var item = req.body.newItem;

    items.push(item);
    res.redirect("/");
})

app.listen(3000, function(){
  console.log("Server started on port 3000.");
});
