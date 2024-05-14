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