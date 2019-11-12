$(document).ready(function(){
    
    //소품점 높이 조절
    var height=$(".tab-button-list>ul").height();
    console.log("소품점 버튼 height:"+height);
    
    function newHeight(){
//        var width=$(".tab-content").width();
//        console.log("소품점 컨텐츠 width:"+width);
        var height=$(".tab-button-list>ul").height();
        
        $(".tab-content").css({
        height:height
        });
    };
    
    newHeight();
    
    $(window).resize(function(){
        newHeight();
    });
    
    //소품점 탭
    
    $(".tab-button-list>ul>li>a").click(function(){
        $(".tab-content").hide();
        $(this.hash).show();
        $(".tab-button-list>ul>li>a").removeClass("active");
        $(this).addClass("active");
        
        return false;
    }).filter(".first").click();
    
    //이벤트 탭
    $(".tab-button-list2>ul>li>a").click(function(){
        $(".tab-content2").hide();
        $(this.hash).show();
        $(".tab-button-list2>ul>li>a").removeClass("active2");
        $(this).addClass("active2");
        
        return false;
    }).filter(".first").click();
    
    //모바일
    $(".m-open").click(function(){
        $(".m-nav-box").stop().animate({
            left:0,
        });
        $(".dimmed").css({
            opacity:1,
            display:"block"
        })
    });
    $(".m-close").click(function(){
        $(".m-nav-box").stop().animate({
            left:"-100%",
        });
         $(".dimmed").css({
            opacity:0,
            display:"none"
        })
    });
    
    $(".m-gnav>li").click(function(){
        if($(this).children(".m-drop").is(":hidden")){
            $(".m-drop").slideUp();
            $(".m-drop",this).slideDown(); 
            //>같은 의미 $(this).children().slideDown();
        }else{
            $(".m-drop").slideUp();
        }
    });


    //애니메이션
    var moveTextTop=$(".move").offset().top;
    console.log("무브 텍스트 탑:"+moveTextTop);
    
    $(window).scroll(function(){
        var winScroll=$(window).scrollTop();
        if(moveTextTop<winScroll+500){
            $(".move").stop().animate({
                left:0,
            });
            $(".move").delay(200).animate({
                left:0,  
                opacity:1,         
            });
        }
    });
    
    //애니메이션2

    var iconTop=$(".icon").offset().top;
    console.log("icon 탑:"+iconTop);
    
    $(window).scroll(function(){
        var winScroll=$(window).scrollTop();
        if(iconTop<winScroll+600){
            $(".icon").stop().animate({
                right:0,
                opacity:1,
            });
            $(".icon2").delay(200).animate({
                right:0,  
                opacity:1,         
            });
        }
    });
    

});//끝
