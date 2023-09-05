const express = require("express");
const app = express();

app.get("/", function(req,res){
  res.send("<h1>hey</h1>");
});

app.get("/contact",function(req,res){
  res.send("contact me on : khanalnayan123@gmail.com");
});

app.get("/about",function(req,res){
  res.send("My name is Nayan Khanal and i am a web developer.");
});

app.get("/details",function(req,res){
  res.send("What else you wanna know?");
});

app.listen(3000,function(){
  console.log("server starts at the port 3000.");
});
