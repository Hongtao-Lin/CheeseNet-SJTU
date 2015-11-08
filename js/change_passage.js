$(function(){
	$(".fa-stack").click(function(){
		var tr = $(this).parent().parent();
		$(tr).toggleClass("article-row-selected");
		$(this).find(".fa-stack-1x").toggleClass("fa-circle");
		$(this).find(".fa-stack-1x").toggleClass("fa-check");
		$(tr).siblings().removeClass("article-row-selected");
		$(tr).siblings().find(".fa-stack-1x").removeClass("fa-check");
		$(tr).siblings().find(".fa-stack-1x").addClass("fa-circle");
	});
});

$(function(){
	$("[toggle=collapse]").click(function(){
		var target = $($(this).attr("target"));
		$(target).toggle(500);
	});
});