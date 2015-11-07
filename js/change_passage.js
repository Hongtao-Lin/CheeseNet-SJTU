$(function(){
	$(".fa-stack").click(function(){
		var tr = $(this).parent().parent();
		$(tr).toggleClass("article-row-selected");
		$(this).find(".fa-stack-1x").toggleClass("fa-circle");
		$(this).find(".fa-stack-1x").toggleClass("fa-check");
	});
});