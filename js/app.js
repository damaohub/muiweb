/**
 * Created by Mackie on 2016/8/2.
 */
//循环幻灯片初始化之前复制dom
if(mui('.mui-slider-loop')){
        var firstImg = $(".mui-slider-loop").children().first().clone().addClass("mui-slider-item-duplicate"), lastImg = $(".mui-slider-loop").children().last().clone().addClass("mui-slider-item-duplicate");
        $('.mui-slider-loop').prepend(lastImg);$('.mui-slider-loop').append(firstImg);
}

if(mui(".slide-apart-qy")){
    $(".xilie span:first-child").remove();
    var controlItem  = $(".xilie").find("a"),items = $(".slide-apart-qy").find(".jmlh");
    controlItem.addClass("mui-control-item mui-btn");
    controlItem.first().addClass("mui-active");
    items.first().addClass("mui-active").removeAttr("style");
    $(".xilie").attr("id","segmentedControls").addClass("mui-segmented-control mui-segmented-control-inverted mui-segmented-control-vertical").wrap('<div  class="mui-col-xs-3"/>');
    items.addClass("mui-control-content").wrapAll('<div id="segmentedControlContents" class="mui-col-xs-9 t"></div>');
    mui(".xilie a").each(function(index,item){
        this.href = "#content"+index;
    });
    mui(".slide-apart-qy .jmlh").each(function(index,item){
        this.id = "content"+index;
    });
}

//固定导航高度和content自适应
    $(".mui-bar-nav ~ .index-content,.mr").css("paddingTop",$("header").css("height"));
mui.init();
var tap = "tap"||"click";
$(function(){

//显示全部
    $(".info_text_outer,.showAll").on("click",function(e){
        var e = e || window.event,target = e.target || e.srcElement, opener = $(".showAll");
        textAll = $(".info-text");
        if(textAll.hasClass("notall")){
            textAll.removeClass("notall");
            opener.css("display","none");
        }else {
            
             opener.css("display","block");
            textAll.addClass("notall");
        }
	
    })

//首页slider
    if(mui('.index-slider')){
        var gallery = mui('.index-slider');
        gallery.slider({
            interval:4500//自动轮播周期，若为0则不自动播放，默认为0；
        });

    }

//dom内上下滚动
    mui('.mui-scroll-wrapper').scroll({
        deceleration: 0.0005, //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
            scrollY: true, //是否竖向滚动
            scrollX: false, //是否横向滚动
            startX: 0, //初始化时滚动至x
        startY: 0, //初始化时滚动至y
            indicators: true, //是否显示滚动条
            bounce: false, //是否启用回弹


    });
//banner滚动
    mui('#banner').scroll({
        deceleration: 0.0005, //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
        scrollY: false,//是否竖向滚动
        scrollX: true,//是否横向滚动
        startX: 0, //初始化时滚动至x
        startY: 0, //初始化时滚动至y
        indicators: false,//是否显示滚动条
        bounce: false, //是否启用回弹
    });



//企业店面展示幻灯片
    if(mui('.company-slider')){
        var gallery = mui('.company-slider');
        gallery.slider({
            interval:4500//自动轮播周期，若为0则不自动播放，默认为0；
        });

    }

//展会显示
if($("#Div1")[0]){
    $("#Div1 .mui-scroll").css("display","block");
}

//title的切换
    if($(".news_lists")[0]){
        $(".news .mui-slider-group .mui-scroll").css("display","block");
        var control_item = $(".news .mui-slider-indicator .mui-scroll").find("a"),
            default_title = control_item.first().text();
        $("header .mui-title").html(default_title);
        $("head title").html(default_title+"_中国珠宝招商网");
       $('head meta[name="keywords"]').prop("content",default_title);

       document.querySelector('.news .mui-slider').addEventListener("slide",function(event){
            var n = event.detail.slideNumber;
            $("header .mui-title").html($(control_item[n]).text());
            $("head title").html($(control_item[n]).text()+"_中国珠宝招商网");
           $('head meta[name="keywords"]').prop("content",$(control_item[n]).text());
       });
    }

    if(mui(".block")){
        $(".block").removeAttr("style");
    }
    
 //留言弹出框
    if(document.getElementById("agent")){
        //mui("#agent").popover('hide');

        mui('body').on('shown', '.mui-popover', function(e) {
            document.getElementById(e.detail.id).removeAttribute('style');
        });
        mui('body').on('hidden', '.mui-popover', function(e) {
	        document.getElementById(e.detail.id).setAttribute('z-index','-999');
        });
        function alertWindow (){
            mui("#agent").popover("show");
        }

            var delayAlert = setTimeout(alertWindow,10000);

        mui('body').on('shown', '.form-ly', function(e) {
            clearTimeout(delayAlert);
        });
        //delayAlert();
       // setInterval(delayAlert,3000)
    }

//←滚动
if(mui('.z31')){
    var speed = 20;
    function roll(demo, demo1, demo2) {
        demo2.innerHTML = demo1.innerHTML;
        function Marquee() {
            if (demo1.offsetWidth * 2 - demo.offsetWidth - demo.scrollLeft <= 0)
                demo.scrollLeft -= demo1.offsetWidth;
            else {
                demo.scrollLeft++;
            }
        }
        var MyMar = setInterval(Marquee, speed);
        demo.onmouseover = function () { clearInterval(MyMar) }
        demo.onmouseout = function () { MyMar = setInterval(Marquee, speed) }
    }
    roll(d1,d11,d111);
}


//temp
if(document.getElementById("agent")&&mui(".yellow2")){
    var y = mui(".yellow2");
    for (var i = 0; i < y.length; i++) {
        y[i].parentNode.hash = "#agent";
    }
}
//换一批

    (function () {
        if (!v.id("get_page_on9")) { return };
        getPage(v.id("get_page_on9"), v.id("cpjj_con9"));
    } ());

//回到顶部
    $(window).scroll(function() {
        if ($(window).scrollTop() >= 100) {
            $(".backTop").fadeIn(300)
        } else {
            $(".backTop").fadeOut(300)
        }
    });

    $(".backTop").on("tap",function(e){
        var e = e || window.event,target = e.target || e.srcElement,scroll = $(this).parents(".mui-scroll");
        if(scroll){
            $("html,body").animate({scrollTop:"0px"},300); scroll.css("transform","translate3d(0px, 0px, 0px) translateZ(0px)");
        }else{
            $("html,body").animate({scrollTop:"0px"},300);
        }
    
    })
//搜索框自动选定
 if($("#searchFrom")[0]){
        $("#searchFrom .search input[type=search]")[0].focus();
    }

})

//console.log(document.getElementsByClassName("mui-table-view"));



