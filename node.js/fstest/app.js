/*
    fs 实际应用
*/ 

// 判断服务器上有没有upload目录。 如果没有就创建这个目录，如果有的话就不做操作。（图片上传）
const fs = require('fs');

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


