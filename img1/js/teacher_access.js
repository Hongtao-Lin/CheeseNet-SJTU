$(document).ready(function() {

	$(".unit_hw li").click(function() {
		var check = $(this).find(".fa-stack").first();
		if( $(check).find(".fa-check").length ){
			$(check).find(".fa-check").removeClass("fa-check");
		}
		else{
			$(check).find(".fa-stack-1x").addClass("fa-check");
		}
	});

	$(".btn-book").click(function() {
		console.log($(this).siblings());
		$(this).siblings().removeClass("btn-info btn-default");
		$(this).siblings().addClass("btn-default");
		$(this).toggleClass("btn-default");
		$(this).toggleClass("btn-info");
	});


});

