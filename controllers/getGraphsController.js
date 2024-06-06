var GraphController = {};

const sql = require("msnodesqlv8");

GraphController.getGraphsdiagram1 = function (req, res) {
	const connectionString = `server=.;Database=${req.body.company}_Warehouse;Trusted_Connection=Yes;Driver={ODBC Driver 17 for SQL Server}`;

	
	let query = '';
	if (req.body.product_id == "null" && req.body.trim == "null") {
		query = `SELECT f.s_key, f.net_total FROM facts AS f WHERE f.s_key LIKE 'TECH%' AND f.s_key LIKE '%SUPPLIER'`;
	} else {
		query = "SELECT * FROM facts AS f WHERE ";

		let t_query = '';
		if (req.body.trim != "null") {
			t_query = `f.s_key LIKE '2023;${req.body.trim}`;
			if (req.body.month != "null") { t_query = t_query.concat(";" + req.body.month); }
			query = query.concat(t_query + "|%' ");
		}

		let p_query = ''; if (req.body.trim != "null") { p_query = "AND "; }
		if (req.body.product_id != "null") {
			query = query + p_query.concat(`f.s_key LIKE '%|${req.body.product_id};%' `);
		} else { query = query.concat('AND f.s_key LIKE \'%|TECH%\''); }
		query = query.concat(`AND f.s_key LIKE '%SUPPLIER'`);
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

		for (i = 0; i < Data.length; i++) {
			let match = Data[i].name.match(/\d+/);
			Data[i].name = Data[i].name.split(";")[0];
		}

		res.render("graph1", { graphData: Data });
	});
};

GraphController.getGraphsdiagram2 = function (req, res) {
	const connectionString = `server=.;Database=${req.body.company}_Warehouse;Trusted_Connection=Yes;Driver={ODBC Driver 17 for SQL Server}`;

	let query = '';
	if (req.body.supplier == "null" && req.body.trim == "null") {
		query = `SELECT f.s_key, f.net_total FROM facts AS f, dim_suppliers AS s WHERE f.s_key = s.s_key`;
	} else {
		query = "SELECT * FROM facts AS f WHERE ";

		let t_query = '';
		if (req.body.trim != "null") {
			t_query = `f.s_key LIKE '2023;${req.body.trim}`;
			if (req.body.month != "null") { t_query = t_query.concat(";" + req.body.month); }
			query = query.concat(t_query + "|%' ");
		}

		let p_query = ''; if (req.body.trim != "null") { p_query = "AND "; }
		if (req.body.supplier != "null") {
			query = query + p_query.concat(`f.s_key LIKE '%;${req.body.supplier};%' `);
		} else { query = query.concat(`AND f.s_key LIKE '%;Fornecedor%'`); }
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
	const connectionString = `server=.;Database=${req.body.company}_Warehouse;Trusted_Connection=Yes;Driver={ODBC Driver 17 for SQL Server}`;
	
	let query = '';
	if (req.body.client == "null" && req.body.trim == "null") {
		query = `SELECT * FROM facts AS f, dim_clients AS c WHERE f.s_key = c.s_key`;
	} else {
		query = "SELECT * FROM facts AS f WHERE ";

		let t_query = '';
		if (req.body.trim != "null") {
			t_query = `f.s_key LIKE '2023;${req.body.trim}`;
			if (req.body.month != "null") { t_query = t_query.concat(";" + req.body.month); }
			query = query.concat(t_query + "|%' ");
		}

		let p_query = ''; if (req.body.trim != "null") { p_query = "AND "; }
		if (req.body.client != "null") {
			query = query + p_query.concat(`f.s_key LIKE '%${req.body.client};%'`);
		} else { query = query.concat(`AND f.s_key NOT LIKE '%Fornecedor%'`); }
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

		res.render("graph3", { graphData: Data });
	});
};

