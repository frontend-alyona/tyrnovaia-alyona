const {src, dest} = require("gulp");

function copy(){
    return src('src/styles/main.css').pipe(dest('dist'))

}

exports.copy = copy