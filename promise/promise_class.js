class Promise {
    constructor (executor) {
        // 添加属性
        this.PromiseState = 'pending';
        this.PromiseResult = null;
        const that = this;
        // 声明属性
        this.callbacks = [];
        // resolve函数
        function resolve(data) {
            // 利用if来判断 是不是已经执行过一次,promise只能执行一次
        if (that.PromiseState !== 'pending') return;
        // 1、修改对象的状态 (promiseState)下面的this指向的是window 利用that来改变指向
        that .PromiseState = 'fulfilled'; // resolved
        // 2、设置对象结果值 (promiseResult) 
        that .PromiseResult = data;
        
            setTimeout (() => {
                // 调用成功的回调函数
                that.callbacks.forEach(item => {
                    item.onResolved(data);
                })
            }) 
        }
        // reject函数
        function reject(data) {
            // 利用if来判断 是不是已经执行过一次,promise只能执行一次
            if (that.PromiseState !== 'pending') return;
            // 1、修改对象的状态 (promiseState)下面的this指向的是window 利用that来改变指向
            that .PromiseState = 'rejected';
            // 2、设置对象结果值 (promiseResult) 
            that .PromiseResult = data;
            
            setTimeout(() => {
                // 调用成功的回调函数(使用数组来处理多个回调)
                that.callbacks.forEach(item => {
                    item.onRejected(data);
                })
            })
        }
        try {
            //同步调用【执行器函数】
            executor(resolve,reject);
        } catch(e) {
            // 修改promise 对象状态为【失败】
            reject(e);
        }

    }

    then (onResolved, onRejected) {
        const that = this;
        // 判断回调函数参数 (这里解决异常穿透的问题)
        if (typeof onRejected !== 'function') {
            // console.log('穿透')
            onRejected = reason => {
                throw reason;
            }
        }
        // 值传递 (这里解决值传递 的问题)
        if (typeof onResolved !== 'function') {
            onResolved = value => { return value } 
        }
        return new Promise( (resolve, reject) => {
        // 封装
            function callback(type){
                try{
                    let result = type(that .PromiseResult);
                        if (result instanceof Promise) {
                            result.then (v => {
                                resolve(v);
                            }, r => {
                                reject(r)
                            })
                    } else {
                        resolve(result);
                    }
                } catch (e) {
                    reject(e);
                }
            }

            // console.log(this.PromiseResult);

            if(this.PromiseState === 'fulfilled'){
                setTimeout (() => {
                    callback(onResolved);
                })
            }
            if(this.PromiseState === 'rejected'){
                setTimeout(() => {
                    callback(onRejected);
                })
            }
            // 判断pending状态
            if(that.PromiseState === 'pending'){
                that.callbacks.push({
                    onResolved: function() {
                        callback(onResolved);
                    } , // key:value 
                    onRejected: function() {
                        callback(onRejected);
                    }   // key:value
                })
            }
        })
    }

    catch (onRejected) {
        return this.then(undefined, onRejected);
    }

    static resolve(value) {
        //返回promise对象
        return new Promise((resolve, reject)=> {
            if (value instanceof Promise) {
                value.then(
                    v => {
                    resolve(v);  
                    }, r => {
                    reject(r);
                    }
                )
            } else {
                resolve (value);
            }
        })
    }

    static reject(reason) {
        //返回promise对象
        return new Promise((resolve, reject) => {
            reject(reason);
        })
    }

    static all(promises) {
        // 返回结果为 promise对象
        // console.log(promises.length);
        return new Promise ((resolve, reject) => {
            // 声明变量
            let count = 0;
            // 用arr存放 promiseResult
            let arr = [];
            for (let i = 0; i < promises.length; i++){
            //每一个promise对象都成功才可以调用 resolve();
            //遍历
            promises[i].then(v => {
                // 得知对象的状态是成功的
                // 将当前的promise对象存入到数组
                //  arr.push(v);  使用这种方式有一点的瑕疵,push进去的时候可能会存在先后顺序问题
                arr[i] = v;
                count++;
                // console.log(count);
                // 判断是不是都走完了
                    if (count === promises.length) {
                        // 修改状态
                        // console.log(arr);
                        resolve(arr);
                    }
                }, r => {
                    console.log(r);
                    reject(r);
                })
            }
        })
    }

    static race(promises) {
        return new Promise((resolve, reject)=> {
            for (let i = 0; i < promises.length; i++){
                promises[i].then(v => {
                //直接修改返回对象的状态为 【成功】
                resolve(v);
                },r => {
                //直接修改返回对象的状态为 【失败】
                reject(r);
                })
            }
        })
    }

}