GraphController.getGraphsdiagram4 = function (req, res) {
	const connectionString = `server=.;Database=${req.body.company}_Warehouse;Trusted_Connection=Yes;Driver={ODBC Driver 17 for SQL Server}`;

	let query = '';
	if (req.body.product_id == "null" && req.body.trim == "null") {
		query = `SELECT f.s_key, f.net_total FROM facts AS f WHERE f.s_key LIKE 'TECH%' AND f.s_key LIKE '%CLIENT'`;
	} else {
		query = "SELECT * FROM facts AS f WHERE ";

		let t_query = '';
		if (req.body.trim != "null") {
			t_query = `f.s_key LIKE '2023;${req.body.trim}`;
			if (req.body.month != "null") { t_query = t_query.concat(";" + req.body.month); }
			query = query.concat(t_query + "|%' ");
		}

		let p_query = ''; if (req.body.trim != "null") { p_query = "AND "; }
		if (req.body.product_id != "null") {
			query = query + p_query.concat(`f.s_key LIKE '%|${req.body.product_id};%' `);
		} else { query = query.concat('AND f.s_key LIKE \'%|TECH%\''); }
		query = query.concat(`AND f.s_key LIKE '%CLIENT'`);
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

		for (i = 0; i < Data.length; i++) {
			let match = Data[i].name.match(/\d+/);
			//the name has the constructions of TECH1;SUPPLIER short it by number
			Data[i].name = Data[i].name.split(";")[0];
		}

		res.render("graph4", { graphData: Data });
	});
};

GraphController.getGraphsdiagram5 = function (req, res) {
	const connectionString = `server=.;Database=${req.body.company}_Warehouse;Trusted_Connection=Yes;Driver={ODBC Driver 17 for SQL Server};`;

	let query = '';
	if (req.body.country == 'null' && req.body.trim == 'null') {
		query = 'SELECT f.s_key, f.net_total FROM facts AS f, dim_places AS p WHERE f.s_key = p.s_key';
	} else {
		query = 'SELECT * FROM facts AS f WHERE ';

		let t_query = '';
		if (req.body.trim != 'null') {
			t_query = `f.s_key LIKE '2023;${req.body.trim}`;
			if (req.body.month != 'null') { t_query = t_query.concat(";" + req.body.month); }
			query = query.concat(t_query + '|%\' ');
		}

		let p_query = ''; if (req.body.trim != 'null') { p_query = ' AND '; }
		if (req.body.country != 'null') {
			p_query = p_query.concat(`f.s_key LIKE '%|${req.body.country}`);
			if (req.body.city != 'null') { p_query = p_query.concat(`;${req.body.city}`); }
			query = query.concat(p_query + '\'');
		} else {
			query = query.concat(`AND (f.s_key LIKE '%|Portugal' OR f.s_key LIKE '%|Espanha')`);
		}
	}
	console.log(query)

	sql.query(connectionString, query, (err, result) => {
		if (err) {
			console.log(err);
			return;
		}
		const Data = result.map((row) => ({
			name: row.s_key,
			value: row.net_total,
		}));
			console.log(Data);
		res.render("newgraph5", { graphData: Data });
	});
};

GraphController.getGraphsdiagram6 = function (req, res) {
	const connectionString = `server=.;Database=${req.body.company}_Warehouse;Trusted_Connection=Yes;Driver={ODBC Driver 17 for SQL Server}`;

	let query = '';
	if (req.body.country == 'null' && req.body.trim == 'null') {
		query = 'SELECT f.s_key, f.net_total FROM facts AS f, dim_places AS p WHERE f.s_key = p.s_key';
	} else {
		query = 'SELECT * FROM facts AS f WHERE ';

		let t_query = '';
		if (req.body.trim != 'null') {
			t_query = `f.s_key LIKE '2023;${req.body.trim}`;
			if (req.body.month != 'null') { t_query = t_query.concat(";" + req.body.month); }
			query = query.concat(t_query + '|%\' ');
		}

		let p_query = ''; if (req.body.trim != 'null') { p_query = ' AND '; }
		if (req.body.country != 'null') {
			p_query = p_query.concat(`f.s_key LIKE '%|${req.body.country}`);
			if (req.body.city != 'null') { p_query = p_query.concat(`;${req.body.city}`); }
			query = query.concat(p_query + '\'');
		} else {
			query = query.concat(`AND (f.s_key LIKE '%|Portugal' OR f.s_key LIKE '%|Espanha')`);
		}
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
};

module.exports = GraphController;