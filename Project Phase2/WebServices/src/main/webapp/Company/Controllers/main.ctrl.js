var module = angular.module("company")

module.controller("mainCtrl", mainCtrlCtor)

function mainCtrlCtor(mainSrvc) {
	
	this.checkFacade = function() {
		mainSrvc.checkFacade();
	}
}