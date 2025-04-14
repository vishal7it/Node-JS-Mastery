import path from 'path'


//join two or more file

const fullPath = path.join('/path', 'index.js', 'file.py');

// console.log('fulle path of fle is = ', fullPath);


//absolute path

const avsolutePath = path.resolve();

// console.log(avsolutePath);

const extName = path.extname('index.jpg');

if (extName == '.pdf') {
    console.log('ok')
} else {
    console.log('incorrect file type')
}




