function obj2str(obj) {
    /*
    *  'username':'ydoo',
    *  'password':'yd'
    *  't':1234564156165
    * */

    var res =[];
    for(var key in obj){
        //在url中是不允许出现中文的，出现中文需要转码
        //可以encodeURIComponent()的方法来转，
        //url中只允许出现字母，数字，下划线，ascii码
        res.push(encodeURIComponent(key) +'='+ encodeURIComponent(obj[key]) )
    }
    return res.join('&');
}

function ajaxpost(url,obj,timeout,successCallback,errorCallback) {

        //将对象转化成字符串
        var str = obj2str(obj);  //[username=ydoo&password=yd]

        // var xmlhttp = new XMLHttpRequest();
        var xmlhttp;//创建异步对象
        if (window.XMLHttpRequest)
        {// code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp=new XMLHttpRequest();
        }
        else
        {// code for IE6, IE5
            xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
        }






        xmlhttp.onreadystatechange = function (ev) { //监听
            /*
            *0: 请求未初始化
            *1: 服务器连接已建立
            *2: 请求已接收
            *3: 请求处理中
            *4: 请求已完成，且响应已就绪
            * */

            if(xmlhttp.readyState == 4) {
                clearInterval(timer);
                console.log('请求完成');
                //判断请求是否成功
                if(xmlhttp.status>=200 && xmlhttp.status<300 || xmlhttp.status == 304){
                    console.log("可以接收到数据")
                    successCallback(xmlhttp.responseText);
                }
                else {
                    console.log("不可以接收到数据")
                    errorCallback();
                }
                //处理返回结果
            }
        }



    //判断是不是传入超时时间
    if(timeout){

        timer = setInterval(function () {
            console.log("中断请求")
            xmlhttp.abort();
            clearInterval(timer);
        },timeout)

    }

}
