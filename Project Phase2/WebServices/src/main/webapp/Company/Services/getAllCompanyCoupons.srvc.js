var module = angular.module("company")
module.service("getAllCouponSrvc", serviceCtor)

function serviceCtor($http) {

	this.coupons = [];
	this.console = {}
	var self = this;
	
	this.refreshTable = function() {
		
		$http.get('http://localhost:8080/WebServices/webapi/company/GetAllCoupons')
		.then(function(resp) {
			self.coupons.all = resp.data;
		}, function(err) {
			self.console.text = err.data;
		})
	}

	$http.get('http://localhost:8080/WebServices/webapi/company/GetAllCoupons')
			.then(function(resp) {
				self.coupons.all = resp.data;
			}, function(err) {
				self.console.text = err.data;
			})
}