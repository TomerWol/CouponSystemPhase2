var module = angular.module("company");

// http://stackoverflow.com/questions/41211875/angularjs-1-6-0-latest-now-routes-not-working
module.config([ '$locationProvider', function($locationProvider) {
	$locationProvider.hashPrefix('');
} ]);

// router config
module.config(function($stateProvider, $urlRouterProvider) {

	$stateProvider.state("createCoupon", {
		url : "/createCoupon",
		templateUrl : "Pages/createCoupon.html",
		controller : "createCtrl as main"
	}).state("deleteCoupon", {
		url : "/deleteCoupon",
		templateUrl : "Pages/deleteCoupon.html",
		controller : "deleteCtrl as main"
	}).state("updateCoupon", {
		url : "/updateCoupon",
		templateUrl : "Pages/updateCoupon.html",
		controller : "updateCtrl as main"
	}).state("getAllCoupons", {
		url : "/getAllCoupons",
		templateUrl : "Pages/getAllCoupons.html",
		controller : "getAllCtrl as main"
	}).state("getCoupon(id)", {
		url : "/getCoupon(id)",
		templateUrl : "Pages/getCouponById.html",
		controller : "getIdCtrl as main"
	}).state("getCoupon(price)", {
		url : "/getCoupon(price)",
		templateUrl : "Pages/getCouponByPrice.html",
		controller : "getPriceCtrl as main"
	}).state("getCoupon(type)", {
		url : "/getCoupon(type)",
		templateUrl : "Pages/getCouponByType.html",
		controller : "getTypeCtrl as main"
		
	})

});
