angular.module('flapperNews', ['LocalStorageModule'])
.config(function(localStorageServiceProvider){
    localStorageServiceProvider.setPrefix('univ');
    localStorageServiceProvider.setStorageType('sessionStorage');
})
.factory('posts', [function(){

}])
.controller('MainCtrl', [
  '$scope', function($scope){
      $scope.univs = [];
      $scope.addUniv = function(){
          if(!$scope.university || $scope.university === '') { return; }
          $scope.univs.push({
              university: $scope.university,
              country: $scope.country,
              preference: $scope.preference,
              term: $scope.term,
              link: $scope.link,
              rating: $scope.rating
          });
          $scope.university='';
          $scope.country='';
          $scope.preference=0;
          $scope.term=1;
          $scope.link='';
          $scope.rating=0;
      };

      $scope.incrementPreference= function(univ) {
          univ.preference++;
      };

      $scope.gridOptions = {data: 'univs'};

      $scope.deleteUniv=function(idx) {
          $scope.univs.splice(idx, 1);
      }
  }]);


