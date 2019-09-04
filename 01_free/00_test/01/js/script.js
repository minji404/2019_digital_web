$(document).ready(function(){
    $(".nav>ul>li").mouseover(function(){
    $(this).children(".sub").stop().slideDown();
        });
    $(".nav>ul>li").mouseleave(function(){
    $(this).children(".sub").stop().slideUp();
        });
    
    var count=$(".slideImg").length;
    var cdex=0;
    var sposi;
    
    setInterval(function(){
        if(cdex < count -1)
            {cdex++;}
        else{cdex=0;}
        sposi=cdex*(-960)+"px";
        $(".slidewrap").animate({left:sposi})
    },2000);
    
    
});
var win;
     function winOpen(){
         win = window.open('contact.html','child','toolbar = no,location = no, status=no, menubar = no,resizable=no,scrollbars=no,width:500, height =300')
     };
