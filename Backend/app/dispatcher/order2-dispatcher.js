"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var order_bo_impl_1 = require("../business/order-bo-impl");
var cors = require("cors");
var orderDispatcher = express.Router();

    orderDispatcher.route("/:ordate")
    .get(function (req, res) {
        //console.log("test-ordate",req.params.ordate );
        var promise = new order_bo_impl_1.OrderBoImpl().findOrdateOrder(req.params.ordate);
        promise.then(function (orders) {
            if (orders.length > 0) {
                //res.status(200).send(orders[0]);
                res.status(200).json(orders[0]);
            }
            else {
                res.sendStatus(404);
            }
    }).catch(function (error) {
        res.status(500).send(error);
        });
    })

exports.default = orderDispatcher;
