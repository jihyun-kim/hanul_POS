"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Promise = require("promise");
var ItemDAOImpl = /** @class */ (function () {
    function ItemDAOImpl(connection) {
        this.connection = connection;
    }
    ItemDAOImpl.prototype.count = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.connection.query("select count(*) as count from Item", function (err, results) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(results[0].count);
                }
            });
        });
    };
    ItemDAOImpl.prototype.delete = function (code) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.connection.query("DELETE FROM Item WHERE code='" + code + "'", function (err, results) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(results.affectedRows > 0);
                }
            });
        });
    };
    ItemDAOImpl.prototype.find = function (code) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.connection.query("SELECT * FROM Item WHERE code='" + code + "'", function (err, results) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(results);
                }
            });
        });
    };
    ItemDAOImpl.prototype.findAll = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.connection.query("SELECT * FROM Item", function (err, results) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(results);
                }
            });
        });
    };
    ItemDAOImpl.prototype.save = function (entity) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.connection.query("INSERT INTO Item VALUES ('" + entity.code + "','" + entity.gubun + "','" + entity.description + "','" + entity.used + "')", function (err, results) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(results.affectedRows > 0);
                }
            });
        });
    };
    ItemDAOImpl.prototype.update = function (entity) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            console.log("UPDATE Item");
            _this.connection.query("UPDATE Item SET gubun = '" + entity.gubun + "', description ='" + entity.description + "', used ='" + entity.used + "' WHERE code='" + entity.code + "'", function (err, results) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(results.affectedRows > 0);
                }
            });
        });
    };
    return ItemDAOImpl;
}());
exports.ItemDAOImpl = ItemDAOImpl;
