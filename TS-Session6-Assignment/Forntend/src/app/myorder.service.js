"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var user_service_1 = require("./user.service");
require("rxjs/add/operator/toPromise");
var MyOrderService = (function () {
    function MyOrderService(http, userService) {
        this.http = http;
        this.userService = userService;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.GetMyOrder = 'http://localhost:8080/shoppinghibernate/rest/user/getorders';
        this.GetMyOrderProducts = 'http://localhost:8080/shoppinghibernate/rest/user/getorderproducts';
    }
    MyOrderService.prototype.getMyOrders = function () {
        var userId = this.userService.getLoggedInUserId();
        var url = this.GetMyOrder + "/" + userId;
        return this.http.get(url)
            .toPromise()
            .then(function (response) { return response.json(); });
    };
    MyOrderService.prototype.getOrderDetail = function (orderId) {
        var url = this.GetMyOrderProducts + "/" + orderId;
        return this.http.get(url)
            .toPromise()
            .then(function (response) { return response.json(); });
    };
    return MyOrderService;
}());
MyOrderService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, user_service_1.UserService])
], MyOrderService);
exports.MyOrderService = MyOrderService;
//# sourceMappingURL=myorder.service.js.map