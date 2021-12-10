"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var db_pool_1 = require("../db/db-pool");
var dao_factory_1 = require("../dao/dao-factory");
var Promise = require("promise");
var ReportBoImpl = /** @class */ (function () {
    function ReportBoImpl() {
    }
    ReportBoImpl.prototype.findMonthMembers = function (year, month) {
        return new Promise(function (resolve, reject) {
            db_pool_1.pool.getConnection(function (err, connection) {
                if (err) {
                    reject(err);
                }
                else {
                    //console.log("check-2 ", year, month);
                    var reportDAO = dao_factory_1.getDAO(dao_factory_1.DAOTypes.REPORTS, connection);
                    var promise = reportDAO.monthMembers(year, month);
                    promise.then(function (report) {
                        resolve(report);
                        db_pool_1.pool.releaseConnection(connection);
                    }).catch(function (error) {
                        reject(error);
                        db_pool_1.pool.releaseConnection(connection);
                    });
                }
            });
        });
    };

    return ReportBoImpl;
}());
exports.ReportBoImpl = ReportBoImpl;