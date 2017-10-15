var module = angular.module("admin")
module.service("getCustomerSrvc", serviceCtor)

function serviceCtor($http) {
	
	this.customer = {};
	this.console = {};
	this.failed = {};
	this.succes = {};
	var self = this;

	this.getCustomer = function(id) {

		$http.get('http://localhost:8080/WebServices/webapi/admin/GetCustomer/'	+ id)
		.then(function(resp) {
			self.customer.obj = resp.data;
			self.succes.flag = true;
			self.failed.flag = false;
		}, function(err) {
			self.console.text = err.data;
			self.failed.flag = true;
			self.succes.flag = false;
		})
	}
}