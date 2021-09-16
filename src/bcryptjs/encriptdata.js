
// Importamos paquete
const bcrypt = require("bcryptjs");


// Primero vamos a hashear la contraseña
const string = "danny123";
// Entre más rondas, mejor protección, pero más consumo de recursos. 10 está bien
const rondasDeSal = 10;

bcrypt.hash(string, rondasDeSal, (err, encriptacion) => {

	if (err) {

		console.log("Error hasheando:", err);

	} else {


        bcrypt.compare(string, encriptacion, (err, coinciden) => {

	        if (err) {

		        console.log("Error comprobando:", err);

	        } else {

		        console.log("\nVALIDACION EXITOSO - HASH: " + coinciden);

	        }
        });

		console.log("\nsecret:" + string + "\nhash:" + encriptacion);


	}
});

