var module = angular.module("customer")
module.service("purchaseCouponSrvc", serviceCtor)

function serviceCtor($http) {
	
	this.coupons = [];
	this.console = {};
	this.failed = {};
	this.succes = {};
	var self = this;

	this.purchaseCoupon = function(coupon) {

		$http.post('http://localhost:8080/WebServices/webapi/customer/PurchaseCoupon',coupon)
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

	$http.get('http://localhost:8080/WebServices/webapi/customer/GetAllCoupons')
			.then(function(resp) {
				self.coupons.all = resp.data;
			}, function(err) {
				console.log(err)
				lert('failer')
			})
}