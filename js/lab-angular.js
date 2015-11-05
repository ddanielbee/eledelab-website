(function(){
	var app = angular.module('lab', []);
	app.controller("LabController", ['$http', function($http){
	    var lab = this;
	    lab.experiments = [];
	    $http.get('/experiments/all').success(function(data){
	        lab.experiments = data;
	    });
	    this.goToLink = function(experiment) {
	    	headerHide();
	    	setTimeout(function(){window.location="/experiments/"+experiment.seo_link;}, 1000);
	    };
    } ]);
})();