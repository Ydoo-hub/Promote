const mkdirp = require("mkdirp");

mkdirp('/upload',function(err) {
    if(err) {
        console.log(err);
    }
})

mkdirp('./upload/a/b/c',function(err) {
    if(err) {
        console.log(err);
    }
})