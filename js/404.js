$(window).load(function(){
	headerLoad();
});

$(document).ready(function(){
	$(".content").addClass("in-view");
	$(".hugetext").fitText(0.9, { maxFontSize: '80px' });
});