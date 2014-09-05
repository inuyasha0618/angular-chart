angular.module('myApp.controllers', ['myApp.services'])
  .controller('graphCtrl', ['$scope','getData',
      function($scope,getData) {
        console.log("创建图表页");
        $scope.data = {
            labels : ["January","February","March","April","May","June","July"],
            datasets : []
          }
      }
    ]).controller('addNewCtrl',['$scope','$location','postData',function($scope,$location,postData){
        console.log("创建编辑页");
        $scope.dataToPost = {};
        $scope.dataToPost.data = new Array(7);

        $scope.isHided = false;
        $scope.btnText = "向数据库添加新数据";
        $scope.gotoGraph = function(){
          postData.post($scope.dataToPost).success(function(){
            $location.path('/graph-view');
          })
        }
    }]).controller('listCtrl',['$scope','getData','delData',function($scope,getData,delData){
        $scope.items = []; 
        getData.fetch().success(function(dts){
          $scope.items = dts;
        })
        $scope.removeItem = function(id){
          delData.delete(id).success(function(dts){
            $scope.items = dts;
          })
        }
    }]).controller('editCtrl',['$scope','$routeParams','$location','getData','postData',function($scope,$routeParams,$location,getData,postData){
        $scope.isHided = true;
        $scope.btnText = "保存修改";
        var id = $routeParams.id;
        getData.getById(id).success(function(data){
          $scope.dataToPost = data;
        })
        $scope.gotoGraph = function(){
          postData.post($scope.dataToPost).success(function(){
            $location.path('/graph-view');
          })
        }
    }])