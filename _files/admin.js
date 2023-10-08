(function() {
    //ajax改写
    var Ajax=function(url,param,fun){
        $.ajax({
            type: "POST",
            url: url,
            dataType: "json",
            data:param,
            success: function(data) { 
               fun(data);
            } 
        
        });
    }

    //文档下载
    var download=function(url,name){
        var a = document.createElement("a");
        a.download = name;
        a.href = url;
        $("body").append(a); // 修复firefox中无法触发click
        a.click();
        $(a).remove();
    }


    //url参数连接去掉第一个&
    var urlParam=function(url){
        var newUrl=url.substr(1,url.length);
        return newUrl;
    }

    $(function() {
        Ajax();
        download();
        urlParam();
    });
})