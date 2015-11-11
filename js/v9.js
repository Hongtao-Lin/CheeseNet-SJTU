$(document).ready(function() {
	$('.select_radio').bind("click",function(){
		//alert(123);
		$('.choice').each(function(){
		    $(this).removeClass("replace_selected");
		});
		$(this).parent().addClass("replace_selected");
	});
});
