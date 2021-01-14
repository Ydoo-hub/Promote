function obj2str(obj) {
    /*
    *  'username':'ydoo',
    *  'password':'yd'
    *  't':1234564156165
    * */
    obj.t = new Date().getTime();
    var res =[];
    for(var key in obj){
        //在url中是不允许出现中文的，出现中文需要转码
        //可以encodeURIComponent()的方法来转，
        //url中只允许出现字母，数字，下划线，ascii码
        res.push(encodeURIComponent(key) +'='+ encodeURIComponent(obj[key]) )
    }
    return res.join('&');
}

function ajaxget(url,obj,timeout,successCallback,errorCallback) {

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
        /*
        *   在IE浏览器中，如果通过ajax发送get请求，那么IE浏览器会认为，同一个url只有一个结果（存在缓存）
        *   利用url后面带上 ?t=123456  只要保证每次发请求的时候url后面带的参数不一样，就可以让浏览器重新请求
        **/


        xmlhttp.open("GET",url+'?'+str,true); //设置请求方式和请求地址
        /*
        *   method：请求的类型；GET 或 POST
            url：文件在服务器上的位置
            async：true（异步）或 false（同步）
        *
        * */
        xmlhttp.send();//发送请求


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
    if(option.timeout){

        timer = setInterval(function () {
            console.log("中断请求")
            xmlhttp.abort();
            clearInterval(timer);
        },option.timeout)

    }

}
