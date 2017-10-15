var module = angular.module("company")

module.controller("getIdCtrl", getIdCtrlCtor)

function getIdCtrlCtor(getCouponIDSrvc) {

	this.id = null;
	this.coupon = getCouponIDSrvc.coupon;
	this.console = getCouponIDSrvc.console;
	this.failed = getCouponIDSrvc.failed;
	this.succes = getCouponIDSrvc.succes;

	this.getCoupon = function() {
		getCouponIDSrvc.getCoupon(this.id);
	}
}