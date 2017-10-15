var module = angular.module("admin")
module.service("getCompanySrvc", serviceCtor)

function serviceCtor($http) {
	
	this.comp = {};
	this.console = {};
	this.failed = {};
	this.succes = {};
	var self = this;

	this.getCompany = function(id) {

		$http.get('http://localhost:8080/WebServices/webapi/admin/GetCompany/' + id)
		.then(function(resp) {
			self.comp.obj = resp.data;
			self.succes.flag = true;
			self.failed.flag = false;
		}, function(err) {
			self.console.text = err.data;
			self.failed.flag = true;
			self.succes.flag = false;
		})
	}
}