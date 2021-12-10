"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mysql = require("mysql");

exports.pool = mysql.createPool({
    host     : "10.70.62.34",
    port     : 3306,
    database : "hanuldb",
    user     : "root",
    password : "8430",
    connectionLimit: 100
});
