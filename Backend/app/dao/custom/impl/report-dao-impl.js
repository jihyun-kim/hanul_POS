"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Promise = require("promise");
var ReportDAOImpl = /** @class */ (function () {
    function ReportDAOImpl(connection) {
        this.connection = connection;
    }
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


    return ReportDAOImpl;
}());
exports.ReportDAOImpl = ReportDAOImpl;
