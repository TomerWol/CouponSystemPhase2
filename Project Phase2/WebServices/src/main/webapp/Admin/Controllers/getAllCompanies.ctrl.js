var module = angular.module("admin")

module.controller("getAllCompaniesCtrl", getAllCtrlCtor)

function getAllCtrlCtor(getAllCompaniesSrvc) {

	this.comps = getAllCompaniesSrvc.comps;
	
	this.refreshTable = function() {
		getAllCompaniesSrvc.refreshTable();
	}
}