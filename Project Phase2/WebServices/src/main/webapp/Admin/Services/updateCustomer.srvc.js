var module = angular.module("admin")
module.service("updateCustomerSrvc", serviceCtor)

function serviceCtor($http) {

	this.customers = [];
	this.console = {};
	this.failed = {};
	this.succes = {};
	var self = this;

	this.updateCustomer = function(customer) {

		$http.put('http://localhost:8080/WebServices/webapi/admin/UpdateCustomer',customer)
		.then(function(resp) {
			self.console.text = resp.data;
			self.succes.flag = true;
			self.failed.flag = false;
		}, function(err) {
			self.console.text = err.data;
			self.failed = true;
			self.succes = false;
		})
	}
	
	this.refreshTable = function() {
		$http.get('http://localhost:8080/WebServices/webapi/admin/GetAllCustomers')
		.then(function(resp) {
			self.customers.all = resp.data;
		}, function(err) {
			self.console.text = err.data;
			self.failed = true;
			self.succes = false;
		})
	}

	$http.get('http://localhost:8080/WebServices/webapi/admin/GetAllCustomers')
			.then(function(resp) {
				self.customers.all = resp.data;
			}, function(err) {
				self.console.text = err.data;
				self.failed = true;
				self.succes = false;
			})
}