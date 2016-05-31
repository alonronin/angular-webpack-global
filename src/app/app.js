var templates = require('../templates');

angular.module('app', [
    'app.module1',
    'admin.login'
])

.controller('MyCtrl', function(){
    this.title = 'App Project';
})

.run(function($templateCache) {
    _.forEach(templates.keys(), function(template){
        $templateCache.put(template, templates(template));
    });
})

;