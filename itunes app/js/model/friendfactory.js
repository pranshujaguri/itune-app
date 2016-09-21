app.factory("friendfactory",function($http,$q){
    
   var object ={
       // Bad Approach Tightly Coupled with View
       //callServer : function($scope){
       callServer : function(){
       var result = $q.defer();
       function success(data){
          // alert("Success Call "+data);
           result.resolve(data); 
           //result = data;
           //$scope.result = data; // Bad Way
        }
   
        function error(err){
            //alert("Error Call "+err);
            result.reject(err);
            //$scope.result = err; // Bad Way
        }
       $http.get('server/itunes.json').then(success,error);
        //alert("Inside Server Call and result is "+result)
           return result.promise;
   }
   };
            return object;
    
});