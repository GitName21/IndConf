$(document).ready(function(){
	
	var winScroll = $(window).scrollTop();	//获取屏幕滚动距离
	var winHeight = $(window).height();		//获取窗口可视高度
	// 导航栏点击滚动效果
	$('.nav li').click(function(){
		// $(this).addClass('nav-current-pc').siblings().removeClass('nav-current-pc');
		
		var index = $(this).index(); //获取当前点击元素下标
		var contBox = $('.main').eq(index);
		var boxTop = contBox.offset().top; //获取元素距离顶部距离
		$("html,body").finish().animate({"scrollTop":boxTop-30},900);	//设置滚动
	})
	// 移动端点击菜单展开效果
	$('.mobile-nav-btn').click(function(){
		var btnValue = $('.nav-wrap').css('right');
		if(btnValue == '0px'){
			$('.nav-wrap').css({'right':'-100%'})
		}else{
			$('.nav-wrap').css({'right':'0px'})
		}
	})
	// 滚动菜单效果
	$(document).scroll(function(){
		var winScroll = $(window).scrollTop();	//获取屏幕滚动距离
		
		var array=new Array();//声明一个新的数组
		var list1=$(".main").each(function (index,element) {//遍历每个对象
		array.push($(this).offset().top);//往数组中存入值
		});
		var mainLenth = ($(".main").length);	//获取内容块数量
		
		for (var i=0;i<=mainLenth;i++)
		{
		   if(winScroll >= array[i]-30 && winScroll < array[i]){
				$('.nav li').eq(i).addClass('nav-current-pc').siblings().removeClass('nav-current-pc');
		   }
		}
	})
	
	$(document).on("mousewheel DOMMouseScroll", function (e) {
		// 判断鼠标上划下滑
		var delta = (e.originalEvent.wheelDelta && (e.originalEvent.wheelDelta > 0 ? 1 : -1)) ||  // chrome & ie
				(e.originalEvent.detail && (e.originalEvent.detail > 0 ? -1 : 1));              // firefox
		var winScroll = $(window).scrollTop();	//获取屏幕滚动距离
		var winWidth = $(window).width();
		if(winWidth > 767){	//移动端不执行
			if (delta > 0) {
				// 向上滚
				// console.log("wheelup");
				
				if(winScroll == 0){
					$('.nav-wrap').css({'position':'static'})
				}else{
					$('.nav-wrap').slideDown(500)
					$('.nav-wrap').css({'position':'fixed','z-index':'99'})
				}
			} else if (delta < 0) {
				// 向下滚
				// console.log("wheeldown");
				$('.nav-wrap').slideUp(500);
				$('.nav-wrap').css({'position':'static'});
			}
		}
	});
	
	// 回滚顶部
	$('.scroll-top').click(function(){
		$("html,body").finish().animate({"scrollTop":"0px"},900);
	});
	
	// 移动端报名按钮
	$('.mobile-register').click(function(){
		$('.mobile-register-menu').fadeIn(300);
		$('.mobile-register-menu').css({'display':'flex'});
		$('.mobile-register').addClass('register-animate');
		
		var top = $(document).scrollTop();
		// 禁止窗口滚动
		$(document).on('scroll.unable',function (e) {
			$(document).scrollTop(top);
		})
	})
	$('.mobile-register-close').click(function(){
		$('.mobile-register-menu').fadeOut(300);
		$('.mobile-register').removeClass('register-animate');
		// 关闭遮罩是允许窗口滚动
		$(document).unbind("scroll.unable");
	})
	
});