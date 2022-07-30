const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'shrey',
    password: 'shrey',
    database: 'ccurve'
});
connection.connect(function(err) {
    if (err) throw err;
    console.log('Database is connected successfully !');
  });

module.exports = connection;