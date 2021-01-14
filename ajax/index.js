
//index模仿前端请求，在点击之后调用ajaxpost这个封装好的方法
//然后通过ajax访问到api.js，
//get 和 post 的发送数据方式不一样，get直接接在url后面post 需要在open和send
//加入  xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
//get 用req.query获取  post 放req.body 里面
$('#loginer').click(function () {

    //ajax(类型，url，传参数据，响应多久之后结束，成功回调，失败回调)
    //url?key=value&key=value
    ajax("post","/node-api/user",{
        name: login.find('[name ="username"]').val(),
        password: login.find('[name = "password"]').val()
    }, 3000 ,function (data) {
        const strToObj = JSON.parse(data)
        alert(strToObj.message)

    },function (a) {
        alert("失败了")
    })

});



//优化后 ajax中 可以不用考虑type类型的大小写问题（用toLowerCase（）解决）
//ajax中 传过去的参数可以写成一个对象，这样就不用每次都固定，实参的排序，那边只需要调用对象.属性就可以准确拿到了
$('#loginer').click(function () {

    //ajax(类型，url，传参数据，响应多久之后结束，成功回调，失败回调)
    //ajax({
    //     key:value,
    //     key:value,
    //     ......
    // })
    //url?key=value&key=value
    ajax({
        type:"post",
        url:"/node-api/user",
        data:{
        name: login.find('[name ="username"]').val(),
        password: login.find('[name = "password"]').val()
        },
        timeout:3000 ,
        success:function (data) {
            const strToObj = JSON.parse(data)
            alert(strToObj.message)

        },
        error:function (a) {
            alert("失败了")
        }
    })

});
