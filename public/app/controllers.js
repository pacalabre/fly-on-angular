var ctrls = angular.module('AirplaneCtrls',['AirplaneServices'])

ctrls.controller('TakeOffCtrl',['$scope', function($scope){
  $scope.captains = "Captain Mike";
}])


ctrls.controller('InventoryCtrl',['$scope', 'AirplaneAPI',
  function($scope, AirplaneAPI){
  $scope.planes = [];

  AirplaneAPI.query(function success(data){
    console.log("success = " + data);
    $scope.planes = data;
  }, function error(data){
    console.log("err = " + data)
  })

  $scope.createPlane = function(manufacturer, model, engines, image) {

    console.log("args:"+manufacturer + model + engines)
    AirplaneAPI.save({
      manufacturer: manufacturer,
      model: model,
      engines: engines,
      image: image,
    }, function success(plane) {
      console.log(plane)
      $scope.planes.push(plane);
    }, function error(data) {
      console.log(data);
    })
  }

  $scope.findPlane = function(model) {
    console.log("args:"+model)
    AirplaneAPI.query({
      model: model,
    }, function success(plane) {
      console.log("plane info:"+plane)
      $scope.planes.push(plane);
    }, function error(data) {
      console.log(data);
    })
  }
}])

