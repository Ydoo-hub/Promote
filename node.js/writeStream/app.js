
// 写入流
const fs = require('fs');

var str = '';
for(var i = 0; i < 500;i++){
    str += `js中数组的api整理
    首先列出所有的方法：
    
    join(), sort(), slice(), splice(), concat(), reverse(), push()+pop(), shift()+unshift(), forEach(), map(), some(), every(), filter(), reduce()+reduceRight(), indexOf()+lastIndexOf(),
    
    Array.form(), Array.of(), copyWithin(), find()+findIndex(), fill(), entries()+keys()+values(), includes()`;
}

var WriteStream = fs.createWriteStream('./output.txt');

WriteStream.write(str);

WriteStream.end();  // 标记写入完成

WriteStrea.on('finish', () => {
    console.log('写入完成');
})




// 管道流  复制文件，可以是图片文件夹文件等等

var fs = require("fs");
// 创建一个可读流
var readerStream = fs.createReadStream('C:/Users/ASUS/Desktop/logo.png');

// 创建一个可写流
var WriterStream = fs.createWriteStream('./lo.png');

// 管道读写操作
// 读取 input.txt 文件内容，并将内容写入到output.txt文件中
readerStream.pipe(WriterStream);
console.log("程序执行完毕");