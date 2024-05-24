
var GraphController = {};


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
    res.render('index', { title: 'Express' });
};

GraphController.getGraphsdiagram2 = function(req, res) {
    res.render('graph1', { graphData: req.body.company});
};

GraphController.getGraphsdiagram3 = function(req, res) {
    res.render('index', { title: 'Express' });
};

GraphController.getGraphsdiagram4 = function(req, res) {
    res.render('index', { title: 'Express' });
};

GraphController.getGraphsdiagram5 = function(req, res) {
    res.render('index', { title: 'Express' });
};

GraphController.getGraphsdiagram6 = function(req, res) {
    res.render('index', { title: 'Express' });
};

module.exports = GraphController;