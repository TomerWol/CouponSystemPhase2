var module = angular.module("admin")

module.controller("updateCustomerCtrl", updateCtrlCtor)

function updateCtrlCtor(updateCustomerSrvc) {

	this.customer = {};
	this.customers = updateCustomerSrvc.customers;
	this.console = updateCustomerSrvc.console;
	this.failed = updateCustomerSrvc.failed;
	this.succes = updateCustomerSrvc.succes;

	this.updateCustomer = function() {
		updateCustomerSrvc.updateCustomer(this.customer);
	}
	this.refreshTable = function() {
		updateCustomerSrvc.refreshTable();
	}
}