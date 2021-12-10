"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var report_bo_impl_1 = require("../business/report-bo-impl");
var cors = require("cors");
var reportDispatcher = express.Router();

    reportDispatcher.route("/reports2/:year/:month")
    .get(function (req, res) {
        //console.log("check--", req.params.year, req.params.month );
        var promise = new report_bo_impl_1.ReportBoImpl().findMonthMembers(req.params.year, req.params.month);
        promise.then(function (reports) {
            if (reports.length > 0) {
                //res.status(200).send(reports[0]);
                res.status(200).json(reports[0]);
            }
            else {
                res.sendStatus(404);
            }
    }).catch(function (error) {
        res.status(500).send(error);
        });
    })

exports.default = reportDispatcher;
