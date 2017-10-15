var module = angular.module("customer")

module.controller("mainCtrl", mainCtrlCtor)

function mainCtrlCtor(mainSrvc) {
	
	this.checkFacade = function() {
		mainSrvc.checkFacade();
	}
}