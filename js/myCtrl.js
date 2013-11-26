/**
 * Created with IntelliJ IDEA.
 * User: miigaajoey
 * Date: 11/26/13
 * Time: 8:20 PM
 * To change this template use File | Settings | File Templates.
 */
angular.module("myApp", [])
    .controller("myCtrl", function($scope){
        $scope.name = "enhtur"
        $scope.list = [{
            name: "enhtur",
            gender: "m"
            },
            {
                name: "lulu",
                gender: "m"
            },
            {
                name: "anand",
                gender: "m"
            },
            {
                name: "jerome",
                gender: "m"
            },
            {
                name: "enhtur",
                gender: "m"
            }];
        $scope.setToAnand = function(){
            if($scope.name == "")
            $scope.name = "anand";
        };
    });