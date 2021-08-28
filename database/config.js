const { Client } = require("pg");

const conectDatabase = async () => {
	const connectionString =
	

	const client = new Client({
		connectionString,
	});
	await client.connect();
	console.log(client !== null ? "Successful connection" : "Connection failure");
	return client;
};

module.exports = { conectDatabase };
