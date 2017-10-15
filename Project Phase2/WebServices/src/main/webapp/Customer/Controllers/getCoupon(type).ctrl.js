var module = angular.module("customer")

module.controller("getCouponTypeCtrl", getCouponTypeCtrlCtor)

function getCouponTypeCtrlCtor(getCouponTypeSrvc) {

	this.type = null;
	this.coupons = getCouponTypeSrvc.coupons;
	this.console = getCouponTypeSrvc.console;
	this.failed = getCouponTypeSrvc.failed;
	this.succes = getCouponTypeSrvc.succes;

	this.getCoupon = function() {
		getCouponTypeSrvc.getCoupon(this.type);
	}

}