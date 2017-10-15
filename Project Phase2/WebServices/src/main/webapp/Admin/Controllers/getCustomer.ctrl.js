var module = angular.module("admin")

module.controller("getCustomerCtrl", getCtrlCtor)

function getCtrlCtor(getCustomerSrvc) {

	this.id = null;
	this.customer = getCustomerSrvc.customer;
	this.console = getCustomerSrvc.console;
	this.failed = getCustomerSrvc.failed;
	this.succes = getCustomerSrvc.succes;

	this.getCustomer = function() {
		getCustomerSrvc.getCustomer(this.id);
	}

}