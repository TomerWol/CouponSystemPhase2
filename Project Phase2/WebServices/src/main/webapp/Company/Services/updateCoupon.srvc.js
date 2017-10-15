var module = angular.module("company")
module.service("updateCouponSrvc", serviceCtor)

function serviceCtor($http) {

	this.coupons = [];
	this.console = {};
	this.failed = {};
	this.succes = {};
	var self = this;

	this.updateCoupon = function(coupon) {

		$http.put('http://localhost:8080/WebServices/webapi/company/UpdateCoupon' ,coupon)
		.then(function(resp) {
			self.console.text = resp.data;
			self.succes.flag = true;
			self.failed.flag = false;
		}, function(err) {
			self.console.text = err.data;
			self.failed.flag = true;
			self.succes.flag = false;
		})
	}
	
	this.refreshTable = function() {
		
		$http.get('http://localhost:8080/WebServices/webapi/company/GetAllCoupons')
		.then(function(resp) {
			self.coupons.all = resp.data;
		}, function(err) {
			self.console.text = err.data;
			self.failed.flag = true;
			self.succes.flag = false;
		})
	}

	$http.get('http://localhost:8080/WebServices/webapi/company/GetAllCoupons')
			.then(function(resp) {
				self.coupons.all = resp.data;
			}, function(err) {
				self.console.text = err.data;
				self.failed.flag = true;
				self.succes.flag = false;
			})
}