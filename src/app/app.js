angular.module('app', [
    'app.module1',
    'admin.login'
])

.controller('MyCtrl', function(){
    this.title = 'App Project';
});