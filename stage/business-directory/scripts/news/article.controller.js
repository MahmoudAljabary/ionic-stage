(function() {
	'use strict';

	angular
		.module('bizdir.news')
		.controller('ArticleController', ArticleController);

	ArticleController.$inject = ['$stateParams', 'newsService'];

	/* @ngInject */
	function ArticleController($stateParams, newsService) {
		var url = $stateParams.url;
		var articleId = parseInt($stateParams.articleId);

		var vm = angular.extend(this, {
			article: null
		});

		(function activate() {
			getArticle();
		})();

		// ********************************************************************

		function getArticle() {
			newsService.getItem(url, articleId)
				.then(function(article) {
					vm.article = article;
				});
		}
	}
})();