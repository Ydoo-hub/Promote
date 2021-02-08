/*
    fs 实际应用
*/ 

// 判断服务器上有没有upload目录。 如果没有就创建这个目录，如果有的话就不做操作。（图片上传）
const fs = require('fs');
const { resolve } = require('path');

let path = './upload'
fs.stat(path, (err, data) => {
    if (err) {
        // 执行创建目录
        mkdir(path);
        return;
    } else if (data.isDirectory()) {
        // 目录存在
        console.log(data.isDirectory());
        console.log('目录存在');
    } else {
        // 存在文件名为upload的文件，但不是我们要的文件夹目录
        // 所以要创建目录
        fs.unlink(path,(err) => {
            if(err) {
                console.log('删除文件失败');
            } else {
                mkdir(path);
            }
        });
    }
})

function mkdir(dir) {
    fs.mkdir(dir,(err) => {
        if (err) console.log('创建文件出错'); 
        else console.log('创建成功')
    })
}


// 2. wwwroot 文件夹下面有images css js 以及index.html , 找出wwwroot目录下面的所有目录，然后放到数组中
fs.readdir('./wwwroot', (err, data) => {
    if(err){
        console.log(err);
        return;
    }
    console.log(data);
    let arr = [];
    data.forEach((item) => {
        // console
        fs.stat(`./wwwroot/${item}`, (error, isDir) => {
            // console.log(isDir.isDirectory());
            if (isDir.isDirectory()) {
                arr.push(item);
                console.log(arr)
            }
        })
    })
    // console.log(arr)
    
})

// 异步处理
async function readdifn (path) {
        return new Promise( (resolve, reject) => { fs.stat(`${path}${item}`, (error, isDir) => {
            // console.log(isDir.isDirectory());
            if(isDir.isDirectory()){
                resolve(true);
            } else {
                resolve(false);
            }
        })
    })
} 

// 获取资源，循环遍历
async function main(){
    fs.readdir(path,(err,data) => {
        if(err) {
            console.log(err);
            return;
        } else {
            
        }

    })
}