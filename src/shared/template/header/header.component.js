(function () {
    angular.module('app')
        .component('headerComponent', {
            templateUrl: 'src/shared/template/header/header.component.html',
            controller: function () {
                const vm = this
                vm.title = 'My App'
            }
        })
})()