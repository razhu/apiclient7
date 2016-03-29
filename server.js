var express 	= require('express');
var app         = express();
var Client      = require('node-rest-client').Client;

var client      = new Client();

// puerto
var port = process.env.PORT || 8081; 

var args1 = {
        headers: {"Content-Type": "application/json"},
	    data: { "usuario": "admin", "contrasena": "admin" }
};

// AUTENTICACION
client.post("http://localhost:8080/api/v1/tokens", args1, function (data, response) {
    console.log(data.token);
    token = data.token;
    var args = {
	headers: {"Content-Type": "application/json", 
        "x-access-token": token }
        };  
    obtenerdatos(args);
    //console.log(response);
});

// GET OBTENER DATOS        
function obtenerdatos(args) {
    client.get("http://localhost:8080/api/v1/usuarios", args, function (data, response) {

            guardardatos(data);
});
}
//POST
 function guardardatos(data) {
            for(var i = 0; i<data.length; i++ ){
                console.log(data[i].usuario)
            }

  	//console.log(data);
  	//console.log(response);
 }


// iniciar el servidor ================================================
app.listen(port);
console.log('La magia esta en http://localhost:' + port);

