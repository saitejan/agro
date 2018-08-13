angular.module('appBlogs',['appBlogsCtrl'])

.config(function($stateProvider) {
    $stateProvider

        .state('app.blogs', {
            url: "/blogs",
            controller: 'blogsCtrl',
            templateUrl: "modules/blogs/template/temp.html"
        })
});


