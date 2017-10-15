var module = angular.module("admin")

module.controller("createCustomerCtrl", createCtrlCtor)

function createCtrlCtor(createCustomerSrvc) {

	this.customer = {};
	this.customers = createCustomerSrvc.customers;
	this.console = createCustomerSrvc.console;
	this.failed = createCustomerSrvc.failed;
	this.succes = createCustomerSrvc.succes;

	this.createCustomer = function() {

		createCustomerSrvc.createCustomer(this.customer);
	}
	
	this.refreshTable = function() {

		createCustomerSrvc.refreshTable();
	}
}