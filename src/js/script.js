$(function() {
    
    if($(window).width()>= 1024){
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
                    $(window).on('mousemove',function (e) {
                        var mouseX = (e.pageX),
                            mouseY = (e.pageY),
                            X = (window.innerWidth / 2 ) - mouseX,
                            Y = (window.innerHeight / 2 ) - mouseY;                         
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
    $('.form__input-phone').inputmask("+375 (99) 999 99 99");   
    $('.hero__form').on('submit',function(e){
        e.preventDefault();
        var form = $(this),
            formData=form.serialize();              
        if($(this).find('input[name=phone], input[name=name]').val()){
            $.ajax({
                url: '../thank_you/index.php',
                type: 'POST',           
                data: formData,
                success: function(data) {               
                    data = jQuery.parseJSON(data);                          
                    if (data.status) {
                        yaCounter44208574.reachGoal("zayavka")                        
                    }                              
                }
            })  
        }
    });  
});