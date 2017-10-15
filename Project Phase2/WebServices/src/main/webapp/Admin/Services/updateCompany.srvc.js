var module = angular.module("admin")
module.service("updateCompanySrvc", serviceCtor)

function serviceCtor($http) {

	this.comps = [];
	this.console = {};
	this.failed = {};
	this.succes = {};
	var self = this;

	this.updateCompany = function(company) {

		$http.put('http://localhost:8080/WebServices/webapi/admin/UpdateCompany',company)
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
		$http.get('http://localhost:8080/WebServices/webapi/admin/GetAllCompanies')
		.then(function(resp) {
			self.comps.all = resp.data;
		}, function(err) {
			self.console.text = err.data;
			self.failed = true;
			self.succes = false;
		})
	}

	$http.get('http://localhost:8080/WebServices/webapi/admin/GetAllCompanies')
			.then(function(resp) {
				self.comps.all = resp.data;
			}, function(err) {
				self.console.text = err.data;
				self.failed = true;
				self.succes = false;
			})
}