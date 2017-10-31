/**
 * Created by Massil on 12/10/2017.
 */
app.component('listArticlesComponent' , {
    templateUrl : './js/list-articles/list-articles.html',
    controller : ['$scope' , 'articleService',
    function ($scope , articleService) {
        $scope.listArticles = [];

        $scope.getArticles = function () {
            var promise = articleService.getArticles();
            promise.then(
                function (success) {
                    console.log("OK")
                },function (error) {
                    console.log("KO")
                }
            )
        };

        $scope.listArticles = $scope.getArticles();
    }]
});