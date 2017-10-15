var module = angular.module("admin");

// http://stackoverflow.com/questions/41211875/angularjs-1-6-0-latest-now-routes-not-working
module.config([ '$locationProvider', function($locationProvider) {
	$locationProvider.hashPrefix('');
} ]);

// router config
module.config(function($stateProvider, $urlRouterProvider) {

	$stateProvider.state("createCompany", {
		url : "/createCompany",
		templateUrl : "Pages/createCompany.html",
		controller : "createCompanyCtrl as main"
	}).state("/deleteCompany", {
		url : "/deleteCompany",
		templateUrl : "Pages/deleteCompany.html",
		controller : "deleteCompanyCtrl as main"
	}).state("createCustomer", {
		url : "/createCustomer",
		templateUrl : "Pages/createCustomer.html",
		controller : "createCustomerCtrl as main"
	}).state("deleteCustomer", {
		url : "/deleteCustomer",
		templateUrl : "Pages/deleteCustomer.html",
		controller : "deleteCustomerCtrl as main"
	}).state("getAllCompanies", {
		url : "/getAllCompanies",
		templateUrl : "Pages/getAllCompanies.html",
		controller : "getAllCompaniesCtrl as main"
	}).state("getAllCustomers", {
		url : "/getAllCustomers",
		templateUrl : "Pages/getAllCustomers.html",
		controller : "getAllCustomersCtrl as main"
	}).state("updateCompany", {
		url : "/updateCompany",
		templateUrl : "Pages/updateCompany.html",
		controller : "updateCompanyCtrl as main"
	}).state("updateCustomer", {
		url : "/updateCustomer",
		templateUrl : "Pages/updateCustomer.html",
		controller : "updateCustomerCtrl as main"
	}).state("getCompany", {
		url : "/getCompany",
		templateUrl : "Pages/getCompany.html",
		controller : "getCompanyCtrl as main"
	}).state("getCustomer", {
		url : "/getCustomer",
		templateUrl : "Pages/getCustomer.html",
		controller : "getCustomerCtrl as main"
	})

});
