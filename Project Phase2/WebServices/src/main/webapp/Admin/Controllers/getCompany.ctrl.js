var module = angular.module("admin")

module.controller("getCompanyCtrl", getCtrlCtor)

function getCtrlCtor(getCompanySrvc) {

	this.id = null;
	this.comp = getCompanySrvc.comp;
	this.console = getCompanySrvc.console;
	this.failed = getCompanySrvc.failed;
	this.succes = getCompanySrvc.succes;

	this.getCompany = function() {
		getCompanySrvc.getCompany(this.id);
	}

}