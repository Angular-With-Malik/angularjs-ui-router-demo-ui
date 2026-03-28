(function () {
    angular.module('app')
        .component('loginComponent', {
            templateUrl: 'src/shared/template/login/login.component.html',
            controller: function ($state) {
                const vm = this
                vm.title = 'Hello Login Component'

                 vm.user = {
                    userName: '',
                    password: ''
                }
                vm.login = function () {
                    console.log(vm.user);
                    if (vm.user.userName === 'employee' && vm.user.password === 'employee') {
                        $state.go('home.employee')
                    }
                }
            }
        })
})()
