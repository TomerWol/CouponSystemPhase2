var module = angular.module("company")
module.service("getCouponIDSrvc", serviceCtor)

function serviceCtor($http) {
	
	this.coupon = {};
	this.console = {};
	this.failed = {};
	this.succes = {};
	var self = this;

	this.getCoupon = function(id) {

		$http.get('http://localhost:8080/WebServices/webapi/company/GetCoupon/' + id)
		.then(function(resp) {
			self.coupon.obj = resp.data;
			self.succes.flag = true;
			self.failed.flag = false;
		}, function(err) {
			self.console.text = err.data;
			self.failed.flag = true;
			self.succes.flag = false;
		})
	}
}