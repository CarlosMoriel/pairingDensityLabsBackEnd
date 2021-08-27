const { response, request } = require("express");
const { Client } = require("pg");
const fs = require("fs");

const connectionString =
	"postgres://uqnabxjg:H0WXSX9p4e4mQYfQ1WLZPusoDw_en3LA@chunee.db.elephantsql.com/uqnabxjg";

const client = new Client({
	connectionString,
});
client.connect();
console.log(client !== null ? "Successful connection" : "Connection failure");

const usuariosGet = async (req = request, res = response) => {
	const { id } = req.query;
	const query = `SELECT * FROM example WHERE ID = ${id}`;
	client
		.query(query)
		.then((result) => {
			const resp = result.rows[0];
			res.json({
				state: true,
				msg: "get API - controller",
				resp,
			});
		})
		.catch((e) => {
			res.json({
				state: false,
				msg: "Resource not found",
			});
		});
};

const usuariosPost = (req, res = response) => {
	const { name, age, id } = req.body;

	const query = `INSERT INTO example (ID , NAME , AGE) VALUES (${id} , '${name}' , ${age})`;

	client
		.query(query)
		.then((result) => {
			const resp = result.rows[0];
			res.json({
				state: true,
				msg: "get API - controller",
				resp,
			});
		})
		.catch((e) => {
			res.json({
				state: false,
				msg: "Post Error",
				e,
			});
		});
};

const usuariosPut = (req, res = response) => {
	const { id } = req.params;
	const { name, age } = req.body;

	const query = `UPDATE example SET NAME = '${name}', AGE = ${age} WHERE ID = ${id}`;

	client
		.query(query)
		.then((result) => {
			const resp = result.rows[0];
			res.json({
				state: true,
				msg: "get API - controller",
				resp,
			});
		})
		.catch((e) => {
			res.json({
				state: false,
				msg: "Post Error",
				e,
			});
		});
};

const usuariosPatch = (req, res = response) => {
	res.json({
		msg: "patch API - controller",
	});
};

const usuariosDelete = (req, res = response) => {
	const { id } = req.body;

	const query = `DELETE FROM example WHERE ID = ${id}`;

	client
		.query(query)
		.then((result) => {
			const resp = result.rows[0];
			res.json({
				state: true,
				msg: "get API - controller",
				resp,
			});
		})
		.catch((e) => {
			res.json({
				state: false,
				msg: "Post Error",
				e,
			});
		});
};

module.exports = {
	usuariosGet,
	usuariosPost,
	usuariosPut,
	usuariosPatch,
	usuariosDelete,
};
