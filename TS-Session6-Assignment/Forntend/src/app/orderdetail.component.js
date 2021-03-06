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
require("rxjs/add/operator/switchMap");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var myorder_service_1 = require("./myorder.service");
var OrderDetailComponent = (function () {
    function OrderDetailComponent(myorderservice, route, location) {
        this.myorderservice = myorderservice;
        this.route = route;
        this.location = location;
    }
    OrderDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap
            .switchMap(function (params) { return _this.myorderservice.getOrderDetail(+params.get('orderId')); })
            .subscribe(function (response) { return (_this.products = response.products, _this.total = response.total); });
    };
    OrderDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    return OrderDetailComponent;
}());
OrderDetailComponent = __decorate([
    core_1.Component({
        selector: 'order-detail',
        templateUrl: './order-detail.component.html',
    }),
    __metadata("design:paramtypes", [myorder_service_1.MyOrderService,
        router_1.ActivatedRoute,
        common_1.Location])
], OrderDetailComponent);
exports.OrderDetailComponent = OrderDetailComponent;
//# sourceMappingURL=orderdetail.component.js.map