var module = angular.module("company")

module.controller("getTypeCtrl", getTypeCtrlCtor)

function getTypeCtrlCtor(getCouponTypeSrvc) {

	this.type = null;
	this.coupons = getCouponTypeSrvc.coupons;
	this.console = getCouponTypeSrvc.console;
	this.failed = getCouponTypeSrvc.failed;
	this.succes = getCouponTypeSrvc.succes;

	this.getCoupon = function() {
		getCouponTypeSrvc.getCoupon(this.type);
	}

}