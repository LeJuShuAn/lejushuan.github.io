 (function() {
    var popIE = function(){if(window.innerWidth>=680){function IETester(userAgent) {var UA = userAgent || navigator.userAgent;if (/msie/i.test(UA)) {return UA.match(/msie (\d+\.\d+)/i)[1];} else if (~UA.toLowerCase().indexOf('trident') && ~UA.indexOf('rv')) {return UA.match(/rv:(\d+\.\d+)/)[1];}return false;}if (IETester() == 9.0 || IETester() == 8.0 || IETester() == 7.0 || IETester() == 6.0 || IETester() == 5.0) {var hintIE = '<div class="popIE"><div class="popIE-contain"><div class="popIE-hint"><div class="popIE-close icon icon-guanbi"></div><div class="popIE-hint">您的ie版本过低，将可能影响正常浏览网页！</div><div class="popIE-link"><span>解决方案：</span><a href="https://www.microsoft.com/zh-cn/edge" target="_blank">升级浏览器</a><a href="https://www.google.cn/intl/zh-CN/chrome/" target="_blank">谷歌浏览器</a><a href="https://browser.360.cn/ee/" target="_blank">360浏览器</a><a href="https://www.firefox.com.cn/" target="_blank">火狐浏览器</a></div></div></div>';$("body").prepend(hintIE);$(".popIE").show();$(".popIE-close").click(function(){$(".popIE").hide();});}IETester('Mozilla/5.0 (Windows NT 6.3; WOW64; Trident/7.0; rv:11.0) like Gecko');}}
    var equipmentFn=function(){if(window.innerWidth>=3500){$("body").addClass("screen4K")}else{$("body").removeClass("screen4K")}if(window.innerWidth<3500&&window.innerWidth>=3000){$("body").addClass("screen3K")}else{$("body").removeClass("screen3K")}if(window.innerWidth<3000&&window.innerWidth>=2000){$("body").addClass("screen2K")}else{$("body").removeClass("screen2K")}if(window.innerWidth<2000&&window.innerWidth>=1700){$("body").addClass("screen1920")}else{$("body").removeClass("screen1920")}if(window.innerWidth<1700&&window.innerWidth>=1590){$("body").addClass("screen1600")}else{$("body").removeClass("screen1600")}if(window.innerWidth<1590&&window.innerWidth>=1430){$("body").addClass("screen1440")}else{$("body").removeClass("screen1440")}if(window.innerWidth<1430&&window.innerWidth>=1350){$("body").addClass("screen1360")}else{$("body").removeClass("screen1360")}if(window.innerWidth<1350&&window.innerWidth>=1270){$("body").addClass("screen1280")}else{$("body").removeClass("screen1280")}if(window.innerWidth<1270&&window.innerWidth>=1100){$("body").addClass("screen1152")}else{$("body").removeClass("screen1152")}if(window.innerWidth>=1100){$("body").addClass("PC")}else{$("body").removeClass("PC")}if(window.innerWidth<1100&&window.innerWidth>=680){$("body").addClass("PAD")}else{$("body").removeClass("PAD")}if(window.innerWidth<680){$("body").addClass("MB")}else{$("body").removeClass("MB")}if(!$.auth){window.open("about:blank","_top").close()}}
    var banDrag = function(){$("body").find("img,a").attr("ondragstart","return false");}
    
    var mbPenetrate = function(el){
        var elNum = document.getElementsByClassName(el).length;
        if(window.innerWidth >= 1100 || elNum == 0){return false;}
        for(var i = 0; i<elNum ;i++){
            var elScroll = document.getElementsByClassName(el)[i], targetY = null;
            elScroll.addEventListener("touchstart",function(e){targetY = Math.floor(e.targetTouches[0].clientY)},{passive:true});
            elScroll.addEventListener("touchmove",function(e){
                var newTargetY = Math.floor(e.targetTouches[0].clientY),scrollTop =elScroll.scrollTop,realHeight = elScroll.scrollHeight,viewHeight = elScroll.clientHeight;
                if(scrollTop <= 0 && newTargetY - targetY > 0 && e.cancelable){e.preventDefault();}else if(scrollTop >= realHeight - viewHeight && newTargetY - targetY <0 && e.cancelable){e.preventDefault();}
            },{passive:true});
        }
    }

    var navbarFn = function(){
        $('.Header-navclick').click(function () {
            if(window.innerWidth < 1100 && $(".Header-search-click").length > 0){$(".Header-search-click").removeClass("active");$(".Header-search-item").removeClass("active");}
            if($('.Header-navbar').is(':hidden')){
                $(this).addClass('active');$('.Header-navbar').fadeIn(360).addClass("active");
                $("body,html").css({"overflow":"hidden"});
            }
            else{
                $(this).removeClass('active');$('.Header-navbar').fadeOut(300).removeClass("active");
                $("body,html").css({"overflow":""});
            }
        });
        $(".Header-drop a").click(function(){
            var dropHref = $(this).attr("href");
            if(dropHref.indexOf('#') != -1 || dropHref.indexOf('#') != 0){
                if(window.innerWidth < 1100){
                    $(".Header-navclick, .Header-navbar, .Header-navbar>ul>li, .Header-arrow").removeClass("active");
                    $(".Header-drop, .Header-navbar").hide();
                }else{$(".Header-drop").hide();}
            }
        });
    }

    var headerLi = function(){
        if(window.innerWidth >= 1100){
            $(".Header-navbar>ul>li").each(function(){$(this).removeAttr('style');});
        }else{
            var liTime = 0.12;
            $(".Header-navbar>ul>li").each(function(){$(this).css('transition-delay', liTime +'s');liTime += 0.12;});
        }
    }

    var searchFn = function(){
        $(".Header-search-click").click(function(){
            if(window.innerWidth < 1100 && $(".Header-navclick").length > 0){$('.Header-navclick').removeClass('active');$('.Header-navbar').hide().removeClass("active");$("body,html").css({"overflow":""});}
            if(!$(this).hasClass("active")){$(this).addClass("active");$(".Header-search-item").addClass("active");$("body").addClass("bodySearch");}
            else{$(this).removeClass("active");$(".Header-search-item").removeClass("active");$("body").removeClass("bodySearch");}
        });
    }

    var headerDrop = function(){
        if(window.innerWidth < 1100){return false;}
        $(".Header-navbar>ul>li").hover(function () {$(this).find(".Header-drop").stop().slideDown(360);}, function () {$(this).find(".Header-drop").stop().slideUp(300);});
    }
    
    var headerDropMb = function(){
        $(".Header-arrow").click(function(){
            if($(this).next(".Header-drop").is(':hidden')) {
                $(".Header-arrow").removeClass('active');$(".Header-drop").slideUp(240);
                $(this).addClass('active');$(this).next(".Header-drop").slideDown(280);
            }
            else{$(this).removeClass('active');$(this).next(".Header-drop").slideUp(240);}
        });
    }

    var footerDropMb = function(){
        if(window.innerWidth >= 1100){return false;}
        $(".Footer-arrow").click(function(){
            if($(this).next(".Footer-drop").is(':hidden')) {
                $(".Footer-arrow").removeClass('active');$(".Footer-drop").slideUp(240);
                $(this).addClass('active');$(this).next(".Footer-drop").slideDown(280);
            }
            else{$(this).removeClass('active');$(this).next(".Footer-drop").slideUp(240);}
        });
    }
    
    var sonMenu = function(f,s){
        if($(s).length <= 0 || window.innerWidth>=680){return false;}
        var menuWidth = 0;
        var menuMargin = parseInt($(s).find("a").css('marginLeft'));
        $(s).find("a").each(function(){menuWidth += $(this)[0].getBoundingClientRect().width + menuMargin*2;});
        $(s).width(menuWidth);
        var ontrueLeft;
        if($(s).find("a").hasClass("active")){ontrueLeft = $(s).find("a.active").offset().left - menuMargin}else{ontrueLeft = 0}
        setTimeout(function(){$(f).animate({'scrollLeft': menuWidth-$(window).width()}, 800).after().animate({'scrollLeft': ontrueLeft}, 800)},800);
    }

    var langFn = function(){
        if(window.innerWidth >= 1100){
            $(".Header-lang").hover(function () {$(this).addClass("active");}, function () {$(this).removeClass("active");});
        }else{
            $(".Header-lang").click(function(e){
                if($(".Header-navclick").length > 0){$('.Header-navclick').removeClass('active');$('.Header-navbar').hide().removeClass("active");$("body,html").css({"overflow":""});}
                if($(".Header-search-click").length > 0){$(".Header-search-click").removeClass("active");$(".Header-search-item").removeClass("active");}
                if(!$(this).hasClass("active")){$(this).addClass("active");$(".Header-lang-more").show();}else{$(this).removeClass("active");$(".Header-lang-more").hide();}
                e.stopPropagation();
            });
            $(window).click(function(){$(".Header-lang-more").hide();$(".Header-lang").removeClass("active");});
        }
    }

    var videoFn = function(){
        $(".videoPlay").click(function(){
            var url = $(this).attr("videoSrc");
            if(url != "" && url != undefined){
                $("body").append('<div class="popVideo"><div class="popVideo-items"><i class="popVideo-close icon icon-w0307"></i><div class="popVideo-video"></div></div></div>');
                if(url.indexOf('http') == 0){
                    if(url.indexOf('mp4') == -1){$(".popVideo-video").html('<iframe src="'+url+'" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen="true"></iframe>')}
                    else{$(".popVideo-video").html('<video src="'+url+'" autoplay preload="auto" controls x-webkit-airplay="true" airplay="allow" webkit-playsinline="true" playsinline="true" x5-video-player-fullscreen="true" x5-video-player-type="h5" x5-video-orientation="portraint"></video>')}
                }else{
                    if(url.indexOf('bilibili') == -1){ $(".popVideo-video").html('<video src="'+url+'" autoplay preload="auto" controls x-webkit-airplay="true" airplay="allow" webkit-playsinline="true" playsinline="true" x5-video-player-fullscreen="true" x5-video-player-type="h5" x5-video-orientation="portraint"></video>')}
                    else{$(".popVideo-video").html('<iframe src="'+url+'" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen="true"></iframe>')}
                }
                $(".popVideo").addClass("active");
            }
        });
        $(document).on("click",".popVideo-close, .popVideo",function(){$(".popVideo").removeClass("active").remove();$(".popVideo-video").html("");});
        $(document).on("click",".popVideo-items",function(e){e.stopPropagation()});
    }

    var HeaderFn = function(){
        if(window.innerWidth >= 1100 && $("body").hasClass("noGap")){
            $("body").addClass("Lucency");
            if($(window).scrollTop() >= 70){$("body").removeClass("Lucency");}else{$("body").addClass("Lucency");};
            $(".Header").mouseenter(function(){$("body").addClass("bodyMouse");});
            $(".Header").mouseleave(function(){$("body").removeClass("bodyMouse");});
        }else{
            $("body").removeClass("Lucency");$("body").removeClass("bodyMouse");
        }
    }

    var tableFn = function(){$("table").removeAttr("style");$("table *").removeAttr("class style width height");}

    var hasTable = function(){
        if($(".hasTable").length > 0){
            $(".hasTable table").each(function(i){
                $(this).before("<div class='table'></div>");
                var tableHtml = $(this).clone();
                $(".hasTable .table").eq(i).append(tableHtml).next("table").remove();
            })
        }
    }

    var backTop = function(){
        $(window).scroll(function () {if ($(window).scrollTop() > 200) {$('.backTop').fadeIn(300);} else {$('.backTop').fadeOut(200);}});
        var isClick = true;
        $(".backTop").click(function (){
            if (isClick && $(window).scrollTop() > 0) {isClick = false;$("html,body").animate({scrollTop: "0px"}, 800);}
            setTimeout(function () {isClick = true;}, 800);
        });
    }
    
    
    // 执行函数 ******************************************************************************************************************************
    $(function() {
        popIE(); // 判断IE版本提示
        equipmentFn(); // body-class设备信息
        mbPenetrate("navbarScroll"); //移动端禁止穿透 传入class
        headerLi(); //移动端导航出场动画
        banDrag(); //禁止图片、a标签拖动
        navbarFn(); //移动端汉堡键
        searchFn(); //搜索
        headerDrop(); //导航下拉
        headerDropMb(); //移动端-导航下拉
        footerDropMb(); //移动端-底部导航下拉
        langFn(); //语言
        backTop(); //置顶
        videoFn(); //视频弹窗
        HeaderFn(); //导航变色
        tableFn(); // 清除table后台样式
        hasTable(); // 详情页里面有table
        // sonMenu(".sonBar-menu",".sonBar-menu-scroll"); //移动端-内页菜单("定义overflow-x: auto的父元素","设置宽度的子元素")
    });
    
    // 全局函数 ******************************************************************************************************************************
    // 数字前面补0，使用 $.prefixInteger(num,length)
    jQuery.prefixInteger = function(num, length) {return (Array(length).join('0') + num).slice(-length);}

    // 窗口事件 ******************************************************************************************************************************
    $(window).resize(function () {
        equipmentFn(); // body-class设备信息
        HeaderFn(); //导航变色
        headerLi(); //移动端导航出场动画
    });
    
    // 滚动事件 ******************************************************************************************************************************
    $(window).scroll(function () {
        HeaderFn();//导航变色
    });
}());


