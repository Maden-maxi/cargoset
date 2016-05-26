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
				padding: '5px 30px 0px 10px'
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
				width: '137px'
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
			$('.nubmer-minus-plus .jq-number').css({
				padding: '0 38px'
			});
		}
	});

});