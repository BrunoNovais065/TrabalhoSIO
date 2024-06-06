var GraphController = {};

const sql = require("msnodesqlv8");

/*const con = sql.createConnection({
    host: "192.168.1.106",
    user: "Bruno",
    password: "bruno200602",
    database: "Bookings"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    con.query("SELECT * FROM dbo.Guest", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
    });
});*/

GraphController.getGraphsdiagram5 = function (req, res) {

	const connectionString = `server=.;Database=${req.body.company}_Warehouse;Trusted_Connection=Yes;Driver={ODBC Driver 17 for SQL Server};`;

	let query = `SELECT * FROM facts AS f WHERE f.s_key LIKE '%${req.body.country}% '`
	if (req.body.city != null) { query = query.concat(`AND f.s_key LIKE '%${req.body.city}%' `); }
	if (req.body.trimester != null) {
		query = query.concat(`AND f.s_key LIKE '2023;${req.body.trimester}`);
		if (req.body.month != null) { query = query.concat(";" + req.body.month); }
		query = query.concat("|%'");
	}

	sql.query(connectionString, query, (err, result) => {
		if (err) {
			console.log(err);
			return;
		}
		const Data = result.map((row) => ({
			name: row.s_key,
			value: row.net_total,
		}));

		res.render("newgraph6", { graphData: Data });
	});
	
	res.render("index", { title: "Express", year: "2023" });
};

GraphController.getGraphsdiagram1 = function (req, res) {
	console.log(req.body);
	if (req.body.company == "KrakenTech") {
		console.log("KrakenTech");

		const connectionString =
			"server=.;Database=KrakenTech_Warehouse;Trusted_Connection=Yes;Driver={ODBC Driver 17 for SQL Server};";

		const queryy = `
        SELECT *
FROM dbo.facts
WHERE s_key LIKE '%SUPPLIER'
ORDER BY CAST(SUBSTRING(s_key, 5, CHARINDEX(';', s_key) - 5) AS INT);
`;

		sql.query(connectionString, queryy, (err, result) => {
			if (err) {
				console.log(err);
				return;
			}
			const Data = result.map((row) => ({
				name: row.s_key,
				value: row.net_total,
			}));

			for (i = 0; i < Data.length; i++) {
				let match = Data[i].name.match(/\d+/);
				//the name has the constructions of TECH1;SUPPLIER short it by number
				Data[i].name = Data[i].name.split(";")[0];
			}

			res.render("graph1", { graphData: Data });
		});
	} else {
		console.log("eletrotech");

		const connectionString =
			"server=.;Database=ElectroTech_Warehouse;Trusted_Connection=Yes;Driver={ODBC Driver 17 for SQL Server};";

		const queryy = `
        SELECT *
FROM dbo.facts
WHERE s_key LIKE '%SUPPLIER'
ORDER BY CAST(SUBSTRING(s_key, 5, CHARINDEX(';', s_key) - 5) AS INT);
`;

		sql.query(connectionString, queryy, (err, result) => {
			if (err) {
				console.log(err);
				return;
			}
			const Data = result.map((row) => ({
				name: row.s_key,
				value: row.net_total,
			}));

			for (i = 0; i < Data.length; i++) {
				let match = Data[i].name.match(/\d+/);
				//the name has the constructions of TECH1;SUPPLIER short it by number
				Data[i].name = Data[i].name.split(";")[0];
			}

			res.render("graph1", { graphData: Data });
		});
	}
};

GraphController.getGraphsdiagram2 = function (req, res) {
	const connectionString =
		`server=.;Database=${req.body.company}_Warehouse;Trusted_Connection=Yes;Driver={ODBC Driver 17 for SQL Server};`;

	const query = `SELECT * FROM dbo.facts WHERE s_key LIKE '%Fornecedor%' `;
	if (req.body.trimester != null) {
		query = query.concat(`AND f.s_key LIKE '2023;${req.body.trimester}`);
		if (req.body.month != null) { query = query.concat(";" + req.body.month); }
		query = query.concat("|%'");
	}

	sql.query(connectionString, query, (err, result) => {
		if (err) {
			console.log(err);
			return;
		}
		const Data = result.map((row) => ({
			name: row.s_key,
			value: row.net_total,
		}));

		//the data is divided by ; thake out the first element
		for (i = 0; i < Data.length; i++) {
			if (req.body.trimester != null) {
				Data[i].name = Data[i].name.split("|")[1].split(";")[1];
			} else {
				Data[i].name = Data[i].name.split(";")[1];
			}
		}

		res.render("graph2", { graphData: Data });
	});
};

