/**
 * Created by Massil on 12/10/2017.
 */
app.component('articleComponent', {
    templateUrl : 'js/article/article.html',
    controller : ['$scope' , 'articleService', '$window'
    ,function ($scope , articleService) {
        $scope.text= '';
        $scope.title = '';
        $scope.image = '';

        $scope.loadImage = function (event) {
            console.log("Image: " + event);
        };

        $scope.sendArticle = function () {
            console.log($scope.image);
           /* var promise =
                articleService.sendArticle(
                    $scope.title,
                    $scope.text,
                    $scope.image
                );
            promise.then(
                function (success) {
                    console.log("OK");
                },function (error) {
                    console.log("KO");
                }
            )*/
        }
    }]
});