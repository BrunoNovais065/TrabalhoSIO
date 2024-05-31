/** 
const sql = require("mysql");

const con = sql.createConnection({
    host: "192.168.1.106",
    user: "Bruno",
    password: "bruno200602",
    database: "ElectroTech_Warehouse"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    con.query("SELECT * FROM dbo.facts", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
    });
});
*/

const sql = require('msnodesqlv8');

const connectionString = 'server=.;Database=ElectroTech_Warehouse;Trusted_Connection=Yes;Driver={ODBC Driver 17 for SQL Server};';

const queryy = `
select *
from dbo.facts
`;

sql.query(connectionString, queryy, (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(result);
  });




/** 
  const sql = require('msnodesqlv8');

const connectionString = 'server=.;Database=Bookingss;Trusted_Connection=Yes;Driver={ODBC Driver 17 for SQL Server};';

// Sample data for the hotel registration
const hotelRegistration = {
  roomNo: 101,
  hotelName: 'Example Hotel',
  city: 'Example City'
};

const query = `
  INSERT INTO Hotel (hotelNo, hotelName, city)
  VALUES (${hotelRegistration.roomNo}, '${hotelRegistration.hotelName}', '${hotelRegistration.city}')
`;

/** 
sql.query(connectionString, query, (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log('Registration added successfully.');
});

//now query the database to see if the data was inserted
const queryy = `
  SELECT * FROM Hotel where hotelNo = 101
`;


sql.query(connectionString, queryy, (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  hotelRegistrations = {
    roomNo: result[0].hotelNo,
    hotelName: result[0].hotelName,
    city: result[0].city
  };
  console.log('Registration added successfully.');
  console.log(hotelRegistrations);
});

*/