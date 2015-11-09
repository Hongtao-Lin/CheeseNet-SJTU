$(function(){
	$(".article-row th:first-child, .article-row th:nth-child(2)").click(function(){
		var area = $(this).parent().children(".fa-stack");
		// var tr = $(this).parent();
		// alert(tr);

		$(this).parent().toggleClass("article-row-selected");
		$(area).toggleClass(".fa-check");
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