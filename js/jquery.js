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
});