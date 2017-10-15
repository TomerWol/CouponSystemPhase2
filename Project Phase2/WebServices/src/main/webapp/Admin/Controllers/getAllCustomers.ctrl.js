var module = angular.module("admin")

module.controller("getAllCustomersCtrl", getAllCtrlCtor)

function getAllCtrlCtor(getAllCustomersSrvc) {

	this.customers = getAllCustomersSrvc.customers;
	
	this.refreshTable = function() {
		getAllCustomersSrvc.refreshTable();
	}
}