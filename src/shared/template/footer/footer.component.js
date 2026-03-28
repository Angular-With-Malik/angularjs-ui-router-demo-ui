(function () {
    angular.module('app')
        .component('footerComponent', {
            templateUrl: 'src/shared/template/footer/footer.component.html',
            controller: function () {
                const vm = this
                vm.title = 'Footer Component !!'
            }
        })
})()
