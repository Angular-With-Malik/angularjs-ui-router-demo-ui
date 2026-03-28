(function () {
    angular.module('app')
        .component('appRoot', {
            templateUrl: 'src/app.component.html',
            controller: function () {
                const vm = this
                vm.title = 'Hello Component'
            }
        })
})()
