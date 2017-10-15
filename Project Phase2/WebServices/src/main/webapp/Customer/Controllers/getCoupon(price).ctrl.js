var module = angular.module("customer")

module.controller("getCouponPriceCtrl", getCouponPriceCtrlCtor)

function getCouponPriceCtrlCtor(getCouponPriceSrvc) {

	this.price = null;
	this.coupons = getCouponPriceSrvc.coupons;
	this.console = getCouponPriceSrvc.console;
	this.failed = getCouponPriceSrvc.failed;
	this.succes = getCouponPriceSrvc.succes;

	this.getCoupon = function() {
		getCouponPriceSrvc.getCoupon(this.price)
	}
}