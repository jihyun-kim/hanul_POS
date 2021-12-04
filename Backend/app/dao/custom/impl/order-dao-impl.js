"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Promise = require("promise");
var OrderDAOImpl = /** @class */ (function () {
    function OrderDAOImpl(connection) {
        this.connection = connection;
    }
    OrderDAOImpl.prototype.count = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.connection.query("select count(*) as count from Orders", function (err, results) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(results[0].count);
                }
            });
        });
    };
    OrderDAOImpl.prototype.toDayOrder = function (ordate) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.connection.query("select count(*) as count from Orders where orDate ='" + ordate + "';", function (err, results) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(results[0].count);
                }
            });
        });
    };
    OrderDAOImpl.prototype.delete = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.connection.query("DELETE FROM Orders WHERE id='" + id + "'", function (err, results) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(results.affectedRows > 0);
                }
            });
        });
    };
    OrderDAOImpl.prototype.find = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.connection.query("SELECT * FROM Orders WHERE id='" + id + "'", function (err, results) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(results);
                }
            });
        });
    };
    OrderDAOImpl.prototype.findAllOrders = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.connection.query("SELECT * FROM Orders", function (err, results) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(results);
                }
            });
        });
    };
    OrderDAOImpl.prototype.findOrdate = function (ordate) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.connection.query("CALL orDateOrder('" + ordate + "' )", function (err, results) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(results);
                }
            });
        });
    };
    OrderDAOImpl.prototype.save = function (entity) {
        //console.log("bu", entity);
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.connection.query("INSERT INTO Orders VALUES ('" + entity.id + "','" + entity.orDate + "','" + entity.gubun + "','" + entity.customerId + "')", function (err, results) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(results.affectedRows > 0);
                }
            });
        });
    };
    OrderDAOImpl.prototype.update = function (entity) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.connection.query("UPDATE Orders SET date = '" + entity.orDate + "', gubun ='" + entity.gubun + "', customerId ='" + entity.customerId + "' WHERE id='" + entity.id + "'", function (err, results) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(results.affectedRows > 0);
                }
            });
        });
    };
    return OrderDAOImpl;
}());
exports.OrderDAOImpl = OrderDAOImpl;
