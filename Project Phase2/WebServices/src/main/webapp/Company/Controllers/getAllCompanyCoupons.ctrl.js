var module = angular.module("company")

module.controller("getAllCtrl", getCtrlCtor)

function getCtrlCtor(getAllCouponSrvc) {

	this.coupons = getAllCouponSrvc.coupons;
	
	this.refreshTable = function() {
		getAllCouponSrvc.refreshTable();
	}
}