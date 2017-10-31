/**
 * Created by Massil on 12/10/2017.
 */
app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            template: '<login-component></login-component>'
        })
        .when('/listeArticles', {
            template :
            '<navigation-component></navigation-component>' +
            '<list-articles-component></list-articles-component>'
        })
        .when('/article', {
            template :
                '<navigation-component></navigation-component>' +
                '<article-component></article-component>'
        })
        .otherwise({redirectTo : '/article'})
});