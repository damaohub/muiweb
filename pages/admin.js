/**
 * Created by Administrator on 2016/12/27.
 */
$(function() {
    $("*[data-href]").click(function() {
        var href = $(this).attr("data-href");
        location.href = href
    });
    $(".show_search").click(function() {
        $("#modal-search").addClass("show_on");
        $("html,body").addClass("show_on")
    });
    $("#close-search-modal").click(function() {
        $("#modal-search").removeClass("show_on");
        $("html,body").removeClass("show_on")
    });
    $("a[data-spm]").click(function() {
        var spm = $(this).attr("data-spm");
        var sd = $("#" + spm).css("display");
        if (sd != "none") {
            $("#" + spm).hide()
        } else {
            $("#" + spm).show()
        }
    });
    $("#button-show-message, .jm-popup,.button-show-message").click(function() {
        $("#modal-message").show();
        $("html,body").addClass("show_on");
        $("#item-data").hide();
        $("#centertck").css("display", "none");
        $("#item-data .item-data").stop().animate({
                bottom: "-20.94933rem"
            },
            500);
        $("html,body").removeClass("show_on")
    });
    $("#editZone").click(function() {
        $("#modal-pos").show();
        $("html,body").addClass("show_on");
        $("#centertck").css("display", "none")
    });
    $("*[data-alert]").click(function() {
        var id = $(this).attr("data-alert");
        $("#" + id).show()
    });
    $("*[data-aform]").click(function() {
        var id = $(this).attr("data-aform");
        $("#" + id).show();
        $("html,body").addClass("show_on")
    });
    $(".close-modal").click(function() {
        $(".modal").hide();
        $("html,body").removeClass("show_on")
    });
    $(".button-show-category").click(function() {
        $("#slider-category").addClass("show_on");
        $("html,body").addClass("show_on")
    });
    $("#close-category-modal").click(function() {
        $("#slider-category").removeClass("show_on");
        $("html,body").removeClass("show_on")
    });
    $(document).ready(function(e) {
        $(".sc-list").find("a:lt(7)").css("display", "block");
        $(".sc-list").find("a:last").show()
    });
    $(".show_category_more").click(function() {
        var aLink = $(this).parent(".sc-list").find("a").eq(7).css("display");
        if (aLink == "none") {
            $(this).find("span").removeClass("icon-angle-down");
            $(this).find("span").addClass("icon-angle-up");
            $(this).parent(".sc-list").find("a").show()
        } else {
            $(this).parent(".sc-list").find("a:gt(6)").hide();
            $(this).find("span").addClass("icon-angle-down");
            $(this).find("span").removeClass("icon-angle-up");
            $(this).show()
        }
    });
    $("#category-sub .sd-menu div").click(function() {
        $("#category-sub .sd-menu div").removeClass("active");
        $(this).addClass("active");
        var sdCate = $(this).attr("data-cate");
        $(".link-menu ul").hide();
        $("." + sdCate).show()
    });
    $("#show-category-sub").click(function() {
        var bkOn = $(".black-wrapper").css("display");
        if (bkOn != "none") {
            $(".filter-advance").hide();
            $(".black-wrapper").hide();
            $(this).find("span").attr("class", "icon-angle-down");
            $("html,body").removeClass("show_on")
        } else {
            $("#category-sub").show();
            $(".black-wrapper").show();
            $("html,body").addClass("show_on");
            $(this).find("span").attr("class", "icon-angle-up");
            $("html,body").addClass("show_on")
        }
    });
    $("#show-filter").click(function() {
        var bkOn = $(".black-wrapper").css("display");
        if (bkOn != "none") {
            $(".filter-advance").hide();
            $(".black-wrapper").hide();
            $(this).find("span").attr("class", "icon-angle-down");
            $("html,body").removeClass("show_on")
        } else {
            $("#filter-form").show();
            $(".black-wrapper").show();
            $("html,body").addClass("show_on");
            $(this).find("span").attr("class", "icon-angle-up");
            $("html,body").addClass("show_on")
        }
    });
    $(".black-wrapper").click(function() {
        var bkOn = $(".black-wrapper").css("display");
        if (bkOn != "none") {
            $(".filter-advance").hide();
            $(this).hide();
            $(".filter-mod .item").find("span").attr("class", "icon-angle-down");
            $("html,body").removeClass("show_on")
        } else {}
    });
    $("#button-share").click(function() {
        $("#item-share").show();
        $("#item-share .item-data").stop().animate({
                bottom: 0
            },
            500);
        $("html,body").addClass("show_on")
    });
    $("#closeShare").click(function() {
        $("#item-share").hide();
        $("#item-share .item-data").stop().animate({
                bottom: "-20.94933rem"
            },
            500);
        $("html,body").removeClass("show_on")
    });
    $("#item-share .modal-wrapper").click(function() {
        $("#item-share").hide();
        $("#item-share .item-data").stop().animate({
                bottom: "-20.94933rem"
            },
            500);
        $("html,body").removeClass("show_on")
    });
    $("#button-dataInfo").click(function() {
        $("#item-data").show();
        $("#item-data .item-data").stop().animate({
                bottom: 0
            },
            500);
        $("html,body").addClass("show_on")
    });
    $("#closeData").click(function() {
        $("#item-data").hide();
        $("#item-data .item-data").stop().animate({
                bottom: "-20.94933rem"
            },
            500);
        $("html,body").removeClass("show_on")
    });
    $("#item-data .modal-wrapper").click(function() {
        $("#item-data").hide();
        $("#item-data .item-data").stop().animate({
                bottom: "-20.94933rem"
            },
            500);
        $("html,body").removeClass("show_on")
    });
    $(".items-more").click(function() {
        var m = $(this).find(".item-data-more").css("display");
        if (m == "none") {
            $(this).find(".item-data-more").show();
            $(this).find(".float-right span:first").html("收起");
            $(this).find(".float-right span:last").removeClass("icon icon-angle-down");
            $(this).find(".float-right span:last").addClass("icon icon-angle-up")
        } else {
            $(this).find(".item-data-more").hide();
            $(this).find(".float-right span:first").html("展开");
            $(this).find(".float-right span:last").removeClass("icon icon-angle-up");
            $(this).find(".float-right span:last").addClass("icon icon-angle-down")
        }
    });
    $("#showImages").click(function() {
        $("#item-img").addClass("active");
        $("html,body").addClass("show_on")
    });
    $("#item-img span.icon").click(function() {
        $("#item-img").removeClass("active");
        $("html,body").removeClass("show_on")
    });
    $(".dp-item .dp-control").click(function() {
        var s = $(this).siblings(".dp-container");
        var sc = $(this).siblings(".dp-container").attr("class");
        if (sc == "dp-container active") {
            s.removeClass("active");
            $(this).find("span.dp-all").html("全文")
        } else {
            s.addClass("active");
            $(this).find("span.dp-all").html("收起")
        }
    });
    $("a[data-alert]").click(function() {
        alert($(this).attr("data-alert"))
    });
    $(".dp-img").click(function() {
        var i = $(this).children("img");
        $(this).children("img").each(function(i, val) {})
    });
    $(document).ready(function(e) {
        $(".icon[data-bgcolor]").each(function() {
            var bc = $(this).attr("data-bgcolor");
            $(this).css("background", bc)
        })
    })
});
function showTip() {
    $("#centertck").css("display", "block")
}
function closeTip() {
    $("#centertck").css("display", "none")
}
$(function() {
    setTimeout("showTip()", 8000)
});
$(document).ready(function(e) {
    $("#closeFixed").click(function() {
        closeTip()
    })
});
$(function() {
    $("#button-show-moreBase").click(function() {
        $("#moreBase").css("display", "block");
        $(this).css("display", "none");
        $("#button-close-moreBase").css("display", "block")
    });
    $("#button-close-moreBase").click(function() {
        $("#moreBase").css("display", "none");
        $(this).css("display", "none");
        $("#button-show-moreBase").css("display", "block")
    })
});
$(function() {
    $(window).scroll(function() {
        if ($(window).scrollTop() >= 100) {
            $(".button-float").fadeIn(300)
        } else {
            $(".button-float").fadeOut(300)
        }
    });
    $("#topButton").click(function() {
        $("html,body").animate({
                scrollTop: "0px"
            },
            800)
    })
});



