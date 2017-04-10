var app = angular.module("poe_calendar",[]);
app.controller('poeController',function poeController($scope) {
  $scope.list = list;

  $scope.types = function(){
   return _.keys(_.groupBy(this.list,function(item){return item.type;}));
  };

  $scope.selection = $scope.types();

  $scope.toggleSelection = function (typeName) {
var idx = $scope.selection.indexOf(typeName);
 if (idx > -1) {
      $scope.selection.splice(idx, 1);
    }
 else {
      $scope.selection.push(typeName);
    }
  };

  $scope.filterFunction = function(fltr){
   return function( item ) {
     return $scope.selection.indexOf(item.type) !== -1;
   };
  };
});