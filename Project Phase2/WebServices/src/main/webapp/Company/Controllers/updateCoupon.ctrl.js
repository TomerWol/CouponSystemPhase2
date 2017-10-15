var module = angular.module("company")

module.controller("updateCtrl", updateCtrlCtor)

function updateCtrlCtor(updateCouponSrvc) {

	this.coupon = {};
	this.coupons = updateCouponSrvc.coupons;
	this.console = updateCouponSrvc.console;
	this.failed = updateCouponSrvc.failed;
	this.succes = updateCouponSrvc.succes;

	this.updateCoupon = function() {
		updateCouponSrvc.updateCoupon(this.coupon);
	}
	this.refreshTable = function() {
		updateCouponSrvc.refreshTable();
	}

}