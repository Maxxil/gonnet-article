/**
 * Created by Massil on 12/10/2017.
 */
app.service('articleService' , ['$http' , 'Upload', function ($http, Upload) {
    this.sendArticle = function (title, text , image) {
        console.log(image);
        var promise = $http.post(
            articleUrl
            , {title : title , text : text , image : image}
        );
        promise = Upload.upload({
            url : articleUrl,
            data : {title : title , text : text , file : image}
        });
        return promise;
    };

    this.getArticles = function () {
        var promise = $http.get(articleUrl);
        return promise;
    };
}]);