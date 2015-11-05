$(window).load(function(){
	headerLoad();
});
$(document).ready(function(){
	
	$(".content").addClass("in-view");
	$(".hugetext").fitText(0.9, { maxFontSize: '100px' });
	var re = /[^@]+@[^@]+\.[^@]+/;
	var input = $(".validate");
	var errorMessage = "";
	input.focus(function(){
		$(this).removeClass("error-input");
	});
	$(".lab-button").click(function(e){
		var error = false;
		e.preventDefault();
		input.each(function(i, el){
			var el = $(el);
			if(el.attr("type") == "email")
			{
				if(!isFilled(el.val()) || !isMail(el.val()))
				{
					error = true;
					errorMessage = "Oops, creemos que hay un error en tu correo electrónico. Revisa y vuelve a intentarlo =)";
					el.addClass("error-input");
				}
			}
		});
		if(error)
		{
			$(".error-message").html(errorMessage);
			$(".error-message").addClass("message-visible");
			
		} else
		{
			$(".error-message").removeClass("message-visible");
			$(".success-message").addClass("message-visible");
			input.removeClass("error-input");
			$("#mc-embedded-subscribe-form").submit();
		}
	});

});