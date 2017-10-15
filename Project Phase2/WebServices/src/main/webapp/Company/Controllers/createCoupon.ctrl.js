var module = angular.module("company")

module.controller("createCtrl", createCtrlCtor)

function createCtrlCtor(createCouponSrvc) {

	this.coupon = {};
	this.coupons = createCouponSrvc.coupons;
	this.console = createCouponSrvc.console;
	this.failed = createCouponSrvc.failed;
	this.succes = createCouponSrvc.succes;

	this.createCoupon = function() {
		createCouponSrvc.createCoupon(this.coupon);
	}
	this.refreshTable = function() {
		createCouponSrvc.refreshTable();
	}

	
}