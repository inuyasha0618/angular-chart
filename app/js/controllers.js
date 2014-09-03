angular.module('myApp.controllers', []).
  controller('MyCtrl1', ['$scope',
      function($scope) {
        var data = {
  labels : ["January","February","March","April","May","June","July"],
  datasets : [
    {
      fillColor : "rgba(220,220,220,0.5)",
      strokeColor : "rgba(220,220,220,1)",
      pointColor : "rgba(220,220,220,1)",
      pointStrokeColor : "#fff",
      data : [65,59,90,81,56,55,40]
    },
    {
      fillColor : "rgba(151,187,205,0.5)",
      strokeColor : "rgba(151,187,205,1)",
      pointColor : "rgba(151,187,205,1)",
      pointStrokeColor : "#fff",
      data : [28,48,40,19,96,27,100]
    }
  ]
}
        var chart = {};
        $scope.chartTypes = [{typeName: "曲线图",typeNum: 1},
                          {typeName: "雷达图",typeNum: 2}];
        $scope.currentType = $scope.chartTypes[0];
        chart.data = data;
        $scope.chart = chart;     
      }
    ]);