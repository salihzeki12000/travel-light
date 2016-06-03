var showModal = function(para) {

var modal = document.getElementById('myModal');

var modalImg = document.getElementById("img01");

var captionText = document.getElementById("caption");

    modal.style.display = "block";

    modalImg.src = para.alt;
    
    modalImg.alt = para.alt;
    
   

}




var downLoad = function() {

alert("We are sorry but our plugin is currently being reviewed by Wordpress before it will be available.We expect this process to last no longer than 6 days.Come back back then.");
    
   

}



var app = angular.module('travelLight', ['ngResource']);


app.factory('Form_Service', ['$resource', function($resource) {


var resource = $resource('http://localhost:3000/api/queryLog/:name:email:subject:message',{name:'@name',email:'@email',subject:'@subject',message:'@message'});

return resource;


}]);


app.controller('travelLightController', function($scope,Form_Service) {


$scope.contact_form_submission = function () {




var log = Form_Service.save({name:$scope.name,email:$scope.email,subject:$scope.subject,message:$scope.message}, function() {


  

  });


}



});

