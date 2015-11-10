$(function(){
	$("div.hw-compulsory").toggle();
	$(".hw-class span.fa-stack").click(function(){
		$(this).parent().siblings().toggle(100);
		$(this).parent().toggleClass("class-selected");
		$(this).children(".fa-stack-1x").toggleClass("fa-square");
		$(this).children(".fa-stack-1x").toggleClass("fa-check");
	});
});

$(function(){
	$("div.random").toggle();
	$("div.single-commit").toggle();
	$("span.other-toggle").click(function(){
		$(this).children("i.fa").toggleClass("fa-angle-double-right");
		$(this).children("i.fa").toggleClass("fa-angle-double-down");
		$("div.random").toggle(100);
		$("div.single-commit").toggle(100);
	});
});