var module = angular.module("company")

module.controller("getPriceCtrl", getPriceCtrlCtor)

function getPriceCtrlCtor(getCouponPriceSrvc) {

	this.price = {};
	this.coupons = getCouponPriceSrvc.coupons;
	this.console = getCouponPriceSrvc.console;
	this.failed = getCouponPriceSrvc.failed;
	this.succes = getCouponPriceSrvc.succes;

	this.getCoupon = function() {

		getCouponPriceSrvc.getCoupon(this.price);
	}
}