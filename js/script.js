const mq = window.matchMedia( "(max-width: 750px)" );

$(document).ready(function(){
    
    
   
        /* Scroll down buttons */
        $('.js-scroll-to-about').click(function(){
            var elm = document.getElementById('navi-toggle');
            elm.click();
            if (mq.matches) {
            $('html, body').animate({scrollTop: $('.js-section-about').offset().top+140}, 1500);
            } else {
                $('html, body').animate({scrollTop: $('.js-section-about').offset().top}, 1500);
            }
        })

        $('.js-scroll-to-features').click(function(){
            var elm = document.getElementById('navi-toggle');
            elm.click();
            if (mq.matches) {
                $('html, body').animate({scrollTop: $('.js-section-features').offset().top+180}, 1500);
                } else {
                    $('html, body').animate({scrollTop: $('.js-section-features').offset().top-30}, 1500);
                }
        });

        $('.js-scroll-to-tour').click(function(){
            var elm = document.getElementById('navi-toggle');
            elm.click();
            if (mq.matches) {
                $('html, body').animate({scrollTop: $('.js-section-tour').offset().top+140}, 1500);
                } else {
                    $('html, body').animate({scrollTop: $('.js-section-tour').offset().top+180}, 1500);
                }
        })

        $('.js-scroll-to-story').click(function(){
            var elm = document.getElementById('navi-toggle');
            elm.click();
            if (mq.matches) {
                $('html, body').animate({scrollTop: $('.js-section-story').offset().top-150}, 1500);
                } else {
                    $('html, body').animate({scrollTop: $('.js-section-story').offset().top-170}, 1500);
                }
        })

        $('.js-scroll-to-book').click(function(){
            var elm = document.getElementById('navi-toggle');
            elm.click();
            if (mq.matches) {
                $('html, body').animate({scrollTop: $('.js-section-book').offset().top+140}, 1500);
                } else {
                    $('html, body').animate({scrollTop: $('.js-section-book').offset().top+120}, 1500);
                }
        })
    
    
    });