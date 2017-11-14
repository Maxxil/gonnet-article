/**
 * Created by Massil on 12/10/2017.
 */
app.service('listArticleService' , function ($http) {
    this.getArticles = function () {
        var promise = $http.get(listArticlesUrl);
        return promise;
    }

});