(function () {
    angular.module('app')
        .component('menuComponent', {
            templateUrl: 'src/shared/template/menu/menu.component.html',
            controller: function () {
                const vm = this
                vm.title = 'Menu Component !!'
                vm.currectRole = ''

                vm.allMenu = [
                    {
                        employee: [
                            { label: 'Dashboard', link: 'dashboard' },
                            { label: 'Report', link: 'report' },
                            { label: 'My-Pay', link: 'my-pay' }
                        ],
                        admin: [
                            { label: 'Dashboard', link: 'dashboard' },
                            { label: 'Report', link: 'report' }
                        ]
                    }
                ]

                vm.$onInit = function () {
                    console.log(localStorage.getItem('role'));
                    vm.currectRole = localStorage.getItem('role');
                }
            }
        })
})()
