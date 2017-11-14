/**
 * Created by Massil on 12/10/2017.
 */
app.component('articleComponent', {
    templateUrl : 'js/article/article.html',
    controller : ['$scope' , 'articleService', '$window', 'Upload'
    ,function ($scope , articleService, Upload) {
        $scope.text= '';
        $scope.title = '';
        $scope.image = '';
        $scope.clickOnUpload = false;

        $scope.loadImage = function (event) {
            console.log("Image: " + event);
        };

        $scope.sendArticle = function () {
            console.log($scope.text);
            var promise =
                articleService.sendArticle(
                    $scope.title,
                    $scope.text,
                    $scope.image
                );
            promise.then(
                function (success) {
                    console.log("OK send article");
                },function (error) {
                    console.log("KO send article");
                    console.log(error);
                }
            )
        }
    }]
});