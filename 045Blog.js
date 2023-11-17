var app = angular.module('my_app', []);

app.controller('my_cntrl',function($scope, $location, $timeout, $interval, $http)
{

$scope.make_post = function(){
    $scope.blog_data = {
        'blog_author' : $scope.blog_authorname,
        'blog_headline' : $scope.blog_h1,
        'blog_industry' : $scope.blog_ind,
        'blog_body' : $scope.blog_body,
        'blog_intro' : $scope.blog_intro,
        'blog_h2_1' : $scope.blog_h2_1,
        'blog_h2_1_para' : $scope.blog_h2_1_para,
        'blog_h2_2' : $scope.blog_h2_2,
        'blog_h2_2_para' : $scope.blog_h2_2_para,
        'blog_h2_3' : $scope.blog_h2_3,
        'blog_h2_3_para' : $scope.blog_h2_3_para,
        'blog_h2_4' : $scope.blog_h2_4,
        'blog_h2_4_para' : $scope.blog_h2_4_para,
        'blog_h2_5' : $scope.blog_h2_5,
        'blog_h2_5_para' : $scope.blog_h2_5_para,
        'blog_conc' : $scope.blog_conc,
    }


    $scope.config = {
        headers : {
            'Content-Type': 'application/json'
        }
    }

    $http.post("http://localhost:9000/save_data", $scope.blog_data, $scope.config).then(function (response) {
    $scope.post_res = response.data;

});
};

})

app.controller('my_cntrl2',function($scope, $location, $timeout, $interval, $http)
{

    $scope.selectedOption  = "";
    $scope.records = [];
    $scope.onSelectOption = function(){
        $http.get("http://localhost:9000/get_one_filtered_record/?u_filter=" + $scope.selectedOption).then(function (response) {
            $scope.records = response.data;
    }); 

    }


});