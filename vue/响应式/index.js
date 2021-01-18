// 订阅器模型
let Dep = {
    clientList: {},
    // 添加订阅者
    listen: function (key, fn) {
        if(!clientList[key]) {
            this.clientList[key] = [];
        }
        this.clientList[key].push(fn);
    },
    // 发布消息
    trigger: function() {
        // 类数组转数组
        let key = Array.prototype.shift.call(arguments),
            fns = this.clientList[key];
            if(!fns || fns.length === 0) {
                return false;
            }
            for (let i = 0, fn; fn = fns[i++];) {
                fn.apply(this, arguments);
            }
    }
}

// 发布订阅模式 + 数据劫持

// 劫持方法
let dataHijack = function({data, tag, datakey, selector}) {
    let value = '';
    let el = document.querySelector(selector);
    Object.defineProperty(data, datakey, {
        get: function() {
            console.log('获取到数据了');
            return value;
        },
        set: function(newValue) {
            console.log("我设置好啦");
            value = newValue;
            // 调用订阅者
            Dep.trigger(tag, newValue);
        }
    });

    // 绑定观察者
    Dep.listen(tag, function(text){
        el.innerHTML = text;
    })
}