$(function(){
	//tab菜单切换
	$(".tab-item").on("click",function(){
		var _index= parseInt($(this).attr("data-index"));
		console.log(_index);
		var _text = $(this).find("span").html();
		
		
		$(this).addClass("borChoose").siblings(".tab-item")
			.removeClass("borChoose");
		$(".carousel-defualt").css("display","none");
		$(".carousel-content").addClass("active");
		$(".MVA-z-main").find(".carousel").eq(_index)
		.addClass("active").siblings(".carousel").removeClass("active")
		
		$(".MVA-choose-main .MVA-choose-left").find(".child-title").remove().end().append($('<span class="child-title active">'+_text+'</span>'))
	})
	
	//点击回到首页
	$(".parent-title").on("click",function(){
		$(this).siblings(".child-title").removeClass("active").remove();
		$(".carousel-defualt").css("display","block");
		$(".carousel").removeClass("active");
		$(".carousel-content").removeClass("active");
		$(".MVA-choose-right").find(".tab-item")
			.eq(0).addClass("borChoose")
			.siblings(".tab-item").removeClass("borChoose")
		
	})
	
});
