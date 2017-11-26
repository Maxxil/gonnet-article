app.service('signinService' , function ($http) {
    this.signin = function (email, password) {
        $http.post(signinUrl , {
            email : email
            , password : password
        } , {'Content-Type' : 'application/json'})
    }
});