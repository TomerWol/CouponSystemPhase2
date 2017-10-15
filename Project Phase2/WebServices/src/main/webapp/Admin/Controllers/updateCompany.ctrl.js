var module = angular.module("admin")

module.controller("updateCompanyCtrl", updateCtrlCtor)

function updateCtrlCtor(updateCompanySrvc) {

	this.company = {};
	this.comps = updateCompanySrvc.comps;
	this.console = updateCompanySrvc.console;
	this.failed = updateCompanySrvc.failed;
	this.succes = updateCompanySrvc.succes;

	this.updateCompany = function() {
		updateCompanySrvc.updateCompany(this.company);
	}
	
	this.refreshTable = function() {
		updateCompanySrvc.refreshTable();
	}
}