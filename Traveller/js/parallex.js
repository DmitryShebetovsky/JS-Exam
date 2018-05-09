$(document).ready(function(){
    $(window).scroll(function(){
        
        var topScroll = $(this).scrollTop();
        if(topScroll <= $(window).height()){
            $("#header-back").css({'right' : '-'+topScroll/10+'px', 'bottom' : '-'+ topScroll/7 +'px' });

            $("#header-front").css({'left' : '-'+topScroll/10+'px', 'bottom' : '-'+ topScroll/7 +'px' });

            $("#header-title").css({'top' : 30+(topScroll/10) + '%',
                                    'letter-spacing' : (topScroll/40)
                                   });
        }
        else
        if(topScroll > $(window).height() -400 && topScroll <= 1200){
              $("#big-title").css({ 'top' : '0px', 'opacity' : '1' });
            setTimeout(function(){
                $("#section-1-p").css({ 'color' : 'rgba(68, 108, 95, 1)'});
                
                $("#section-1-image").css({
                    'opacity' : '1',
                    'background-position' : 'right'
                });
            },500);
            
        }
        else
        /* animating viewed-items-section */
        if(topScroll > 1200 && topScroll <= 2150){
            $("#viewed-items-title.parallax").css({ 'top' : '0', 'opacity' : '1' });
            $(".viewed-item.parallax").css({
                'top' : '0',
                'opacity' : '1'
            });
            $("#viewed-items-title.parallax").removeClass("parallax");
            $(".viewed-item.parallax").removeClass("parallax");
            
            $(".viewed-item").css({ 'transition': 'all .5s'});
        }
        
        else
        /* animating showcase section  */
        if(topScroll > 2150 && topScroll <= 3300){
            $(".showcase-item").css({   'top' : '0px',
                                        'opacity' : '1'
                                    });
            setTimeout(function(){
                $(".showcase-item").css({ 'transition' : '1s' });
            }, 3000);

            /* animating showcase-item */

                $("#showcase-lock").on('mousemove', function(e){
                    //animating for the Y axis
                    if(e.pageY - $("#showcase-lock").offset().top <= $("#showcase-lock").innerHeight()/2){
                        $(".showcase-item.back").css({ 'top' : '-25px' });
                        $(".showcase-item.med").css({ 'top' : '-40px' });
                        $(".showcase-item.front").css({ 'top' : '-65px' });
                    }else{
                        $(".showcase-item.back").css({ 'top' : '25px' });
                        $(".showcase-item.med").css({ 'top' : '40px' });
                        $(".showcase-item.front").css({ 'top' : '65px' });
                    }

                    //animating for the X axis
                    if(e.pageX - $("#showcase-lock").offset().left <= $("#showcase-lock").innerWidth()/2){
                        $(".showcase-item.back").css({ 'left' : '-25px' });
                        $(".showcase-item.med").css({ 'left' : '-40px' });
                        $(".showcase-item.front").css({ 'left' : '-65px' });
                    }else{
                        $(".showcase-item.back").css({ 'left' : '25px' });
                        $(".showcase-item.med").css({ 'left' : '40px' });
                        $(".showcase-item.front").css({ 'left' : '65px' });
                    }
                });

        }



    });

    /* pop-up animation for viewed-items-section */

    $(".viewed-items-button").on("click", function(){

        // put selected item in $curItem
        curItem = $(this).parent().parent();

        //hiding all the items
        $(".viewed-item").each(function(){
               $(this).css({ 'display' : 'none' });
        });

        //reviewing the selected item and some positioning
        curItem.css({    'display' : 'inline-block',
                        'width' : '500px',
                        'text-align' : 'left'
                                     });

        //resizing and repositioning item image
        curItem.children(".viewed-item-img").css({  'width' : '200px',
                                                    'display' : 'inline-block',
                                                    'float' : 'left'
                                                 });

        //hiding short description div
        curItem.children(".viewed-item-description").css({ 'display' : 'none' });

        //viewing long description div
        curItem.children(".viewed-item-see-more").css({ 'display' : 'inline-block'});

        //viewing close button
        $("#viewed-items-close").css({ 'display' : 'block' });

        //changing section background
        $("#viewed-items-section").css({ 'background' : '#eee' });
    });

    /*  closing pop up animation */

    $("#viewed-items-close").click(function(){

        $("#viewed-items-close").css({ 'display' : 'none' });

        //hiding long description div
        curItem.children(".viewed-item-see-more").css({ 'display' : 'none'});

        //hiding short description div
        curItem.children(".viewed-item-description").css({ 'display' : 'block' });

        //resizing and repositioning item image
        curItem.children(".viewed-item-img").css({  'width' : '100%',
                                                    'display' : 'block',
                                                    'clear' : 'both'
                                                 });

        curItem.animate({   display: 'inline-block',
                            width : '200px',
                            textAlign : 'center'
                                     }, "fast",function(){
            setTimeout(function(){
                $(".viewed-item").each(function(){
               $(this).css({ 'display' : 'inline-block' });
            });
            }, 200);
        });

        $("#viewed-items-section").css({ 'background' : 'white' });

    });

    /* testimonios script */

    $(".testimonios-nav-item").click(function(){
        var index = $(this).index()+1;
        var parent = $(this).parent();

        if( !$(this).hasClass("selected") ){
            $(".testimonios-nav-item").each(function(){
               $(this).removeClass('selected');
            });
            $(this).addClass('selected');
            changeTestimonios(index);
        }
    });

    function changeTestimonios(faceI){

        $("#testimonios-face").css({
            'bottom' : '-400px',
            'background-image' : 'url("./images/testimonios/555.png")'
        });

        setTimeout(function(){
            $("#testimonios-face").css({
                'bottom' : '-50px'
            });
        }, 100);

        $("#testimonios-description").fadeTo(300, 0.3, function(){
           $("#testimonios-description").load('./testimonios/' + faceI + '-desc.txt');
            $("#testimonios-description").fadeTo(300, 1);
        });

    }

});
