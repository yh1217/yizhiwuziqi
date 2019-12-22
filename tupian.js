$(document).ready(function(){
    var slider=$(".slider"),
    ul=slider.find("ul"),
    showNumber=slider.find(".btn span"),
    oneWidth=slider.find("ul li").eq(0).width();
    var timer=null;
    var iNow=0;//正在展示的图片索引值
    
    showNumber.on("click",function(){
        $(this).addClass("active").siblings().removeClass("active");
        var index=$(this).index();
        iNow=index;
        ul.animate({
            "left":-oneWidth*iNow,
        })
    });
    
    timer=setInterval(function(){
        iNow++;
        if(iNow>showNumber.length-1){
            iNow=0;
        }
        showNumber.eq(iNow).trigger("click");
    },2000);
})
