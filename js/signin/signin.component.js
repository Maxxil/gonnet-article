app.component('signinComponent' , {
    templateUrl: 'js/signin/signin.html',
    controller: ['$scope' , 'signinService'
        , function ($scope , signinService) {
            $scope.email = '';
            $scope.password = '';

            $scope.signin = function () {
                signinService.signin($scope.email,$scope.password);
            }
        }]
});