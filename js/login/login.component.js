/**
 * Created by Massil on 12/10/2017.
 */
app.component('loginComponent' , {
    templateUrl : "js/login/login.html",
    controller : ['$scope' , 'loginService', '$location'
        , function ($scope , loginService, $location) {
        $scope.username = '';
        $scope.password = '';
        $scope.connect = function () {
            if($scope.login != '' && $scope.password != '')
            {
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
        };
        $scope.signin = function () {
            $location.url("/signin");
        }
    }]
});