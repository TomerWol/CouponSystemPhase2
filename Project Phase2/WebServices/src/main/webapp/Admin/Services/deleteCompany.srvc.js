var module = angular.module("admin")
module.service("deleteCompanySrvc", serviceCtor)

function serviceCtor($http) {
	
	this.comps = [];
	this.console = {};
	this.succes = {};
	this.failed = {};
	var self = this;
	
	this.deleteCompany = function (id) {
		
		var promise = $http.delete('http://localhost:8080/WebServices/webapi/admin/DeleteCompany/' + id) 
		promise.then(function(resp) {
			self.console.text = resp.data;
			self.succes.flag = true;
			self.failed.flag = false;
		},function(err) {
			self.console.text = err;
			self.failed.flag = true;
			self.succes.flag = false;
		})
	}
	this.refreshTable = function(){
		$http.get('http://localhost:8080/WebServices/webapi/admin/GetAllCompanies')
		.then(function(resp) {
			self.comps.all = resp.data;
		}, function(err) {
			self.console.text = err.data;
			self.flag.failed = true;
		})
		
	}
	
	$http.get('http://localhost:8080/WebServices/webapi/admin/GetAllCompanies')
	.then(function(resp) {
		self.comps.all = resp.data;
	}, function(err) {
		self.console.text = err.data;
		self.flag.failed = true;
	})
}