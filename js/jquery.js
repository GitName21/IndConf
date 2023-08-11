$(document).ready(function(){
	
	// 导航栏效果
	$('.nav li').click(function(){
		$(this).addClass('nav-current-pc').siblings().removeClass('nav-current-pc');
		var boxTOP = $('.main-process').offset().left;
		var boxHeight = $('.main-process').outerHeight();
		$("html,body").finish().animate({"scrollTop":boxTOP+boxHeight},900);
	})
	$('.mobile-nav-btn').click(function(){
		var btnValue = $('.nav-wrap').css('right');
		if(btnValue == '0px'){
			$('.nav-wrap').css({'right':'-100%'})
		}else{
			$('.nav-wrap').css({'right':'0px'})
		}
	})
});