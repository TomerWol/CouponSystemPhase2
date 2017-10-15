var module = angular.module("admin")
module.service("getAllCustomersSrvc", serviceCtor)

function serviceCtor($http) {
	
	this.customers = [];
	var self = this;

	this.refreshTable = function() {
		
		
		$http.get('http://localhost:8080/WebServices/webapi/admin/GetAllCustomers')
		.then(function(resp) {
			self.customers.all = resp.data;
		}, function(err) {
			lert('failed')
		})
	}
	
	$http.get('http://localhost:8080/WebServices/webapi/admin/GetAllCustomers')
			.then(function(resp) {
				self.customers.all = resp.data;
			}, function(err) {
				lert('failed')
			})
}
