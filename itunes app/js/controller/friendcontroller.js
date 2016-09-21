app.controller("friendctrl",function($scope,friendfactory){
    var promise = friendfactory.callServer($scope); 
    // Do Something else
    for(var i= 1; i<=10; i++){
        console.log("I is ",i);
    }
    console.log("Now i am checking the Promise");
    promise.then(function(data){
       $scope.result=  data;
        console.log($scope.result);
    },function (error){
         $scope.result=  error;
    });
   // alert("Result is "+result);
});