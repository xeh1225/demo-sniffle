// JavaScript Document

//$(function(){
	var timer = null;
	$('.dropdown').find('a:eq(0)').each(function(){
		$(this).bind("mouseenter click",function(){
			$(this).closest('.dropdown').find('.sub_menu').removeClass('hide').addClass('show')
			   .end()
			   .siblings('.dropdown').find('.sub_menu').removeClass('show').addClass('hide'); 	
		});									
	 });		
	function hideFn() {
		timer = setTimeout(function(){
			$('.sub_menu').removeClass('show').addClass('hide'); 	 	
		}, 100);
	}
	$('.sub_menu, .dropdown a').mouseenter(function(){
		clearTimeout(timer);     // 取消隐藏
	});
	$('.sub_menu').mouseleave(function(){
		hideFn();
	});
	$('.dropdown').find('a:eq(0)').mouseleave(function(){
		hideFn();
	});
//});




























/*
$(function(){
	var timer = null;
	$('.dropdown, .dropdown a').bind("mouseover",function(){
		$(this).find('.sub_menu').removeClass('hide').addClass('show')
		.parent()
		.siblings().find('sub_menu').removeClass('show').addClass('hide'); 	
	});
	function hideFn() {
		timer = setTimeout(function(){
			$('.sub_menu').removeClass('show').addClass('hide'); 				
		}, 1);
	}
	$('.sub_menu').mouseover(function(){
		clearTimeout(timer);
	});
	$('.sub_menu').mouseout(function(){
		hideFn();
	});
	$('.dropdown a:eq(0)').mouseout(function(){
		hideFn();
	});
});
*/




/*$(function(){
	var timer = null;
	$('.dropdown, .dropdown a').bind("mouseover",function(){
		$('.sub_menu').removeClass('hide').addClass('show');
	});
	function hideFn() {
		timer = setTimeout(function(){
			$('.sub_menu').removeClass('show').addClass('hide'); 				
		}, 100);
	}
	$('.sub_menu').mouseover(function(){
		clearTimeout(timer);
	});
	$('.sub_menu').mouseout(function(){
		hideFn();
	});
	$('.dropdown a:eq(0)').mouseout(function(){
		hideFn();
	});
});*/


