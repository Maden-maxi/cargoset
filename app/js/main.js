$(function () {
	$('#myTabs a').click(function (e) {
	  e.preventDefault()
	  $(this).tab('show')
	});
	$('select#phones').styler({
		onFormStyled:function () {
			$('.jq-selectbox__select').css({
				background: 'transparent',
				border: 'none',
				boxShadow: 'none',
				padding: '5px 30px 0px 0px'
			});
			$('.jq-selectbox__trigger').css({
				border: 'none',
				background: 'transparent'
			});
			$('.jq-selectbox__trigger-arrow').css({
				borderTop: '5px solid #00f'
			});
			$('.jq-selectbox__select-text').css({
				font: '19px "Roboto-Bold.ttf", sans-serif',
				width: '152px',
				textAlign: 'center'
			});
		}
	});
	$('select#weight').styler({
		onFormStyled: function () {
			$('#weight-styler .jq-selectbox__select-text').css({
				width: '66px',
				paddingTop: '3px'
			});
			$('#weight-styler .jq-selectbox__trigger-arrow').addClass('glyphicon glyphicon-chevron-down').css({
				border: 'none',
				top: '10px',
				right: '22.5px'
			});
		}
		
	});
	$('#length').styler({
		onFormStyled: function () {
			$('.length .jq-number').css({
				padding: '0 38px'
			});
			$('.length jq-number__spin plus').css({
				height: '36px'
			});
		}
	});
	$('#length').change(function(event) {
		console.log($(this).val());
	});
	var $range = $("#range"),
		$result = $("#length");

	var track = function (data) {
		$result.val( data.from);
	};
	$("#range").ionRangeSlider({
		hide_min_max: true,
		keyboard: true,
		type: 'single',
		min: 10,
		max: 10000,
		from: 2000,
		step: 10,
		prefix: "",
		postfix: "мм",
		grid: true,
		grid_num: 9,
		grid_margin: true,
		onStart: track,
		onChange: track,
		onFinish: track,
		onUpdate: track
	});
	//Плавный скролл по якорям
	$('a[href^="#"]').click(function(){
		var elementClick = $(this).attr("href"),
			destination = $(elementClick).offset().top;
			$('html, body').animate( {scrollTop: destination }, 1000 );
		return false;
	});
	
});
/////////////////////slider
(function($) {
    $(function() {
        var jcarousel = $('.jcarousel');

        jcarousel
            .on('jcarousel:reload jcarousel:create', function () {
                var carousel = $(this),
                    width = carousel.innerWidth();
                    //console.log(width);

                if (width >= 1024) {
                    width = width / 6;
                } else if (width >= 350) {
                    width = width / 4;
                }

                carousel.jcarousel('items').css('width', Math.ceil(width) + 'px');
            })
            .jcarousel({
                
            });

        $('.jcarousel-control-prev')
            .on('jcarouselcontrol:active', function() {
                $(this).removeClass('inactive');
            })
            .on('jcarouselcontrol:inactive', function() {
                $(this).addClass('inactive');
            })
            .jcarouselControl({
                target: '-=1'
            });

        $('.jcarousel-control-next')
            .on('jcarouselcontrol:active', function() {
                $(this).removeClass('inactive');
            })
            .on('jcarouselcontrol:inactive', function() {
                $(this).addClass('inactive');
            })
            .jcarouselControl({
                target: '+=1'
            });
    });
})(jQuery);
