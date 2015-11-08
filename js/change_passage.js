$(function(){
	$(".article-row th:first-child, .article-row th:nth-child(2)").click(function(){
		var area = $(this).parent().children(".fa-stack");
		// alert(area);
		$(this).parent().toggleClass("article-row-selected");
		$(area).find(".fa-stack-1x").toggleClass("fa-circle");
		$(area).find(".fa-stack-1x").toggleClass("fa-check");
	});
});