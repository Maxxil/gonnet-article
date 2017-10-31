/**
 * Created by Massil on 12/10/2017.
 */
app.service('articleService' , function ($http) {
    this.sendArticle = function (title, text , image) {
        var promise = $http.post()
    };

    this.getArticles = function () {
        var promise = $http.get(articleUrl);
        return promise;
    };
});