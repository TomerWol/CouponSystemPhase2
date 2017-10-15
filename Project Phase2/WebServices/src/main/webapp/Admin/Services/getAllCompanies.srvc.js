var module = angular.module("admin")
module.service("getAllCompaniesSrvc", serviceCtor)

function serviceCtor($http) {
	
	this.comps = [];
	var self = this;
	
	this.refreshTable = function() {
		$http.get('http://localhost:8080/WebServices/webapi/admin/GetAllCompanies')
		.then(function(resp) {
			self.comps.all = resp.data;
		}, function(err) {
			lert('failed')
		})
		
	}
	
	$http.get('http://localhost:8080/WebServices/webapi/admin/GetAllCompanies')
			.then(function(resp) {
				self.comps.all = resp.data;
			}, function(err) {
				lert('failed')
			})
}