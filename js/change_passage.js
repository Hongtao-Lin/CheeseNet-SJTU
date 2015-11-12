$(function(){
	$(".article-row th:first-child").click(function(){
		var area = $(this).children(".fa-stack").children(".fa-stack-1x");
		var tr = $(this).parent();

		$(this).parent().toggleClass("article-row-selected");
		$(area).toggleClass("fa-check");
		$(area).toggleClass("fa-circle");
		$(tr).siblings().removeClass("article-row-selected");
		$(tr).siblings().find(".fa-stack-1x").removeClass("fa-check");
		$(tr).siblings().find(".fa-stack-1x").addClass("fa-circle");
	});
});

$(function(){
	$("[toggle=collapse]").click(function(){
		var target = $($(this).attr("target"));
		$(target).toggle(500);
		// alert($(this).text());
		$(this).text($(this).text() == "详情" ? "收起" : "详情")
	});
});