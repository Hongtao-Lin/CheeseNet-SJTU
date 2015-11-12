$(function(){
	$("#change_passage_div .article-row th:first-child, .article-row th:nth-child(2)").click(function(){
		var circle = $(this).parent().find("th:first-child");
		var area = $(circle).children(".fa-stack").children(".fa-stack-1x");
		var tr = $(this).parent();

		$(tr).toggleClass("article-row-selected");
		$(area).toggleClass("fa-check");
		$(area).toggleClass("fa-circle");
		$(tr).siblings().removeClass("article-row-selected");
		$(tr).siblings().find(".fa-stack-1x").removeClass("fa-check");
		$(tr).siblings().find(".fa-stack-1x").addClass("fa-circle");
	});

	$("#change_passage_div .article-row th:first-child, .article-row th:nth-child(2)").mouseenter(function(){
		$(this).parent().find("th").css("background-color", "rgba(127, 230, 203, 0.5)");
	}).mouseleave(function() {
		$(this).parent().find("th").css("background-color", "#F2F2F2");
	});

});

$(function(){
	$("#change_passage_div [toggle=collapse]").click(function(){
		var target = $($(this).attr("target"));
		$(target).toggle(500);
		// alert($(this).text());
		$(this).text($(this).text() == "详情" ? "收起" : "详情")
	});
});