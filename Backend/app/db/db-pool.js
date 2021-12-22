"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mysql = require("mysql");

exports.pool = mysql.createPool({
    host     : "my8002.gabiadb.com",
    port     : 3306,
    database : "hanuldb",
    user     : "jihyun",
    password : "dl8430-8041",
    connectionLimit: 100
});
