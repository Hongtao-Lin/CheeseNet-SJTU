$(document).ready(function() {

	$(".left-bar .scroll-container").rollbar({
		scroll: 'vertical',
		autoHide: true,
		sliderSize: "20%",
		pathPaddingTop: '62px',
		pathPaddingBottom: '-10px',
	});

	$(".right-bar .scroll-container").rollbar({
		scroll: 'vertical',
		autoHide: true,
		sliderSize: "20%",
		pathPaddingTop: '10px',
		pathPaddingBottom: '-10px',
	});

	/*$(function(){
		$(".article-row th:first-child, .article-row th:nth-child(2)").click(function(){
			var area = $(this).parent().children(".fa-stack");
			// alert(area);
			$(this).parent().toggleClass("article-row-selected");
			$(area).find(".fa-stack-1x").toggleClass("fa-circle");
			$(area).find(".fa-stack-1x").toggleClass("fa-check");

			//$(".left-bar").load("teacher_accessment_0.html")

		});
	});*/

	$(function(){
		$(".question_list li").click(function(){
			$(this).toggleClass("question_selected");
		});
	});

	$(function(){
		$(".question_op a").click(function(){
			$("#right-bar-base").css('display','none');
			$("#select_rightbar").css('width','0px');
			$("#select_rightbar").css('display','block');
			$("#select_rightbar").animate({width:"940px"});
		});
		$(".replace_toggle").click(function(){
			$("#select_rightbar").animate({width:"10px"},400);
			setTimeout(function(){
				$("#select_rightbar").css('display','none');
				$("#right-bar-base").css('display','block');
			},400);
			
		});
	});

});
