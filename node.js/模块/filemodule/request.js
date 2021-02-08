// 请求返回数据
let obj = {
    getName: 'laowang',
    getAge: '30'
}

// exports.res = obj; // 一种暴露方式
module.exports = obj;


exports.get = function() {
    console.log('get');
}