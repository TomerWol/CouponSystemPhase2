var module = angular.module("admin")
module.service("createCompanySrvc", serviceCtor)

function serviceCtor($http) {
	
	this.comps = [];
	this.console = {};
	this.succes = {};
	this.failed = {};
	var self = this;
	
	this.createCompany = function (company) {
		
		var promise = $http.post('http://localhost:8080/WebServices/webapi/admin/CreateCompany', company) 
		promise.then(function(resp) {
			self.console.text = resp.data;
			self.succes.flag = true;
			self.failed.flag = false;
		},function(err) {
			self.console.text = err.data;
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
			self.succes.flag = false;
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