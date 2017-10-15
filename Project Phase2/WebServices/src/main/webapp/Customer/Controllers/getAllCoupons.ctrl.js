var module = angular.module("customer")

module.controller("getAllCouponsCtrl", getAllCtrlCtor)

function getAllCtrlCtor(getAllCouponSrvc) {

	this.coupons = getAllCouponSrvc.coupons;
	
	this.refreshTable = function() {
		getAllCouponSrvc.refreshTable();
	}
}