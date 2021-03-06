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
require("rxjs/add/operator/toPromise");
var ProductService = (function () {
    function ProductService(http) {
        this.http = http;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.productUrl = 'http://localhost:8080/shoppinghibernate/rest/product/list'; // URL to web api
        this.productAddUrl = 'http://localhost:8080/shoppinghibernate/rest/product/add'; // Add product URL
        this.productGetByIdUrl = 'http://localhost:8080/shoppinghibernate/rest/product/get'; //Get product by id
        this.productEdit = 'http://localhost:8080/shoppinghibernate/rest/product/edit';
        this.productDelete = 'http://localhost:8080/shoppinghibernate/rest/product/delete';
    }
    ProductService.prototype.getProducts = function () {
        //   return Promise.resolve(products);
        return this.http.get(this.productUrl)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ProductService.prototype.handleError = function (error) {
        console.error('an errored ocured', error);
        return Promise.reject(error.message || error);
    };
    ProductService.prototype.getProduct = function (id) {
        //return this.getProducts().then(products => products.find(product=> product.id===id));
        var url = this.productGetByIdUrl + "/" + id;
        return this.http.get(url)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ProductService.prototype.delete = function (id) {
        var url = this.productDelete + "/" + id;
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(function () { return null; })
            .catch(this.handleError);
    };
    ProductService.prototype.update = function (product) {
        var url = this.productEdit + "/" + product.id;
        return this.http
            .put(url, JSON.stringify(product), { headers: this.headers })
            .toPromise()
            .then(function () { return product; })
            .catch(this.handleError);
    };
    ProductService.prototype.create = function (name, price) {
        return this.http.post(this.productAddUrl, JSON.stringify({
            name: name, price: price
        }), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    return ProductService;
}());
ProductService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], ProductService);
exports.ProductService = ProductService;
//# sourceMappingURL=product.service.js.map