$(function() {
    
    if($(window).width()>= 800){
        var parallax = (function(){
            var paralaxContainer = $('.parallax'),
                layers = paralaxContainer.find('.parallax__layer');
            layers.each(function (index, value) {
                var bottomPosition = ((window.innerHeight / 2) * (index / 100));
                $(value).css({
                    'bottom': '-' + bottomPosition + 'px'
                });
            });
            return  {
                init: function(){
                    console.log('init');
                    console.log('')
                    $(window).on('mousemove',function (e) {
                        var mouseX = (e.pageX),
                            mouseY = (e.pageY),
                            X = (window.innerWidth / 2 ) - mouseX,
                            Y = (window.innerHeight / 2 ) - mouseY;
                       console.log(mouseX , mouseY)         
                        layers.each(function (index, value){
                            var widthPosition = X * (index / 120 ),
                                heightPosition = Y * (index / 120 ),
                                bottomPosition = ((window.innerHeight / 2) * (index / 100));
                            $(value).css({
                                'bottom' : '-' + bottomPosition +'px',
                                'transform': 'translate3d(' + widthPosition + 'px, ' + heightPosition + 'px, 0)'
                            });
                        });
                    });
                }
            }
        }());
        parallax.init();
    }
});