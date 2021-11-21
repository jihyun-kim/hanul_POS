"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Customer = /** @class */ (function () {
    function Customer(id, name, chName, gender, birthDate, address, telNo, etc) {
        this.id = id;
        this.name = name;
        this.chName = chName;
        this.gender = gender;
        this.birthDate = birthDate;
        this.address = address;
        this.telNo = telNo;
        this.etc = etc;
    }
    return Customer;
}());
exports.Customer = Customer;
