var module = angular.module("customer")
module.service("getAllCouponSrvc", serviceCtor)

function serviceCtor($http) {
	
	this.coupons = [];
	var self = this;
	
	this.refreshTable = function() {
		
		$http.get('http://localhost:8080/WebServices/webapi/customer/GetCustomerCoupons')
		.then(function(resp) {
			self.coupons.all = resp.data;
		}, function(err) {
			lert('failer')
		})
		
	}

	$http.get('http://localhost:8080/WebServices/webapi/customer/GetCustomerCoupons')
			.then(function(resp) {
				self.coupons.all = resp.data;
			}, function(err) {
				lert('failer')
			})
	
}