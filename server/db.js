const mysql = require('mysql');

const connection = mysql.createConnection({
    host : "localhost",
    post : 3306,
    user : "root",
    password : "12345",
    database: "meandb"
})

connection.connect( function (err){
    if(err) {
        console.log(" connection error")
    } else {
    console.log("mysql connected")
    }
})

module.exports = connection;
