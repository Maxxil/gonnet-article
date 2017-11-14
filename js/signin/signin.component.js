app.component('signinComponent' , {
    templateUrl : 'js/signin/signin.html',
    controller: ['$scope'
    ,function ($scope) {
            $scope.email = '';
            $scope.password = '';
            
            $scope.signin = function () {
                
            }
        }]