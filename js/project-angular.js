(function(){
	var app = angular.module("project", []);

	app.filter('trusted', ['$sce', function ($sce) {
	    return function(url) {
	        return $sce.trustAsResourceUrl(url);
	    };
	}]);

	app.controller("ProjectController", ['$http', function($http){
	    var project = this;
	    project.experiment = [];
	    var url = window.location.href;
	    url = url.split("/");
	    url = url[url.length-1];
	    $http.get('/experiments/'+url+"/get").success(function(data){
	        project.experiment = data;
	    });

    } ]);
})();