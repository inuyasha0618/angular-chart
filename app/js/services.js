angular.module('myApp.services',[])
.value('version','0.2')
.factory('postData',function($http){
	return {
		post: function(dt){
			return $http({method: 'POST',url: '/data',data: dt});
		}
	}
})
.factory('getData',function($http){
	return {
		fetch: function(){
			return $http({method: 'GET',url: '/data'});
		}
	}
});