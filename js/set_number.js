$(function(){
	$("input").focus(function(){
		$(this).parent().parent().addClass("active");
	});
});

$(function(){
	$("input").blur(function(){
		if($(this).val() == "")
			$(this).parent().parent().removeClass("active");
	});
});