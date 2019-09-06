$(document).ready(function(){
    $(".nav>ul>li").mouseover(function(){
       $(".submenu").stop().slideDown(); 
       $(".backmenu").stop().slideDown(); 
    });
     $(".nav>ul>li").mouseleave(function(){
       $(".submenu").stop().slideUp(); 
       $(".backmenu").stop().slideUp(); 
    });
    
    var cdex=0;
    var i=$(".sliderImg").length;
    var p;
    setInterval(function(){
        if(cdex<2){
            cdex++;
        }else{
            cdex=0;
        }
        p=cdex*(-1200)+"px";
        $(".slideList").animate({left:p});
    },3000);
    
    //tapmenu
    var tabBtn =$(".tab-btn>ul>li");
    var tabCont =$(".tab-cont>div");
    
    tabCont.hide().eq(0).show();
    
    tabBtn.click(function(e){
        e.preventDefault();
        var target=$(this);
        var index = target.index();
        tabBtn.removeClass("active");
        target.addClass("active");
        tabCont.css("display","none");
        tabCont.eq(index).css("display","block");
    });
    $(".mo").click(function(e){
        e.preventDefault();
        $(".layer").show();
        $(".black").show();
    });
    $(".layer .close").click(function(e){
       e.preventDefault();
        $(".layer").hide();
        $(".black").hide();
    });
   
});