const path = require('path');
const string = __filename;         //현재 파일의 경로+파일명

console.log(string);
console.log('path.sep : ', path.sep);
console.log('path.delimiter: ', path.delimiter);
console.log('--------------------------------');
console.log('path.dirname() : ', path.dirname(string));
console.log('path.extname() " ', path.extname(string));
console.log('path.basename() : ', path.basename(string));
console.log('path.basename - extname: ', path.basename(string, path.extname(string)));
console.log('--------------------------------');
console.log('path.parse()', path.parse(string));
console.log('path.format(): ', path.format({
    dir: '/Users/mqnic/Documents/study/node_js/project_04',
    name: 'path',
    ext: '.js',
}));
console.log('path.normalize() : ', path.normalize('/Users/mqnic/Documents////////study/node_js/project_04/path.js'));
console.log('--------------------------------');
console.log('path.isAbsolute : ', path.isAbsolute('/Users/mqnic/Documents/'));
console.log('path.isAbsolute : ', path.isAbsolute('./home'));
console.log('--------------------------------');
