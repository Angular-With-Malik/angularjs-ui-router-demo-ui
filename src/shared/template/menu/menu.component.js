(function () {
    angular.module('app')
        .component('menuComponent', {
            templateUrl: 'src/shared/template/menu/menu.component.html',
            controller: function () {
                const vm = this
                vm.title = 'Menu Component !!'
            }
        })
})()