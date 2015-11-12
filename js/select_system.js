$(function(){
	$("img").click(function(){
		var src = $(this).attr("src");
		if(src.match("grey")){
			$(this).attr("src",src.replace(/grey/,"green"));
		}else{
			$(this).attr("src",src.replace(/green/,"grey"));
		}
	});
});