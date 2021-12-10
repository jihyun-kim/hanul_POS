"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var cors = require("cors");
var customer_dispatcher_1 = __importDefault(require("./customer-dispatcher"));
var item_dispatcher_1 = __importDefault(require("./item-dispatcher"));
var report_dispatcher_1 = __importDefault(require("./report-dispatcher"));
var order_dispatcher_1 = __importDefault(require("./order1-dispatcher"));
var order_dispatcher_2 = __importDefault(require("./order2-dispatcher"));
var orderdetails_dispatcher_1 = __importDefault(require("./orderdetails1-dispatcher"));
var orderdetails_dispatcher_2 = __importDefault(require("./orderdetails2-dispatcher"));
var mainDespatcher = express.Router();

mainDespatcher.use(express.json());
mainDespatcher.use(cors());
mainDespatcher.use('/api/v1/customers', customer_dispatcher_1.default);
mainDespatcher.use('/api/v1/items', item_dispatcher_1.default);
mainDespatcher.use('/api/v1/reports', report_dispatcher_1.default);
mainDespatcher.use('/api/v1/orders', order_dispatcher_1.default);
mainDespatcher.use('/api/v2/orders', order_dispatcher_2.default);
mainDespatcher.use('/api/v1/ordersdetails', orderdetails_dispatcher_1.default);
mainDespatcher.use('/api/v2/ordersdetails', orderdetails_dispatcher_2.default);
exports.default = mainDespatcher;
