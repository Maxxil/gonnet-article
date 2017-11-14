/**
 * Created by Massil on 12/10/2017.
 */
app.component('listArticlesComponent' , {
    templateUrl : './js/list-articles/list-articles.html',
    controller : ['$scope' , 'articleService',
    function ($scope , articleService) {
        $scope.listArticles = [];
        $scope.urlApi = apiUrl;
        $scope.getArticles = function () {
            var promise = articleService.getArticles();
            promise.then(
                function (success) {
                    $scope.listArticles = success.data;
                    console.log("OK")
                },function (error) {
                    console.log('KO get article');
                    console.log(error);
                }
            )
        };

        $scope.listArticles = $scope.getArticles();
    }]
});