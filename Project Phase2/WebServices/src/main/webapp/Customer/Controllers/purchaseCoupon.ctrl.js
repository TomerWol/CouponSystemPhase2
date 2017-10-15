var module = angular.module("customer")

module.controller("purchaseCouponCtrl", purchaceCtrlCtor)

function purchaceCtrlCtor(purchaseCouponSrvc) {

	this.coupon = {};
	this.coupons = purchaseCouponSrvc.coupons;
	this.console = purchaseCouponSrvc.console;
	this.failed = purchaseCouponSrvc.failed;
	this.succes = purchaseCouponSrvc.succes;

	this.purchaseCoupon = function() {
		purchaseCouponSrvc.purchaseCoupon(this.coupon);
	}

}