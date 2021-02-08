/**
 *  1. fs.stat 检测是文件还是目录
 *  2. fs.mkdir 创建目录
 *  3. fs.writeFile 创建写入文件
 *  4. fs.appendFile 追加文件
 *  5. fs.readFile 读取文件
 *  6. fs.readdir 读取目录
 *  7. fs.rename 重命名
 *  8. fs.rmdir 删除目录
 *  9. fs.unlink 删除文件
 */

 // 引入fs
const fs = require('fs');

// 1. fs.stat 检测是文件还是目录
fs.stat('./html',(err, data) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(`我是文件： ${data.isFile()}`);
    console.log(`我是目录： ${data.isDirectory()}`);
});

// 2. fsmkdir 创建目录
/**
 * 第一个参数 ：path 路径
 * 
 * 第二个参数 ：mode 目录权限（读写权限），777
 * 
 * 第三个参数 ：callback 回调函数（err, data）
 */
fs.mkdir('./css',(err, data) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log('创建成功')
})

// 3. fs.writeFile 创建写入文件

fs.writeFile('./html/index.html', 'hello node.js2', (err, data) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log('创建成功');
})

// fs.appendFile 追加文件
fs.appendFile('./css/base.css','\na{color: yellow}', (err) => {
    if(err) {
        console.log(err);
        return;
    }
    console.log('追加成功');
})

// fs.readFile 读取文件
fs.readFile('./html/index.html', (err, data) => {
    if(err) {
        console.log(err);
        return;
    }
    console.log(data.toString(), data);
})

// fs.readdir 读取目录
fs.readdir('./html', (err,data) => {
    if(err) {
        console.log(err);
        return;
    }
    console.log(data);
})

// fs.rename 重命名 功能1、表示重命名 2、表示移动文件
// 1.重命名
fs.rename('./css/base.css', './css/index.css' , (err, data) => {
    if(err) {
        console.log(err);
        return
    }
    console.log('重命名成功');
})
// 2.移动（可以便移动边重命名）
fs.rename('./css/index.css', './html/base.css' , (err, data) => {
    if(err) {
        console.log(err);
        return
    }
    console.log('移动文件成功');
})

// fs.rmdir 删除目录
fs.rmdir('./html/child', (err) => {
    if(err) {
        console.log(err);
        return;
    }
    console.log('删除目录成功');
})

// fs.unlink 删除文件
fs.unlink('./html/child/123', (err) => {
    if(err) {
        console.log(err);
        return;
    }
    console.log('删除文件成功');
})