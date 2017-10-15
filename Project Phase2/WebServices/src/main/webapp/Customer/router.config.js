var module = angular.module("customer");

// http://stackoverflow.com/questions/41211875/angularjs-1-6-0-latest-now-routes-not-working
module.config([ '$locationProvider', function($locationProvider) {
	$locationProvider.hashPrefix('');
} ]);

// router config
module.config(function($stateProvider, $urlRouterProvider) {

	$stateProvider.state("purchaseCoupon", {
		url : "/purchaseCoupon",
		templateUrl : "Pages/purchaseCoupon.html",
		controller : "purchaseCouponCtrl as main"
	}).state("getAllCoupons", {
		url : "/getAllCoupons",
		templateUrl : "Pages/getAllCoupons.html",
		controller : "getAllCouponsCtrl as main"
	}).state("getCouponType", {
		url : "/getCouponType",
		templateUrl : "Pages/getCouponByType.html",
		controller : "getCouponTypeCtrl as main"
	}).state("getCouponPrice", {
		url : "/getCouponPrice",
		templateUrl : "Pages/getCouponByPrice.html",
		controller : "getCouponPriceCtrl as main"

	})

});

