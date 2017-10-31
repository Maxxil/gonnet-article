/**
 * Created by Massil on 12/10/2017.
 */
app.service('loginService' , function($http){
    this.connect = function (username , password) {
        var promise = $http.post(loginUrl,
            {
                username:username,
                password : password
            } , {'Content-Type' : 'application/json'});
        return promise;
    }
});