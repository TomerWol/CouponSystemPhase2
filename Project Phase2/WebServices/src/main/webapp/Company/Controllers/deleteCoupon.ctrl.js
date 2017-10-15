var module = angular.module("company")

module.controller("deleteCtrl", deleteCtrlCtor)

function deleteCtrlCtor(deleteCouponSrvc) {

	this.id = null;
	this.coupons = deleteCouponSrvc.coupons;
	this.console = deleteCouponSrvc.console;
	this.failed = deleteCouponSrvc.failed;
	this.succes = deleteCouponSrvc.succes;

	this.deleteCoupon = function() {
		deleteCouponSrvc.deleteCoupon(this.id);
	}
	this.refreshTable = function() {
		deleteCouponSrvc.refreshTable();
	}


}