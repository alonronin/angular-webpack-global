var files = require.context('./app', true, /\.js$/);

var arr_files = _.remove(files.keys(), function(file){
   return !/\.spec\.js$/.test(file);
});

arr_files.sort(function(a, b){
    if(/index\.js$/.test(a)) return -1;
    if(/app.js$/.test(a)) return -1;

    return 1;
});

arr_files.forEach(function(file){
    files(file);
});