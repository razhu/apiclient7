var express 	= require('express');
var app         = express();
var Client      = require('node-rest-client').Client;

var client      = new Client();

// puerto
var port = process.env.PORT || 8081; 

var args = {
	headers: {"Content-Type": "application/json", 
        "x-access-token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c3VhcmlvIjoiYWRtaW4iLCJpYXQiOjE0NTkyMDA3MDUsImV4cCI6MTQ1OTI4NzEwNX0.Zebmm0e_pS6a_idk6i8B-VUw5LqyP9c4is_ZcWkpb1E" },
    data: { "usuario": "agetic", "contrasena":"agetic" }
};

// GET
client.get("http://localhost:8080/api/v1/usuarios", args, function (data, response) {
    console.log(data);
    //console.log(response);
});

//POST
client.post("http://localhost:8080/api/v1/usuarios", args, function (data, response) {
	console.log(data);
	//console.log(response);
});

// iniciar el servidor ================================================
app.listen(port);
console.log('La magia esta en http://localhost:' + port);

