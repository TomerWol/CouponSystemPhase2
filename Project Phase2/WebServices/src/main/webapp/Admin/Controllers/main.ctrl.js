var module = angular.module("admin")

module.controller("mainCtrl", mainCtrlCtor)

function mainCtrlCtor(mainSrvc) {
	
	this.checkFacade = function() {
		mainSrvc.checkFacade();
	}
}