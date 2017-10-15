var module = angular.module("company")
module.service("mainSrvc", serviceCtor)

function serviceCtor($http) {
	
	this.checkFacade = function() {
		
		$http.get('http://localhost:8080/WebServices/webapi/company/checkFacade')
		.then(function(resp) {
			
		}, function(err) {
			window.location = "/WebServices/index.html";
		})
	}
}