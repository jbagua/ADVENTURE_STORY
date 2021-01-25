let express = require ('express');//Declaring variables 
let path = require ('path');
let app = express ();

app.use(express.static(path.join(_dirname,"/HTML-Advanture Story/Images")));
//app.use ("CSS/",express.static(_dirname + "/HTML-Advanture Story/CSS"))
//app.use ("Images/",express.static(_dirname + "/HTML-Advanture Story/Images")

app.get("/HTML/adventure",function (request,response){//Funtion to create route link to the adventure page
    response.sendFile(path.join(_dirname,"adventure.html"))
})
app.get("/HTML/software_developer",function (request,response){//Funtion to create route link to the carieer (software developer) page
    response.sendFile(path.join(_dirname,"software_developer.html"))
})
app.get("/HTML/agri_business",function (request,response){//Funtion to create route link to the agri business page
    response.sendFile(path.join(_dirname,"agri_business.html"))
})
app.get("/HTML/lower_seconday",function (request,response){//Funtion to create route link to the adventure page
    response.sendFile(path.join(_dirname,"lower_secondary.html"))
})
app.get("/HTML/upper_secondary",function (request,response){//Funtion to create route link 
    response.sendFile(path.join(_dirname,"upper_secondary.html"))
})
app.get("/HTML/cocoa",function (request,response){//Funtion to create route link 
    response.sendFile(path.join(_dirname,"cocoa.html"))
})
app.get("/HTML/copra",function (request,response){//Funtion to create route link 
    response.sendFile(path.join(_dirname,"copra.html"))
})
app.listen(8080)