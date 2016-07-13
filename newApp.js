var app = angular.module('myApp', []);

app.controller('MainCtrl',function($scope){
    $scope.activeSprint = '...';
    setInterval(function () {
    var url = "https://docs.google.com/spreadsheets/d/1Ex4rmpPlYjnINL2dw8u93ADh7w8wpDiWF6zHgQpG7ZQ/gviz/tq?range=U1:V1";
    var query = new google.visualization.Query(url);
    query.send(handleQueryResponse);
    function handleQueryResponse(response){
      $('.loader').hide();
      $scope.data = response.getDataTable();
      $scope.activeSprint = $scope.data.Nf[0].c[1].f;
      $scope.$digest();
    }
  },3000);
  
});
// Asana Log Tracker
app.controller('LogTracker', function($scope) {
   $scope.heads = [];
        // Create the data table.
        setInterval(function(){
          var url = "https://docs.google.com/spreadsheets/d/1Ex4rmpPlYjnINL2dw8u93ADh7w8wpDiWF6zHgQpG7ZQ/gviz/tq?range=M1:O4";
          var query = new google.visualization.Query(url);
          query.send(handleQueryResponse);
          function handleQueryResponse(response){
            $scope.data = response.getDataTable();
            $scope.headings = $scope.data.Nf[0].c;
            
            for(var i=0;i<$scope.headings.length;i++){
              $scope.heads[i] = $scope.headings[i].v;
            }
            $scope.body = $scope.data.Nf;
            $scope.body.shift();
            $scope.$digest();
          }
        },3000)
        
});

// Sprint Goals
app.controller('SprintGoalsCtrl', function($scope) {
   $scope.heads = [];
        // Create the data table.
        setInterval(function(){
          var url = "https://docs.google.com/spreadsheets/d/1Ex4rmpPlYjnINL2dw8u93ADh7w8wpDiWF6zHgQpG7ZQ/gviz/tq?range=J2:K11";
          var query = new google.visualization.Query(url);
          query.send(handleQueryResponse);
          function handleQueryResponse(response){
            $scope.data = response.getDataTable();
            $scope.headings = $scope.data.Nf[0].c;
            
            for(var i=0;i<$scope.headings.length;i++){
              $scope.heads[i] = $scope.headings[i].v;
            }
            $scope.body = $scope.data.Nf;
            $scope.body.shift();
            $scope.$digest();
          }
        },3000);
});

// Sprint Time Stamp`
app.controller('SprintTimeStmpCtrl', function($scope) {
   $scope.heads = [];
   $scope.selected=false;
        // Create the data table.
        setInterval(function(){
          var url = "https://docs.google.com/spreadsheets/d/1Ex4rmpPlYjnINL2dw8u93ADh7w8wpDiWF6zHgQpG7ZQ/gviz/tq?range=Q1:S12";
          var query = new google.visualization.Query(url);
          query.send(handleQueryResponse);
          function handleQueryResponse(response){
            $scope.data = response.getDataTable();
            $scope.headings = $scope.data.Mf;
            for(var i=0;i<$scope.headings.length;i++){
              $scope.heads[i] = $scope.headings[i].label;
            }
            $scope.body = $scope.data.Nf;
            $scope.$digest();
          }
        },3000);
        
});

// Burn up Chart
app.directive('burnUpChart', function() {
    return {
      restrict: 'E',
      link: function($scope, $elm, $attr) {
        // Create the data table.
        setInterval(function(){
          var url = "https://docs.google.com/spreadsheets/d/1Ex4rmpPlYjnINL2dw8u93ADh7w8wpDiWF6zHgQpG7ZQ/gviz/tq?range=A1:D12";
          var query = new google.visualization.Query(url);
          query.send(handleQueryResponse);
          function handleQueryResponse(response){
            $scope.data = response.getDataTable();
            var options = {'width':400,
                         'height':200};
            var chart = new google.visualization.LineChart($elm[0]);
            chart.draw($scope.data, options);
          }
        },3000);
      }
  }
});

// Burn Down Chart
app.directive('burnDownChart', function() {
    return {
      restrict: 'E',
      link: function($scope, $elm, $attr) {
        // Create the data table.
        setInterval(function(){
          var url = "https://docs.google.com/spreadsheets/d/1Ex4rmpPlYjnINL2dw8u93ADh7w8wpDiWF6zHgQpG7ZQ/gviz/tq?range=F1:H12";
          var query = new google.visualization.Query(url);
          query.send(handleQueryResponse);
          function handleQueryResponse(response){
            $scope.data = response.getDataTable();
            var options = {'width':400,
                         'height':200,
                         'background':'#000'
                       };
            var chart = new google.visualization.LineChart($elm[0]);
            chart.draw($scope.data, options);
          }
        },3000);
      }
  }
});

// Resource Allocation
app.directive('pieChart', function() {
    return {
      restrict: 'E',
      link: function($scope, $elm, $attr) {
        // Create the data table.
        setInterval(function(){
          var url = "https://docs.google.com/spreadsheets/d/1Ex4rmpPlYjnINL2dw8u93ADh7w8wpDiWF6zHgQpG7ZQ/gviz/tq?range=A1:D12";
          var query = new google.visualization.Query(url);
          query.send(handleQueryResponse);
          function handleQueryResponse(response){
            $scope.data = response.getDataTable();
            var options = {'width':400,
                         'height':200,
                         'is3D':true
                       };
            var chart = new google.visualization.PieChart($elm[0]);
            chart.draw($scope.data, options);
          }
        },3000);
      }
  }
});

google.load('visualization', '1', {packages: ['corechart']});
