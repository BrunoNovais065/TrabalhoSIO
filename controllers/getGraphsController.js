
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
        
        res.render('graph2Electro', { graphData: Data});

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
        const connectionString = 'server=.;Database=ElectroTech_Warehouse;Trusted_Connection=Yes;Driver={ODBC Driver 17 for SQL Server};';

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
        result[20].s_key = result[20].s_key.split(';')[1];
        result[22].s_key = result[22].s_key.split(';')[1];
        result[24].s_key = result[24].s_key.split(';')[1];
        result[26].s_key = result[26].s_key.split(';')[1];
        result[27].s_key = result[27].s_key.split(';')[1];
        result[29].s_key = result[29].s_key.split(';')[1];
        result[31].s_key = result[31].s_key.split(';')[1];
        result[33].s_key = result[33].s_key.split(';')[1];
        result[34].s_key = result[34].s_key.split(';')[1];
        result[35].s_key = result[35].s_key.split(';')[1];
        result[37].s_key = result[37].s_key.split(';')[1];

        Data.push({
            name: result[17].s_key,
            value: result[17].net_total
        });
        Data.push({
            name: result[18].s_key,
            value: result[18].net_total
        });
        Data.push({
            name: result[20].s_key,
            value: result[20].net_total
        });
        Data.push({
            name: result[22].s_key,
            value: result[22].net_total
        });
        Data.push({
            name: result[24].s_key,
            value: result[24].net_total
        });
        Data.push({
            name: result[26].s_key,
            value: result[26].net_total
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
            name: result[31].s_key,
            value: result[31].net_total
        });
        Data.push({
            name: result[33].s_key,
            value: result[33].net_total
        });
        Data.push({
            name: result[34].s_key,
            value: result[34].net_total
        });
        Data.push({
            name: result[35].s_key,
            value: result[35].net_total
        });
        Data.push({
            name: result[37].s_key,
            value: result[37].net_total
        });

        res.render('graph3Electro', { graphData: Data});
});
    }
};

GraphController.getGraphsdiagram4 = function(req, res) {
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

        res.render('graph4', { graphData: Data});

    }
    );
    }
    else{
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

        res.render('graph4', { graphData: Data});
    }
    );
    }
};

GraphController.getGraphsdiagram5 = function(req, res) {
    if(req.body.company == "krackentech"){
        console.log("krackentech");

        const connectionString = 'server=.;Database=KrakenTech_Warehouse;Trusted_Connection=Yes;Driver={ODBC Driver 17 for SQL Server};';

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

        result[40].s_key = result[40].s_key.split(';')[0];

        Data.push({
            name: result[36].s_key,
            value: result[36].net_total
        });
        Data.push({
            name: result[37].s_key,
            value: result[37].net_total
        });
        Data.push({
            name: result[38].s_key,
            value: result[38].net_total
        });
        Data.push({
            name: result[39].s_key,
            value: result[39].net_total
        });
        Data.push({
            name: result[40].s_key,
            value: result[40].net_total
        });
        Data.push({
            name: result[41].s_key,
            value: result[41].net_total
        });

        res.render('graph5', { graphData: Data});
    }
    );
    }
    else{
        console.log("eletrotech");

        const connectionString = 'server=.;Database=ElectroTech_Warehouse;Trusted_Connection=Yes;Driver={ODBC Driver 17 for SQL Server};';

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

        result[40].s_key = result[40].s_key.split(';')[0];
        result[46].s_key = result[46].s_key.split(';')[0];

        Data.push({
            name: result[38].s_key,
            value: result[38].net_total
        });
        Data.push({
            name: result[39].s_key,
            value: result[39].net_total
        });
        Data.push({
            name: result[40].s_key,
            value: result[40].net_total
        });
        Data.push({
            name: result[41].s_key,
            value: result[41].net_total
        });
        Data.push({
            name: result[42].s_key,
            value: result[42].net_total
        });
        Data.push({
            name: result[43].s_key,
            value: result[43].net_total
        });
        Data.push({
            name: result[44].s_key,
            value: result[44].net_total
        });
        Data.push({
            name: result[45].s_key,
            value: result[45].net_total
        });
        Data.push({
            name: result[46].s_key,
            value: result[46].net_total
        });
        Data.push({
            name: result[47].s_key,
            value: result[47].net_total
        });
        res.render('graph5Electro', { graphData: Data});
    }
    );
    }
};

GraphController.getGraphsdiagram6 = function(req, res) {
    if(req.body.company == "krackentech"){
        console.log("krackentech");

        const connectionString = 'server=.;Database=KrakenTech_Warehouse;Trusted_Connection=Yes;Driver={ODBC Driver 17 for SQL Server};';

        const queryy = `
        SELECT top 17 *
FROM dbo.facts
`;

sql.query(connectionString, queryy, (err, result) => {
    if (err) {
        console.log(err);
        return;
    }
        const Data =  result.map(row => ({
        name: row.s_key,
        value: row.net_total
        }));

        res.render('graph6', { graphData: Data});
    }
    );
    }
    else{
        console.log("eletrotech");
        const connectionString = 'server=.;Database=ElectroTech_Warehouse;Trusted_Connection=Yes;Driver={ODBC Driver 17 for SQL Server};';

        const queryy = `
        SELECT top 17 *
FROM dbo.facts
`;

sql.query(connectionString, queryy, (err, result) => {
    if (err) {
        console.log(err);
        return;
    }
        const Data =  result.map(row => ({
        name: row.s_key,
        value: row.net_total
        }));

        res.render('graph6', { graphData: Data});
    }
    );
    }
};

module.exports = GraphController;