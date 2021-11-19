"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Orders = /** @class */ (function () {
    function Orders(id, date, customerId, customerName, total) {
        this.id = id;
        this.date = date;
        this.customerId = customerId;
        this.customerName = customerName;
        this.total = total;
    }
    return Orders;
}());
exports.Orders = Orders;
