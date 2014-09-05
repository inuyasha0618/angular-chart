angular.module('myApp.directives',['myApp.services']).
	directive('appVersion',function(version){
		return{
			link: function(scope,elem,attrs){
				elem.text(version);
			}
		}
	}).
	directive('gChart',function(getData){
		return{
			link: function(scope,elem,attrs){
				console.log("创建g-chart指令");
				var myChart;
				var count = 0;
				getData.fetch().success(function(dts){
				    console.log(dts);
				    scope.data.datasets = dts;     
				    scope.chartTypes = [{typeName: "曲线图",typeNum: 1},{typeName: "雷达图",typeNum: 2}];
				    scope.currentType = scope.chartTypes[0];

					scope.$watch('currentType',function(){
						++count;
						var type = scope.currentType.typeNum;
						if(type == 1){
							if(count != 1)
								myChart.destroy();
							myChart = new Chart(elem[0].getContext('2d')).Line(scope.data);
						}else if(type == 2){
							myChart.destroy();
							myChart = new Chart(elem[0].getContext('2d')).Radar(scope.data);
						}
					},true);
				});
			}
		}
	});