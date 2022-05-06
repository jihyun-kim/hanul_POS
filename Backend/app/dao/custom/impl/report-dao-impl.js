"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Promise = require("promise");
var ReportDAOImpl = /** @class */ (function () {
    function ReportDAOImpl(connection) {
        this.connection = connection;
    }
    ReportDAOImpl.prototype.monthItems = function (itemCode, year, month) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.connection.query("CALL monthItems('" + itemCode + "', '" + year + "', '" + month + "' )", function (err, results) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(results);
                }
            });
        });
    };
    ReportDAOImpl.prototype.OrderItems2 = function (customerId, orDate) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.connection.query("CALL orderItems2('" + customerId + "', '" + orDate + "' )", function (err, results) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(results);
                }
            });
        });
    };
    ReportDAOImpl.prototype.monthMembers = function (year, month) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.connection.query("CALL monthMembers('" + year + "', '" + month + "' )", function (err, results) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(results);
                }
            });
        });
    };
    ReportDAOImpl.prototype.monthLists = function (year, month) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.connection.query("CALL monthLists('" + year + "', '" + month + "' )", function (err, results) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(results);
                }
            });
        });
    };
    ReportDAOImpl.prototype.monthAddress = function (year, month) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.connection.query("CALL monthAddress('" + year + "', '" + month + "' )", function (err, results) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(results);
                }
            });
        });
    };
    ReportDAOImpl.prototype.yearCustomer = function (year) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.connection.query("SELECT * FROM Customer WHERE id LIKE '" + year + "%" + "' ORDER BY id", function (err, results) {
                if (err) {
                    reject(err);
                }
                else {
                    //console.log("--results-- ", results)
                    resolve(results);
                }
            });
        });
    };


    return ReportDAOImpl;
}());
exports.ReportDAOImpl = ReportDAOImpl;
