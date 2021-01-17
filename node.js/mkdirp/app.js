const mkdirp = require("mkdirp");

mkdirp('/upload',function(err) {
    if(err) {
        console.log(err);
    }
})