const express = require("express");
const cors = require("cors");

class Server {
	constructor() {
		this.app = express();
		this.port = process.env.PORT;
		//Paths
		this.usuariosPath = "/pairing";
		// Middlewares
		this.middlewares();
		// initializing the routes
		this.routes();
	}

	middlewares() {
		// CORS
		this.app.use(cors());
		// Reading and parse of the body
		this.app.use(express.json());
		// Public directory
		this.app.use(express.static("public"));
	}

	routes() {
		this.app.use(this.usuariosPath, require("../routes/crud")); //Use the user router
	}

	listen() {
		this.app.listen(this.port, () => {
			console.log("Server run at port: ", this.port);
		});
	}
}
module.exports = Server;
