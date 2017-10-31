/**
 * Created by Massil on 12/10/2017.
 */
app.component('loginComponent' , {
    templateUrl : "js/login/login.html",
    controller : ['$scope' , 'loginService', '$location'
        , function ($scope , loginService, $location) {
        $scope.login = '';
        $scope.password = '';
        $scope.connect = function () {
            var promise =
                loginService.connect($scope.login , $scope.password);
            promise.then(
                function(success){
                    console.log(success);
                    $location.url("/listeArticles");
                }, function (error) {
                    console.log(error)
                }
            );

        }
    }]
});