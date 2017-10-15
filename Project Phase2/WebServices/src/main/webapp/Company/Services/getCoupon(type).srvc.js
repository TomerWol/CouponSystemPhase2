var module = angular.module("company")
module.service("getCouponTypeSrvc", serviceCtor)

function serviceCtor($http) {
	
	this.coupons = {};
	this.console = {};
	this.failed = {};
	this.succes = {};
	var self = this;

	this.getCoupon = function(type) {

		$http.get('http://localhost:8080/WebServices/webapi/company/GetAllCouponsByType/' + type)
		.then(function(resp) {
			self.coupons.all = resp.data;
			self.succes.flag = true;
			self.failed.flag = false;
		}, function(err) {
			self.console.text = err.data;
			self.failed.flag = true;
			self.succes.flag = false;
		})
	}
}