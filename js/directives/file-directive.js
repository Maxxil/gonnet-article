/**
 * Created by Massil on 24/10/2017.
 */
app.directive("fileDirective" , function () {
    return {
        scope :
            {
                file : "="
            }
        ,link : function (scope , element, attrs) {
            element.bind('change' , function (event) {
                var reader = new FileReader();
                reader.onload = function (loadEvent) {
                    scope.$apply(function () {
                        scope.file = loadEvent.target.result;
                    })
                };
                console.log(event.target.files[0]);
                reader.readAsDataURL(event.target.files[0]);
            })
        }
    }
});