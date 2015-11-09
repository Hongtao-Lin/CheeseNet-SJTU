$(function(){
	$(".article-row th:first-child, .article-row th:nth-child(2)").click(function(){
		var area = $(this).parent().children(".fa-stack");
		// alert(area);
		$(this).parent().toggleClass("article-row-selected");
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