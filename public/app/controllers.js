var ctrls = angular.module('AirplaneCtrls',['AirplaneServices'])

ctrls.controller('TakeOffCtrl',['$scope', function($scope){
  $scope.captains = "Captain Mike";
}])


ctrls.controller('InventoryCtrl',['$scope', function($scope){
  $scope.planes = [232,454,177];
}])
