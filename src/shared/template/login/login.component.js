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
                        localStorage.setItem('role', 'employee')
                        $state.go('home.employee')
                    } else if (vm.user.userName === 'admin' && vm.user.password === 'admin') {
                        localStorage.setItem('role', 'admin')
                        $state.go('home.admin')
                    }
                }
            }
        })
})()
