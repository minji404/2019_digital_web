$(document).ready(function(){
            $(".mainmenu>li").mouseover(function(){
            $(".submenu").stop().slideDown();
            $(".subback").stop().slideDown();
        });
            $(".mainmenu>li").mouseout(function(){
            $(".submenu").stop().slideUp();
            $(".subback").stop().slideUp();
    }) ;
            
        });