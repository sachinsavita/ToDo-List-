//jshint esversion:6
const express = require("express");

const app = express();

const bodyParser = require("body-parser");

let items = [];
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static("public"));

app.get("/", function(req, res){

    let today = new Date();
    let currDay = today.getDay();
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let day = "";
    if(currDay=== 6 || currDay=== 0)
    {
        // res.write("<h1>Oh Yeah Its the weekend.</h1>");
        // res.send();
        // res.sendFile(__dirname + "/weekendfile.html");
        // console.log("Weekend");
        day = "weekend";
        // res.render("list",{kindOfDay: day});
    }
    else{
        // res.write("<p>It's not the weekend.</p>");
        // res.write("<h1>Boo! I have to work.</h1>");
        // res.send();
        // res.sendFile(__dirname + "/weekdayfile.html");
        day = "Weekday";
        // res.render("list",{kindOfDay: day});
    }

    // res.render("list",{kindOfDay: day});
    res.render("list",{kindOfDay: weekday[currDay], newListItems: items});

});
// Catching the added newItem
app.post("/", function(req, res){
    var item = req.body.newItem;
    items.push(item); //Items array defines above in line number 8
    res.redirect("/");   //To pass in the above mentioned res.render
});


app.listen(3000, function(){
    console.log("I love you 3000");
});