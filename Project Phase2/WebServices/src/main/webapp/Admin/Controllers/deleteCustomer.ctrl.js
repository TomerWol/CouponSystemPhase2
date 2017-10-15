var module = angular.module("admin")

module.controller("deleteCustomerCtrl", deleteCtrlCtor)

function deleteCtrlCtor(deleteCustomerSrvc) {

	this.id = null;
	this.customers = deleteCustomerSrvc.customers;
	this.console = deleteCustomerSrvc.console;
	this.failed = deleteCustomerSrvc.failed;
	this.succes = deleteCustomerSrvc.succes;

	this.deleteCustomer = function() {
		deleteCustomerSrvc.deleteCustomer(this.id);
	}
	
	this.refreshTable = function() {
		deleteCustomerSrvc.refreshTable();
	}
	
}