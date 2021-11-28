"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Promise = require("promise");
var OrderDetailsDAOImpl = /** @class */ (function () {
    function OrderDetailsDAOImpl(connection) {
        this.connection = connection;
    }
    OrderDetailsDAOImpl.prototype.delete = function (orderId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.connection.query("DELETE FROM OrderDetail WHERE orderId='" + orderId + "'", function (err, results) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(results.affectedRows > 0);
                }
            });
        });
    };
    OrderDetailsDAOImpl.prototype.find = function (orderId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.connection.query("SELECT * FROM OrderDetail WHERE orderId='" + orderId + "'", function (err, results) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(results);
                }
            });
        });
    };
    OrderDetailsDAOImpl.prototype.findAll = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.connection.query("SELECT * FROM OrderDetail", function (err, results) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(results);
                }
            });
        });
    };
    OrderDetailsDAOImpl.prototype.save = function (entity) {
        console.log("bo", entity);
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.connection.query("INSERT INTO OrderDetail VALUES ('" + entity.orderId + "','" + entity.itemCode + "','" + entity.qty + "')", function (err, results) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(results.affectedRows > 0);
                }
            });
        });
    };
    OrderDetailsDAOImpl.prototype.update = function (entity) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.connection.query("UPDATE OrderDetail SET itemCode = '" + entity.itemCode + "', qty ='" + entity.qty + "' WHERE orderId='" + entity.orderId + "'", function (err, results) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(results.affectedRows > 0);
                }
            });
        });
    };
    OrderDetailsDAOImpl.prototype.findCheckItem = function (id, ordate) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.connection.query("SELECT checkItem('" + id + "', '" + ordate + "' )", function (err, results) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(results);
                }
            });
        });
    };

    return OrderDetailsDAOImpl;
}());
exports.OrderDetailsDAOImpl = OrderDetailsDAOImpl;
