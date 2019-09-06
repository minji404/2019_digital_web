$(document).ready(function(){
    
    $(".nav>ul>li").mouseover(function(){
       $(this).find(".submenu").stop().slideDown(); 
    });
        $(".nav>ul>li").mouseleave(function(){
       $(this).find(".submenu").stop().slideUp(); 
    });
    
//    fade
//    $("slideList").children("div:gt(0)").hide();
    var c=0;
    setInterval(function(){
        var next=(c+1)%3;
        $(".slideList").find("div").eq(c).fadeOut();
        $(".slideList").find("div").eq(next).fadeIn();
        c=next;
    },3000);
//    fade
//    updown
//    var c=0;
//    setInterval(function(){
//        if(c<2){
//            c++;
//        }else{
//            c=0;
//        }
//        var i=c*(-350)+"px";
//        $(".slideList").animate({top:i})
//    },3000);
    
    var tabBtn =$(".tab-btn>ul>li");
    var tabCont = $(".tab-cont>ul");
    
    tabCont.hide().eq(0).show();
    tabBtn.click(function(e){
       e.preventDefault;
        var target=$(this);
        var index = target.index();
        
        tabBtn.removeClass("active");
        target.addClass("active");
        tabCont.css("display","none");
        tabCont.eq(index).css("display","block");
    });
  
    $(".mo").click(function(e){
        $(".layer").show();
    });
        $(".layer>a").click(function(e){
           $(".layer").hide(); 
        });
    
});