GraphController.getGraphsdiagram3 = function (req, res) {
	const connectionString =
		`server=.;Database=${req.body.company};Trusted_Connection=Yes;Driver={ODBC Driver 17 for SQL Server};`;

	const queryy = `SELECT * FROM facts AS f WHERE f.s_key LIKE '%CLIENT%'`;
	sql.query(connectionString, queryy, (err, result) => {
		if (err) {
			console.log(err);
			return;
		}
		const Data = result.map((row) => ({
			name: row.s_key,
			value: row.net_total,
		}));

		//the data is divided by ; thake out the first element
		for (i = 0; i < Data.length; i++) {
			if (req.body.trimester != null) {
				Data[i].name = Data[i].name.split("|")[1].split(";")[1];
			} else {
				Data[i].name = Data[i].name.split(";")[1];
			}
		}

		res.render("graph3", { graphData: Data });
	});
};

GraphController.getGraphsdiagram4 = function (req, res) {
	if (req.body.company == "KrakenTech") {
		console.log("KrakenTech");

		const connectionString =
			"server=.;Database=KrakenTech_Warehouse;Trusted_Connection=Yes;Driver={ODBC Driver 17 for SQL Server};";

		const queryy = `SELECT * FROM dbo.facts WHERE s_key LIKE '%SUPPLIER'
				ORDER BY CAST(SUBSTRING(s_key, 5, CHARINDEX(';', s_key) - 5) AS INT);`;

		sql.query(connectionString, queryy, (err, result) => {
			if (err) {
				console.log(err);
				return;
			}
			const Data = result.map((row) => ({
				name: row.s_key,
				value: row.net_total,
			}));

			for (i = 0; i < Data.length; i++) {
				let match = Data[i].name.match(/\d+/);
				//the name has the constructions of TECH1;SUPPLIER short it by number
				Data[i].name = Data[i].name.split(";")[0];
			}

			res.render("graph4", { graphData: Data });
		});
	} else {
		console.log("eletrotech");

		const connectionString =
			"server=.;Database=ElectroTech_Warehouse;Trusted_Connection=Yes;Driver={ODBC Driver 17 for SQL Server};";

		const queryy = `
        SELECT *
FROM dbo.facts
WHERE s_key LIKE '%SUPPLIER'
ORDER BY CAST(SUBSTRING(s_key, 5, CHARINDEX(';', s_key) - 5) AS INT);
`;

		sql.query(connectionString, queryy, (err, result) => {
			if (err) {
				console.log(err);
				return;
			}
			const Data = result.map((row) => ({
				name: row.s_key,
				value: row.net_total,
			}));

			for (i = 0; i < Data.length; i++) {
				let match = Data[i].name.match(/\d+/);
				//the name has the constructions of TECH1;SUPPLIER short it by number
				Data[i].name = Data[i].name.split(";")[0];
			}

			res.render("graph4", { graphData: Data });
		});
	}
};

