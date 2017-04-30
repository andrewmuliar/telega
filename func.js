var app = angular.module("telega",["firebase"])
/*app.config(function($routeProvider) {
    $routeProvider
    .when("/:Connector", {
        templateUrl : "messagebox.html"
    })
    .when("/", {
        templateUrl : "index.html"
    })
 	.otherwise({redirectTo: '/'});
});*/
app.controller("telegaCtrl", function($scope, $firebaseArray)
{
 /*temp = new Firebase("https://sweltering-fire-1791.firebaseio.com/couting")
 $scope.count = $firebaseArray(temp)
 var rec = $scope.count.$ref().path.o
 $scope.USED = rec.length
 $scope.USED++;
 rec = $scope.USED
 $scope.count.$set({"couting":rec})*/
 $scope.telegaIn = function()
 {
  $scope.nickname = "Telega"+Math.floor(Math.random()*1000)
  var path = "https://sweltering-fire-1791.firebaseio.com/"
  var set  = new Firebase(path)
  $scope.data = $firebaseArray(set)
  $scope.data.$add({"Andrew":"Muliar"}).then(function(src)
  {
   var uid = src.key();
   path = path+uid
   $scope.index = uid
   starting = new Firebase(path)
   $scope.datas = $firebaseArray(starting)
   $scope.datas.$add({"user":$scope.nickname, "msg":"Мої вітання..."})
  })
 }


 $scope.connecty = function()
 {
  $scope.nickname = "Telega"+Math.floor(Math.random()*1000)
  path = "https://sweltering-fire-1791.firebaseio.com/"
  path = path+$scope.index
  var get = new Firebase(path)
  $scope.datas = $firebaseArray(get)
 }

 $scope.sendIt = function(keyEvent)
 {
  if (keyEvent.which === 13)
  {
    console.log($scope.datas.length)
   if($scope.datas.length>8)
   {
    $scope.datas.$remove($scope.datas[0])
   }
   $scope.datas.$add({"user":$scope.nickname, "msg":$scope.urMessage}).then(function(){$scope.urMessage = ''})
  }
 }
})