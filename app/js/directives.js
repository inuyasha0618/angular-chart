angular.module('myApp.directives',['myApp.services']).
	directive('appVersion',function(version){
		return{
			link: function(scope,elem,attrs){
				elem.text(version);
			}
		}
	}).
	directive('gChart',function(){
		return{
			link: function(scope,elem,attrs){
				console.log("创建g-chart指令");
				var myChart;
				var count = 0;
				scope.$watch('currentType',function(){
					++count;
					var type = scope.currentType.typeNum;
					if(type == 1){
						if(count != 1)
							myChart.destroy();
						myChart = new Chart(elem[0].getContext('2d')).Line(scope.chart.data);
					}else if(type == 2){
						myChart.destroy();
						myChart = new Chart(elem[0].getContext('2d')).Radar(scope.chart.data);
					}
				},true);
			}
		}
	});