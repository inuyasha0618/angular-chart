angular.module('myApp.controllers', ['myApp.services'])
  .controller('graphCtrl', ['$scope','getData',
      function($scope,getData) {
        console.log("创建图表页");
        $scope.data = {
            labels : ["January","February","March","April","May","June","July"],
            datasets : []
          }
      }
    ]).controller('editCtrl',['$scope','$location','postData',function($scope,$location,postData){
        console.log("创建编辑页");
        $scope.dataToPost = {};
        $scope.dataToPost.data = new Array(7);

        $scope.gotoGraph = function(){
          postData.post($scope.dataToPost).success(function(){
            $location.path('/graph-view');
          })
        }
    }]);