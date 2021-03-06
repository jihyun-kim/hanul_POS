"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dao_factory_1 = require("../dao/dao-factory");
var Promise = require("promise");
var db_pool_1 = require("../db/db-pool");
var OrderDetailsBOImpl = /** @class */ (function () {
    function OrderDetailsBOImpl() {
    }
    OrderDetailsBOImpl.prototype.orderTransaction = function (orders, orderDetails) {
        console.log('---order----',orders);
        console.log('---orderDeatils--',orderDetails);
        return new Promise(function (resolve, reject) {
            db_pool_1.pool.getConnection(function (err, connection) {
                if (err) {
                    reject(err);
                }
                else {
                    var conn = connection;
                    var orderDAO_1 = dao_factory_1.getDAO(dao_factory_1.DAOTypes.ORDERS, conn);
                    var orderDetailsDAO_1 = dao_factory_1.getDAO(dao_factory_1.DAOTypes.ORDERDETAILS, conn);
                    conn.beginTransaction(function (err) {
                        if (err) {
                            throw err;
                        }
                        var promise1 = orderDAO_1.save(orders);
                        promise1.then(function (result) {
                            conn.commit(function (err) {
                                if (err) {
                                    return conn.rollback(function () {
                                        throw err;
                                    });
                                }
                                /////////////
                                resolve(result);
                                //console.log('success Orders!');
                                ///////////////    
                                orderDetails.forEach( function(orderDetail) {
                                    //console.log("dis", orderDetail);
                                    var promise1 = orderDetailsDAO_1.save(orderDetail);
                                    promise1.then(function (result) {
                                        conn.commit(function (err) {
                                            if (err) {
                                                return conn.rollback(function () {
                                                    throw err;
                                                });
                                            }
                                            resolve(result);
                                            //console.log('success orderDetails');
                                        });
                                    }).catch(function (error) {
                                        console.log('unsuccess orderDetailsDAO!');
                                        return conn.rollback(function () {
                                            reject(error);
                                            db_pool_1.pool.releaseConnection(connection);
                                        });
                                    });
                                });
                            });
                        }).catch(function (error) {
                            console.log('unsuccess Order!');
                            return conn.rollback(function () {
                                reject(error);
                                db_pool_1.pool.releaseConnection(connection);
                            });
                        });
                    });
                }
            });
        });
    };

    OrderDetailsBOImpl.prototype.findOrderDetails = function (id) {
        //console.log('---bussiness/orderdetails-bo-impl/findOrderDetails----', id);
        return new Promise(function (resolve, reject) {
            db_pool_1.pool.getConnection(function (err, connection) {
                if (err) {
                    reject(err);
                }
                else {
                    var orderDetailsDAO = dao_factory_1.getDAO(dao_factory_1.DAOTypes.ORDERDETAILS, connection);
                    var promise = orderDetailsDAO.find(id);
                    promise.then(function (orderDetails) {
                        resolve(orderDetails);
                        db_pool_1.pool.releaseConnection(connection);
                    }).catch(function (error) {
                        reject(error);
                        db_pool_1.pool.releaseConnection(connection);
                    });
                }
            });
        });
    };

    OrderDetailsBOImpl.prototype.findCheckItem = function (customerid, ordate) {
        //console.log('---bussiness/orderdetails-bo-impl/findCheckItem----', customerid, ordate);
        return new Promise(function (resolve, reject) {
            db_pool_1.pool.getConnection(function (err, connection) {
                if (err) {
                    reject(err);
                }
                else {
                    var orderDetailsDAO = dao_factory_1.getDAO(dao_factory_1.DAOTypes.ORDERDETAILS, connection);
                    var promise = orderDetailsDAO.CheckItem(customerid, ordate);
                    promise.then(function (orderDetails) {
                        //console.log(orderDetails);
                        resolve(orderDetails);
                        db_pool_1.pool.releaseConnection(connection);
                    }).catch(function (error) {
                        reject(error);
                        db_pool_1.pool.releaseConnection(connection);
                    });
                }
            });
        });
    };

    OrderDetailsBOImpl.prototype.findOrderItems = function (customerid, ordate) {
        //console.log('---***bussiness/orderdetails-bo-impl/findOrderItems----', customerid, ordate);
        return new Promise(function (resolve, reject) {
            db_pool_1.pool.getConnection(function (err, connection) {
                if (err) {
                    reject(err);
                }
                else {
                    var orderDetailsDAO = dao_factory_1.getDAO(dao_factory_1.DAOTypes.ORDERDETAILS, connection);
                    var promise = orderDetailsDAO.OrderItems(customerid, ordate);
                    promise.then(function (orderDetails) {
                        //console.log("bo-->", orderDetails);
                        resolve(orderDetails);
                        db_pool_1.pool.releaseConnection(connection);
                    }).catch(function (error) {
                        reject(error);
                        db_pool_1.pool.releaseConnection(connection);
                    });
                }
            });
        });
        
    };

    return OrderDetailsBOImpl;
}());
exports.OrderDetailsBOImpl = OrderDetailsBOImpl;
