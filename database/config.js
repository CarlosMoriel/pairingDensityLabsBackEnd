const { Client } = require("pg");

const conectDatabase = async () => {
	const connectionString =
		"postgres://uqnabxjg:H0WXSX9p4e4mQYfQ1WLZPusoDw_en3LA@chunee.db.elephantsql.com/uqnabxjg";

	const client = new Client({
		connectionString,
	});
	await client.connect();
	console.log(client !== null ? "Successful connection" : "Connection failure");
	return client;
};

module.exports = { conectDatabase };
