var req = require.context('./app', true, /\.js$/);

var arr = _.remove(req.keys(), function(file){
   return !/\.spec\.js$/.test(file);
});

arr.sort(function(a, b){
    if(/index\.js$/.test(a)) return -1;
    if(/app.js$/.test(a)) return -1;

    return 1;
});

console.log(arr);

arr.forEach(function(file){
    req(file);
});