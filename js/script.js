

//메뉴 클릭시 페이지 appear

$(document).ready(function () {
    var $nav_li = $('header #menu ul li'),
        $section = $('.page'),
        $container = $('#container'),
        $indi_li = $('.indi-item'),
        $indi_num = $('.indi-num li'),
        $indi_txt = $('.indi-txt li'),
        $indi_cate = $('.indi-cate li');
    
    var $works = $(".page#page2"),
        $works_wrap = $(".works-wrap"),
        $works_item = $(".works-wrap .work-item"),
        $works_indi = $(".works-indicator"),
        i = 0,
        $works_indi_num = $works_indi.find(".indi-num ul li"),
        $works_indi_txt = $works_indi.find(".indi-txt ul li"),
        $works_indi_cate = $works_indi.find(".indi-cate ul li"),
        $works_indi_item = $works_indi.find("ul li"),
        $works_img = $(".work-img"),
    
        works_bg = ["#a5cbde", "#ffa29c", "#717c8f", "#9f97ba", "#ffed9c"],
        $work_class = $(".work-item .work-class"),
        works_leng = $(".work-item").length,
        $alert_scroll = $('.icon-scroll'),
        block = false,
        con_left_1 = 0,
        con_left_2 = 0,
        window_width = $(window).width(),
        indi_right_2 = 0;
    
    console.log(window_width);
    
    if (window_width < 767) {
        con_left_1 = 3;
        con_left_2 = 88;
        indi_right_2 = -42;
        $alert_scroll.css('opacity', '0');
    } else if (window_width < 1200) {
        con_left_1 = 10;
        con_left_2 = 94;
        indi_right_2 = -35;
        $alert_scroll.css('opacity', '0');
    } else {
        con_left_1 = 10;
        con_left_2 = 97;
        indi_right_2 = -22;
    }
    

    
    /*i = [0,1,2];
    $('#menu').eq(i).click(function() {
        $('.page').animate('opacity':'0');
        $('.page').eq(i).animate('opacity':'1');
    });*/
    
    
    
    
     //$nav_li = $("header nav ul li"),
        //$container = $(".container"),
        //$container_wrap = $(".container .container-wrap"),
        //$section = $(".container .container-wrap .section"),
    
        //$logo = $(".logo"),
        
        
        //$window_bg = $(".container .main .window-bg-wrap img"),
        //$window = $(".container .main .window-wrap .window"),
        //$window_light = $(".container .main .window-wrap .window-light"),
        //$bg = $(".bg"),
        //$main_txt = $(".container .container-wrap .main-txt"),
        //$bottom_txt = $(".container .container-wrap .bottom-txt"),
        //time = false,
        


    $nav_li.click(function () {
        var current = $nav_li.index(this);
        //$profile_noise = $(".about .profile .profile-window img"),
       // $sns_wrap = $(".contact .contact-bottom .sns-wrap"),
        //$sns_message = $(".contact .contact-top .message")
    
    //$container.addClass("show");
    //$("body").addClass("narrow");

        $section.hide();
    
    
        if (current == 0) {
            $('.pageBox').addClass('pageWrap');
            $('.pageBox').removeClass('pageWrap-active');
        } else {
            $('.pageBox').addClass('pageWrap-active');
            $('.pageBox').removeClass('pageWrap');
        }

        $section.eq(current).show();
    
    //$nav_li.removeClass("active");
    //$(this).addClass("active");

    /* if (current == 0) {
        $works_item.hide();
        $works_item.eq(0).show();
        scroll(0);

    } else if (current == 1) {

        setTimeout(function () {
            $profile_noise.removeClass("active");
        }, 1000)
    } else if (current == 2) {

        setTimeout(function () {
            $sns_wrap.addClass("active");
            $sns_message.addClass("active");

        }, 100)
    }*/
    });
    
    
    //$indi_width_right = 100 - $('.indi-txt').width() - $('.indi-cate').width();
    //$indi_width = $('.indi-num').width();
    


    $('.works-indicator').mouseover(function () {
        
        $(this).css({'right' : '0%', 'transition': '1.5s'});
    });
    $('.works-indicator').mouseout(function () {
        
        $(this).css({'right' : indi_right_2 + '%', 'transition': '1.5s'});
    });
    
    $works_wrap.click(function() {
        $('.works-indicator').css({'right' : indi_right_2 + '%', 'transition' : '1.5s'});
    });
    
        
    
    $indi_num.mouseenter(function () {
        var current = $indi_num.index(this);
        //console.log(current);
        $indi_num.eq(current).addClass('hover');
        $indi_txt.eq(current).addClass('hover');
        $indi_cate.eq(current).addClass('hover');
    });
    $indi_num.mouseout(function () {
        var current = $indi_num.index(this);
        $indi_num.eq(current).removeClass('hover');
        $indi_txt.eq(current).removeClass('hover');
        $indi_cate.eq(current).removeClass('hover');
    });
    
    $indi_txt.mouseenter(function () {
        var current = $indi_txt.index(this);
        //console.log(current);
        $indi_num.eq(current).addClass('hover');
        $indi_txt.eq(current).addClass('hover');
        $indi_cate.eq(current).addClass('hover');
    });
    $indi_txt.mouseout(function () {
        var current = $indi_txt.index(this);
        $indi_num.eq(current).removeClass('hover');
        $indi_txt.eq(current).removeClass('hover');
        $indi_cate.eq(current).removeClass('hover');
    });
    
    $indi_cate.mouseenter(function () {
        var current = $indi_cate.index(this);
        //console.log(current);
        $indi_num.eq(current).addClass('hover');
        $indi_txt.eq(current).addClass('hover');
        $indi_cate.eq(current).addClass('hover');
    });
    $indi_cate.mouseout(function () {
        var current = $indi_cate.index(this);
        $indi_num.eq(current).removeClass('hover');
        $indi_txt.eq(current).removeClass('hover');
        $indi_cate.eq(current).removeClass('hover');
    });
    
    //works indicator click
    var $works_indi = $works_indi.find(".indi-item ul li"),
        indi_i;
    $works_indi.click(function () {
        var indi_i = $(this).index();
        
        scroll(indi_i);
        i = indi_i;
    })

    
    
    //works scroll
    
    function scroll(i) {
        $works_item.hide();
        $works_item.eq(i).show();
        $works_indi_num.removeClass("indi-active");
        $works_indi_num.eq(i).addClass("indi-active");
        $works_item.find("p.title").removeClass("active");
        $works_item.eq(i).find("p.title").addClass("active");
        $work_class.removeClass("active");
        $work_class.eq(i).addClass("active");
        $works_img.hide();
        //$works_item.eq(i).children($works_img).fadeIn(1000);
        $works.css("background-color", works_bg[i]);

    }
    
    $works.on("mousewheel DOMMousewheel", function (e) {
        var delta = e.originalEvent.wheelDelta;
        $alert_scroll.hide();
        if (block == true) {
            return;
        }
        setTimeout(function () {
            block = false;
        }, 1500);
        block = true;

        if (delta < 0) {
            i++;
            if (i > works_leng - 1) {
                i = 0;
            }
        } else if (delta > 0) {          
            i--;
            if (i < 0) {
                i = works_leng - 1;
            }
        } else {
            return;
        }
        scroll(i);
    });
    
    var con;
    for (con = 1; con < 4; con++) {
        $('.col3').eq(con - 1).find('a').css('background-image', 'url(./img/con' + con + '.png');
    }
    
    $('.contact').click(function () {
        
        if (i == 0) {
            $('#contactBox').animate({'left' : con_left_1 + '%'}, 500);
            
            i = 1;
        } else {
            $('#contactBox').animate({'left' : con_left_2 + '%'}, 500);
            i = 0;
        }
    });
    
});











