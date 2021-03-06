(function() {
	'use strict';

	angular
		.module('catalogue.home')
		.factory('homeService', homeService);

	homeService.$inject = ['$cordovaGeolocation', '$q', 'geolib', 'convert', 'dataService'];

	/* @ngInject */
	function homeService($cordovaGeolocation, $q, geolib, convert, dataService) {
		var service = {
			getFeaturedCategories: getFeaturedCategories,
			getFeaturedProducts: getFeaturedProducts,
			getBusiness: getBusiness
		};
		return service;

		// ***************************************************************

		function getFeaturedCategories() {
			return dataService.getFeaturedCategories();
		}

		function getFeaturedProducts() {
			return dataService.getFeaturedProducts();
		}

		function getBusiness(){
			return dataService.getBusiness();
		}
	}

})();
