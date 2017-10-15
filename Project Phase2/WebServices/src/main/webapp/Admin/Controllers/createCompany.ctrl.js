var module = angular.module("admin")

module.controller("createCompanyCtrl", createCtrlCtor)

function createCtrlCtor(createCompanySrvc) {

	this.company = {};
	this.comps = createCompanySrvc.comps;
	this.console = createCompanySrvc.console;
	this.failed = createCompanySrvc.failed;
	this.succes = createCompanySrvc.succes;
	
	
	this.createCompany = function() {
		createCompanySrvc.createCompany(this.company);

	}
	
	this.refreshTable = function() {
		createCompanySrvc.refreshTable();
	}
}