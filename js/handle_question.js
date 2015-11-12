$(function(){
	$(".question_list li").click(function(){
		$(this).toggleClass("question_selected");
	});
});

$(function(){
	$(".choice_list .question_op a").click(function(){
		$("#right-bar-base").hide({duration: 600, queue: false});
		$("#select_rightbar").css('display','block');
		$("#select_rightbar").show({queue: false}).animate({
			"width": "940px"
		}, {duration: 600, queue: false});
	});
	$(".passage_div .question_op a").click(function(){
		$("#right-bar-base").hide({duration: 600, queue: false});
		$("#change_passage_div").css('display','block');
		$("#change_passage_div").fadeIn({queue: false}).animate({
			"width": "940px"
		}, {duration: 600, queue: false});
	});

	$(".replace_toggle").click(function(){
		$("#select_rightbar").hide({duration: 600, queue: false});
		$("#change_passage_div").hide({duration: 600, queue: false});
		$("#right-bar-base").show({duration: 600, queue: false});
		
	});
});

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

	$('#select_rightbar .choice').bind("click",function(){
		$(".choice").each(function(){
		    $(this).removeClass("replace_selected");
		});
		$(this).addClass("replace_selected");
		$(this).find("input[type=radio]").prop("checked", true);
	});

});
