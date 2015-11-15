

$(function(){
	function leave0(index){
		$(".grammar_1").children().eq(index).animate({height:'0px'},function (){$(".grammar_1").children().eq(index).css("margin-top","0px");});
		
	}
	function unleave0(index){
		$(".grammar_1").children().eq(index).animate({height:'50px'});
		$(".grammar_1").children().eq(index).css("margin-top","4px");
	}
	function leave1(index){
		$(".grammar_2").children().eq(index).animate({height:'0px'},function (){$(".grammar_2").children().eq(index).css("margin-top","0px");});
	}
	function unleave1(index){
		$(".grammar_2").children().eq(index).animate({height:'50px'});
		$(".grammar_2").children().eq(index).css("margin-top","4px");
	}
	function leave2(index){
		$(".reading .exercise_list").children().eq(index).animate({height:'0px'},function (){$(".reading .excercise_list").children().eq(index).css("margin-top","0px");});
	}
	function unleave2(index){
		$(".reading .exercise_list").children().eq(index).animate({height:'50px'});
		$(".reading .exercise_list").children().eq(index).css("margin-top","4px");
	}
	function leave3(index){
		$(".video .exercise_list").children().eq(index).animate({height:'0px'},function (){$(".video .excercise_list").children().eq(index).css("margin-top","0px");});
	}
	function unleave3(index){
		$(".video .exercise_list").children().eq(index).animate({height:'50px'});
		$(".video .exercise_list").children().eq(index).css("margin-top","4px");
	}
	$(".question_list li").click(function(){
		var type = Number($(this).parent().attr("index"));
		var index = $(".question_list li").index(this);
		switch(type)
		{
			case 0:var index = $(".grammar_1_list li").index(this);break;
			case 1:var index = $(".grammar_2_list li").index(this);break;
			case 2:var index = $(".reading_list li").index(this);break;
			case 3:var index = $(".video_list li").index(this);break;
			default: break;
		}
		if($(this).hasClass("question_selected")){
			switch(type)
			{
				case 0:leave0(index);break;
				case 1:leave1(index);break;
				case 2:leave2(index);break;
				case 3:leave3(index);break;
				default: break;
			}			
		}
		else{
			switch(type)
			{
				case 0:unleave0(index);break;
				case 1:unleave1(index);break;
				case 2:unleave2(index);break;
				case 3:unleave3(index);break;
				default: break;
			}  
		}
		$(this).toggleClass("question_selected");
	});
	$(".close_new").click(function(){
		$(this).parent().parent().parent().animate({height:'0px'},function (){$(this).parent().parent().parent().css("margin-top","0px");});
		var type = Number($(this).parent().parent().parent().parent().attr("index"));
		switch(type)
		{
			case 0:var index = $(this).parent().parent().parent().index();$('.grammar_1_list').children().eq(index).toggleClass("question_selected");break;
			case 1:var index = $(this).parent().parent().parent().index();$('.grammar_2_list').children().eq(index).toggleClass("question_selected");break;
			case 2:var index = $(this).parent().parent().parent().index();$('.reading_list').children().eq(index).toggleClass("question_selected");break;
			case 3:var index = $(this).parent().parent().parent().index();$('.video_list').children().eq(index).toggleClass("question_selected");break;
			default: break;
		}
		
		
	});
});

$(function(){
	$(".choice_list .question_op a").click(function(){
		//$("#right-bar-base").hide({duration: 600, queue: false});
		$("#select_rightbar").css("display","block");
		$(".replace_toggle").css("display","block");
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
		$("#right-bar-base").show({duration: 600, queue: false});
		setTimeout(function () { 
	        $("#select_rightbar").css("display","none");
	    }, 600);

		
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
