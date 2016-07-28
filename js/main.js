jQuery(document).ready(function($) {

    $('#fullpage').fullpage(
        {
            css3: true,
            navigationPosition: 'left',
            navigation: true,
            responsiveWidth: 980,
            responsiveHeight: 750,
            onLeave: function(index, nextIndex, direction) {
                setTimeout(
                    function() {
                        if (nextIndex == 2) {
                            $('.ico.thunder').addClass('bounceInLeft').removeClass('bounceOutLeft');
                            $('.ico.mobile').addClass('bounceInRight').removeClass('bounceOutRight');
                        }
                    },
                    100
                );
                if (index == 2) {
                    $('.ico.thunder').addClass('bounceOutLeft').removeClass('bounceInLeft');
                    $('.ico.mobile').addClass('bounceOutRight').removeClass('bounceInRight');
                }
            },
            afterLoad: function(){
                $('img.d').plaxify({"xRange": 40, "yRange": 40});
                $('img.r').plaxify({"xRange": 20, "yRange": 20});
                $('img.u').plaxify({"xRange": 10, "yRange": 10, "invert": true});
                $('img.p').plaxify({"xRange": 40, "yRange": 40, "invert": true});
                $('img.al').plaxify({"xRange": 30, "yRange": 30});
                $.plax.enable();
            }
        }
    );

    $('.arrow.flash').css('cursor', 'pointer').bind(
        'click',
        function() {
            $.fn.fullpage.moveSectionDown();
        }
    );

});