GraphController.getGraphsdiagram5 = function (req, res) {
	if (req.body.company == "KrakenTech") {
		console.log("KrakenTech");

		const connectionString =
			"server=.;Database=KrakenTech_Warehouse;Trusted_Connection=Yes;Driver={ODBC Driver 17 for SQL Server};";

		const queryy = `
        SELECT *
FROM dbo.facts
`;

		sql.query(connectionString, queryy, (err, result) => {
			if (err) {
				console.log(err);
				return;
			}
			const Data = [];

			Data.push({
				name: result[32].s_key,
				value: result[32].net_total,
			});
			Data.push({
				name: result[33].s_key,
				value: result[33].net_total,
			});
			Data.push({
				name: result[34].s_key,
				value: result[34].net_total,
			});
			Data.push({
				name: result[35].s_key,
				value: result[35].net_total,
			});
			Data.push({
				name: result[36].s_key,
				value: result[36].net_total,
			});
			Data.push({
				name: result[37].s_key,
				value: result[37].net_total,
			});

			res.render("newgraph5", { graphData: Data });
		});
	} else {
		console.log("eletrotech");

		const connectionString =
			"server=.;Database=ElectroTech_Warehouse;Trusted_Connection=Yes;Driver={ODBC Driver 17 for SQL Server};";

		const queryy = `SELECT * FROM dbo.facts`;

		sql.query(connectionString, queryy, (err, result) => {
			if (err) {
				console.log(err);
				return;
			}
			const Data = [];

			Data.push({
				name: result[38].s_key,
				value: result[38].net_total,
			});
			Data.push({
				name: result[39].s_key,
				value: result[39].net_total,
			});
			Data.push({
				name: result[40].s_key,
				value: result[40].net_total,
			});
			Data.push({
				name: result[41].s_key,
				value: result[41].net_total,
			});
			Data.push({
				name: result[42].s_key,
				value: result[42].net_total,
			});
			Data.push({
				name: result[43].s_key,
				value: result[43].net_total,
			});
			Data.push({
				name: result[44].s_key,
				value: result[44].net_total,
			});
			Data.push({
				name: result[45].s_key,
				value: result[45].net_total,
			});
			Data.push({
				name: result[46].s_key,
				value: result[46].net_total,
			});
			Data.push({
				name: result[47].s_key,
				value: result[47].net_total,
			});
			res.render("graph5Electro", { graphData: Data });
		});
	}
};

GraphController.getGraphsdiagram6 = function (req, res) {
	if (req.body.company == "KrakenTech") {
		console.log("KrakenTech");

		const connectionString =
			"server=.;Database=KrakenTech_Warehouse;Trusted_Connection=Yes;Driver={ODBC Driver 17 for SQL Server};";

		const queryy = `SELECT top 17 * FROM dbo.facts`;

		sql.query(connectionString, queryy, (err, result) => {
			if (err) {
				console.log(err);
				return;
			}
			const Data = result.map((row) => ({
				name: row.s_key,
				value: row.net_total,
			}));

			res.render("newgraph6", { graphData: Data });
		});
	} else {
		console.log("eletrotech");
		const connectionString =
			"server=.;Database=ElectroTech_Warehouse;Trusted_Connection=Yes;Driver={ODBC Driver 17 for SQL Server};";

		const queryy = `SELECT top 17 * FROM dbo.facts`;

		sql.query(connectionString, queryy, (err, result) => {
			if (err) {
				console.log(err);
				return;
			}
			const Data = result.map((row) => ({
				name: row.s_key,
				value: row.net_total,
			}));

			res.render("newgraph6", { graphData: Data });
		});
	}
};

GraphController.getGraphsdiagram1Time = function(req, res) {

	const connectionString = `server=.;Database=${req.body.company}_Warehouse;Trusted_Connection=Yes;Driver={ODBC Driver 17 for SQL Server};`;

	let query = "SELECT * FROM facts AS f WHERE f.s_key LIKE '%SUPPLIER' AND f.s_key LIKE '2023;" + req.body.trimester;
	if (req.body.month != null) { query = query.concat(req.body.month); }
	query = query.concat("|%");

	sql.query(connectionString, query, (err, result) => {
		if (err) {
			console.log(err);
			return;
		}
		const Data = result.map((row) => ({
			name: row.s_key,
			value: row.net_total,
		}));

		res.render("newgraph6", { graphData: Data });
	});
}

GraphController.getGraphsdiagram5Time = function(req, res) {

	const connectionString = `server=.;Database=${req.body.company}_Warehouse;Trusted_Connection=Yes;Driver={ODBC Driver 17 for SQL Server};`;

	let query = "SELECT * FROM facts AS f WHERE f.s_key LIKE '%SUPPLIER' AND f.s_key LIKE '2023;" + req.body.trimester;
	if (req.body.month != null) { query = query.concat(";" + req.body.month); }
	query = query.concat("|%'");

	sql.query(connectionString, query, (err, result) => {
		if (err) {
			console.log(err);
			return;
		}
		const Data = result.map((row) => ({
			name: row.s_key,
			value: row.net_total,
		}));

		res.render("newgraph6", { graphData: Data });
	});
}

module.exports = GraphController;