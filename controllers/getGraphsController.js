
var GraphController = {};

const sql = require('msnodesqlv8');


/*
const sql = require("mysql");

const con = sql.createConnection({
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
});
*/



GraphController.getGraphsdiagram1 = function(req, res) {
    console.log(req.body);
    if(req.body.company == "krackentech"){
        console.log("krackentech");
        
        const connectionString = 'server=.;Database=KrakenTech_Warehouse;Trusted_Connection=Yes;Driver={ODBC Driver 17 for SQL Server};';

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
        const Data = result.map(row => ({
        name: row.s_key,
        value: row.net_total
        }));

        
        for (i = 0; i < Data.length; i++) {
            let match = Data[i].name.match(/\d+/);
            //the name has the constructions of TECH1;SUPPLIER short it by number
            Data[i].name = Data[i].name.split(';')[0];
        }
        

        res.render('graph1', { graphData: Data});
    });
    }else{
        console.log("eletrotech");

        const connectionString = 'server=.;Database=ElectroTech_Warehouse;Trusted_Connection=Yes;Driver={ODBC Driver 17 for SQL Server};';

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
        const Data = result.map(row => ({
        name: row.s_key,
        value: row.net_total
        }));

        
        for (i = 0; i < Data.length; i++) {
            let match = Data[i].name.match(/\d+/);
            //the name has the constructions of TECH1;SUPPLIER short it by number
            Data[i].name = Data[i].name.split(';')[0];
        }
        

        res.render('graph1', { graphData: Data});

    });
    }
};

GraphController.getGraphsdiagram2 = function(req, res) {
    if(req.body.company == "krackentech"){
        console.log("krackentech");

        const connectionString = 'server=.;Database=KrakenTech_Warehouse;Trusted_Connection=Yes;Driver={ODBC Driver 17 for SQL Server};';

        const queryy = `
        SELECT *
        FROM dbo.facts
        WHERE s_key LIKE '%Fornecedor%';
`;

sql.query(connectionString, queryy, (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
        const Data = result.map(row => ({
        name: row.s_key,
        value: row.net_total
        }));

        //the data is divided by ; thake out the first element
        for (i = 0; i < Data.length; i++) {
            Data[i].name = Data[i].name.split(';')[1];
        }
        
        res.render('graph2', { graphData: Data});
    });
    }else{
        console.log("eletrotech");

        const connectionString = 'server=.;Database=ElectroTech_Warehouse;Trusted_Connection=Yes;Driver={ODBC Driver 17 for SQL Server};';

        const queryy = `
        SELECT *
        FROM dbo.facts
        WHERE s_key LIKE '%Fornecedor%';
`;

sql.query(connectionString, queryy, (err, result) => {

    if (err) {
      console.log(err);
      return;
    }
        const Data = result.map(row => ({
        name: row.s_key,
        value: row.net_total
        }));

        //the data is divided by ; thake out the first element
        for (i = 0; i < Data.length; i++) {
            Data[i].name = Data[i].name.split(';')[1];
        }
        
        res.render('graph2', { graphData: Data});

    });
    }
};

GraphController.getGraphsdiagram3 = function(req, res) {
    if(req.body.company == "krackentech"){
        console.log("krackentech");

        const connectionString = 'server=.;Database=KrakenTech_Warehouse;Trusted_Connection=Yes;Driver={ODBC Driver 17 for SQL Server};';

        const queryy = `
        select *
from dbo.facts`;
sql.query(connectionString, queryy, (err, result) => {
    if (err) {
        console.log(err);
        return;
    }
        console.log(result[17].s_key);

        const Data = [];

        result[17].s_key = result[17].s_key.split(';')[1];
        result[18].s_key = result[18].s_key.split(';')[1];
        result[19].s_key = result[19].s_key.split(';')[1];
        result[20].s_key = result[20].s_key.split(';')[1];
        result[23].s_key = result[23].s_key.split(';')[1];
        result[25].s_key = result[25].s_key.split(';')[1];
        result[27].s_key = result[27].s_key.split(';')[1];
        result[29].s_key = result[29].s_key.split(';')[1];
        result[30].s_key = result[30].s_key.split(';')[1];
        result[31].s_key = result[31].s_key.split(';')[1];

        Data.push({
            name: result[17].s_key,
            value: result[17].net_total
        });
        Data.push({
            name: result[18].s_key,
            value: result[18].net_total
        });
        Data.push({
            name: result[19].s_key,
            value: result[19].net_total
        });
        Data.push({
            name: result[20].s_key,
            value: result[20].net_total
        });
        Data.push({
            name: result[23].s_key,
            value: result[23].net_total
        });
        Data.push({
            name: result[25].s_key,
            value: result[25].net_total
        });
        Data.push({
            name: result[27].s_key,
            value: result[27].net_total
        });
        Data.push({
            name: result[29].s_key,
            value: result[29].net_total
        });
        Data.push({
            name: result[30].s_key,
            value: result[30].net_total
        });
        Data.push({
            name: result[31].s_key,
            value: result[31].net_total
        });
        res.render('graph3', { graphData: Data});
});
    }
    else{
        console.log("eletrotech");
        res.render('graph3', { graphData: req.body.company});
    }
};

GraphController.getGraphsdiagram4 = function(req, res) {
    if(req.body.company == "krackentech"){
        console.log("krackentech");
        res.render('graph4', { graphData: req.body.company});
    }
    else{
        console.log("eletrotech");
        res.render('graph4', { graphData: req.body.company});
    }
};

GraphController.getGraphsdiagram5 = function(req, res) {
    if(req.body.company == "krackentech"){
        console.log("krackentech");
        res.render('graph5', { graphData: req.body.company});
    }
    else{
        console.log("eletrotech");
        res.render('graph5', { graphData: req.body.company});
    }
};

GraphController.getGraphsdiagram6 = function(req, res) {
    if(req.body.company == "krackentech"){
        console.log("krackentech");
        res.render('graph6', { graphData: req.body.company});
    }
    else{
        console.log("eletrotech");
        res.render('graph6', { graphData: req.body.company});
    }
};

module.exports = GraphController;