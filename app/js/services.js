angular.module('myApp.services',[])
.value('version','0.4')
.factory('postData',function($http){
	return {
		post: function(dt){
			return $http({method: 'POST',url: '/data/new',data: dt});
		}
	}
})
.factory('getData',function($http){
	return {
		fetch: function(){
			return $http({method: 'GET',url: '/data'});
		},
		getById: function(id){
			return $http({method: 'GET',url: '/data/' + id})
		}
	}
}).factory('delData',function($http){
	return {
		delete: function(id){
			return $http.delete('/data/' + id);
		}
	}
})