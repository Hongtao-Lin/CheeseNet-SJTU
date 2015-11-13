$(function(){
	$(".question_list li").click(function(){
		$(this).toggleClass("question_selected");
	});
});

$(function(){
	$(".choice_list .question_op a").click(function(){
		//$("#right-bar-base").hide({duration: 600, queue: false});
		$("#replace_toggle").css("display","block");
		$("#select_rightbar").css('width','0');
		$("#select_rightbar").css('position','absolute');
		$("#select_rightbar").css('z-index','1000');
		$("#select_rightbar").css('display','block');
		$("#select_rightbar").css('left','1220px');
		$("#select_rightbar").animate({
			"left": "280px"
		}, {duration: 600, queue: false});
		$("#select_rightbar").animate({
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
		$(".replace_toggle").css("display","none");
		$("#select_rightbar").animate({
			"left": "1220px"
		}, {duration: 600, queue: false});
		$("#select_rightbar").animate({
			"width": "0px"
		}, {duration: 600, queue: false});
		$("#change_passage_div").hide({duration: 600, queue: false});
		$(".replace_toggle").hide({duration:0,queue:false});
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
		$(this).text($(this).text() == "详情" ? "收起" : "详情")
	});
});

$(function(){
	$("#assign-panel div.hw-compulsory").toggle();
	$("#assign-panel .hw-class span.fa-stack").click(function(){
		$(this).parent().siblings().toggle(100);
		$(this).parent().toggleClass("class-selected");
		$(this).children(".fa-stack-1x").toggleClass("fa-square");
		$(this).children(".fa-stack-1x").toggleClass("fa-check");
	});
});

$(function(){
	$("#assign-panel div.random").toggle();
	$("#assign-panel div.single-commit").toggle();
	$("#assign-panel span.other-toggle").click(function(){
		$(this).children("i.fa").toggleClass("fa-angle-double-right");
		$(this).children("i.fa").toggleClass("fa-angle-double-down");
		$("#assign-panel div.random").toggle(100);
		$("#assign-panel div.single-commit").toggle(100);
	});
});

$(function(){
	$("#assign-panel .hw-compulsory span").click(function(){
		$(this).children(".fa-stack-1x").toggleClass("fa-square");
		$(this).children(".fa-stack-1x").toggleClass("fa-check");
	});
});

$(function(){
	$("#select-system img").click(function(){
		var src = $(this).attr("src");
		if(src.match("grey")){
			$(this).attr("src",src.replace(/grey/,"green"));
		}else{
			$(this).attr("src",src.replace(/green/,"grey"));
		}
	});
});

$(function(){
	$("#set-number input").focus(function(){
		$(this).parent().parent().addClass("active");
		$(this).parent().parent().find("h3").css("color", "rgb(69, 217, 181)");
		$(this).parent().find("label").css("color", "white");
	});
});

$(function(){
	$("#set-number input").blur(function(){
		if($(this).val() == ""){
			$(this).parent().parent().removeClass("active");
			$(this).parent().parent().find("h3").css("color", "inherit");
			$(this).parent().find("label").css("color", "inherit");

		}
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

	$('#select_rightbar .choice').bind("click",function(){
		$(".choice").each(function(){
		    $(this).removeClass("replace_selected");
		});
		$(this).addClass("replace_selected");
		$(this).find("input[type=radio]").prop("checked", true);
	});

});
