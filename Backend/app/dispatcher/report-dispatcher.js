"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var report_bo_impl_1 = require("../business/report-bo-impl");
var cors = require("cors");
var reportDispatcher = express.Router();

    reportDispatcher.route("/reports1/:itemCode/:year/:month")
    .get(function (req, res) {
        //console.log("check--", req.params.itemCode, req.params.year, req.params.month );
        var promise = new report_bo_impl_1.ReportBoImpl().findMonthItems(req.params.itemCode, req.params.year, req.params.month);
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
    reportDispatcher.route("/reports22/:customerId/:orDate")
    .get(function (req, res) {
        //console.log("check--", req.params.customerId, req.params.orDate );
        var promise = new report_bo_impl_1.ReportBoImpl().findOrderItems2(req.params.customerId, req.params.orDate);
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
    reportDispatcher.route("/reports3/:year/:month")
    .get(function (req, res) {
        //console.log("check--", req.params.year, req.params.month );
        var promise = new report_bo_impl_1.ReportBoImpl().findMonthLists(req.params.year, req.params.month);
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
    reportDispatcher.route("/reports4/:year/:month")
    .get(function (req, res) {
        //console.log("check--", req.params.year, req.params.month );
        var promise = new report_bo_impl_1.ReportBoImpl().findMonthAddress(req.params.year, req.params.month);
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
    reportDispatcher.route("/reports5/:year")
    .get(function (req, res) {
        //console.log("check--", req.params.year);
        var promise = new report_bo_impl_1.ReportBoImpl().findYearCustomer(req.params.year);
        promise.then(function (reports) {
            if (reports.length > 0) {
                res.status(200).send(reports);
                res.status(200).json(reports);
            }
            else {
                res.sendStatus(404);
            }
    }).catch(function (error) {
        res.status(500).send(error);
        });
    })

exports.default = reportDispatcher;
