var module = angular.module("customer")
module.service("mainSrvc", serviceCtor)

function serviceCtor($http) {
	
	this.checkFacade = function() {
		
		$http.get('http://localhost:8080/WebServices/webapi/customer/checkFacade')
		.then(function(resp) {
			
		}, function(err) {
			window.location = "/WebServices/index.html";
		})
	}
}