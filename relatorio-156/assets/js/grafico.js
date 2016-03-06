var app = angular.module("bigbang", ['chart.js']);

app.controller("baseChamadosCtrl", function($scope, $http) {
  $scope.labels = [];
  $scope.data   = [];

  $http({
    method: 'GET',
    url: 'https://api.myjson.com/bins/3ld5x',
  }).then (function sucessCallback(response) {
    buildGraph(response.data);
  }), function errorCallback(response) {
    $scope.infos = 'Não foi possivel carregar as secretarias.';
  }
  
  function buildGraph(response){
    $scope.labels.push('Atendidos: ' + response.chamados_atendidos);
    $scope.data.push(response.chamados_atendidos);
    $scope.labels.push('Não atendidos: ' + response.chamados_nao_atendidos);
    $scope.data.push(response.chamados_nao_atendidos);
  }
});