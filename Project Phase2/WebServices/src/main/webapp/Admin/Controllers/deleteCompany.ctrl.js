var module = angular.module("admin")

module.controller("deleteCompanyCtrl", deleteCtrlCtor)

function deleteCtrlCtor(deleteCompanySrvc) {

	this.id = null;
	this.comps = deleteCompanySrvc.comps;
	this.console = deleteCompanySrvc.console;
	this.failed = deleteCompanySrvc.failed;
	this.succes = deleteCompanySrvc.succes;

	this.deleteCompany = function() {
		
		deleteCompanySrvc.deleteCompany(this.id);
	}
	
	this.refreshTable = function() {

		deleteCompanySrvc.refreshTable();
	}
}