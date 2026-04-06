(function () {
    angular.module('appRouter', [])
        .config(function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/login')

            $stateProvider
                .state('login', {
                    url: '/login',
                    component: 'loginComponent'
                })
                .state('home', {
                    url: '/home',
                    component: 'homeComponent'
                })
                .state('home.employee', {
                    url: '/employee',
                    component: 'employeeComponent'
                })
                .state('home.admin', {
                    url: '/admin',
                    component: 'adminComponent'
                })
        })
})()
