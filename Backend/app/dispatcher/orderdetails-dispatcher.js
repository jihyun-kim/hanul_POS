"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var orderdetails_bo_impl_1 = require("../business/orderdetails-bo-impl");
var orderDetailsDispatcher = express.Router();

orderDetailsDispatcher.route("")
    .post(function (req, res) {
    console.log(req.body[0]);
    var promise = new orderdetails_bo_impl_1.OrderDetailsBOImpl().orderTransaction(req.body[0], req.body[1]);
    promise.then(function (status) { return res.status(201).json(status); })
        .catch(function (err) { return res.status(500).send(err); });
});

orderDetailsDispatcher.route("/:id")
    .get(function (req, res) {
        var promise = new orderdetails_bo_impl_1.OrderDetailsBOImpl().findOrder(req.params.id);
        promise.then(function (orderDetails) {
            if (orderDetails.length > 0) {
                res.status(200).send(orderDetails);
            }
            else {
                res.sendStatus(404);
            }
    }).catch(function (error) {
        res.status(500).send(error);
    });
});


exports.default = orderDetailsDispatcher;
