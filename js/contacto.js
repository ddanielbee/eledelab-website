$(window).load(function(){
	headerLoad();
});
$(document).ready(function(){
	headerLoad();
	$(".content").addClass("in-view");
	$(".hugetext").fitText(1.3, { maxFontSize: '70px' });
	$(".hugetext-form").fitText(1, {maxFontSize: '120px'});

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

	jQuery(document).ready(function($){
		//trigger the animation - open modal window
		$('[data-type="modal-trigger"]').on('click', function(e){
			e.preventDefault();
			var actionBtn = $(this),
				scaleValue = retrieveScale(actionBtn.next('.contact-modal-bg'));
			
			actionBtn.addClass('to-circle');
			$("header").removeClass("show");
			$(".footer").addClass("dont-show");
			$(".equipo-bio-close").addClass("close-visible");
			$('.contact-modal-bg').addClass('is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
				animateLayer($('.contact-modal-bg'), scaleValue, true);
			});

			//if browser doesn't support transitions...
			if(actionBtn.parents('.no-csstransitions').length > 0 ) animateLayer(actionBtn.next('.contact-modal-bg'), scaleValue, true);
		});

		//trigger the animation - close modal window
		$('.equipo-bio-close').on('click', function(){
			closeModal();
			$("header").addClass("show");
			$(".footer").removeClass("dont-show");
		});
		$(document).keyup(function(event){
			if(event.which=='27') closeModal();
		});

		$(window).on('resize', function(){
			//on window resize - update cover layer dimention and position
			if($('.contacto.modal-is-visible').length > 0) window.requestAnimationFrame(updateLayer);
		});

		function retrieveScale(btn) {
			var btnRadius = btn.width()/2,
				left = btn.offset().left + btnRadius,
				top = btn.offset().top + btnRadius,
				scale = scaleValue(top, left, btnRadius, $(window).height(), $(window).width());
			if( !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
				btn.css('position', 'fixed').velocity({
					top: top,
					left: left - btnRadius,
					translateX: 0,
				}, 0);
			} else
			{
				if($(window).width()> 640)
				{
					btn.css('position', 'fixed').velocity({
						top: btn.position().top + btnRadius + $(window).scrollTop(),
						left: 0,
						translateX: 0,
					}, 0);
				} else
				{
					btn.css('position', 'fixed').velocity({
						top: btn.position().top + btnRadius + $(window).scrollTop(),
						left: btn.position().left,
						translateX: 0,
					}, 0);
				}
			}

			return scale;
		}

		function scaleValue( topValue, leftValue, radiusValue, windowW, windowH) {
			var maxDistHor = ( leftValue > windowW/2) ? leftValue : (windowW - leftValue),
				maxDistVert = ( topValue > windowH/2) ? topValue : (windowH - topValue);
			return Math.ceil(Math.sqrt( Math.pow(maxDistHor, 2) + Math.pow(maxDistVert, 2) )/radiusValue);
		}

		function animateLayer(layer, scaleVal, bool) {
			$('body').toggleClass('no-overflow', bool);
			$('body,html').animate({
					scrollTop: 0
				}, 400);
			layer.velocity({ scale: scaleVal }, 400, function(){
				
				(bool) 
					? layer.parents('.contacto').addClass('modal-is-visible').end().off('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend')
					: layer.removeClass('is-visible').removeAttr( 'style' ).siblings('[data-type="modal-trigger"]').removeClass('to-circle');
			});
		}

		//$(".morph-modal").html("top = " + ($(".morph-modal").offset().top + ($(".contact-modal-bg").width()/2) -$(window).scrollTop()) +", left = " + ($(".morph-modal").offset().left + ($(".contact-modal-bg").width()/2)));
		//console.log("asdf");
		function updateLayer() {

			var layer = $('.contacto.modal-is-visible').find('.contact-modal-bg'),
				layerRadius = layer.width()/2,
				layerTop = layer.siblings('.morph-modal').offset().top + layerRadius - $(window).scrollTop(),
				layerLeft = layer.siblings('.morph-modal').offset().left + layerRadius,
				scale = scaleValue(layerTop, layerLeft, layerRadius, $(window).innerHeight(), $(window).innerWidth());
			if( !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
				layer.velocity({
					top: layerTop,
					left: layerLeft,
					scale: scale,
				}, 0);
			} else
			{
				if($(window).width()<640)
				{
					layer.velocity({
						top: layer.siblings(".morph-modal").position().top + $(window).scrollTop(),
						left: layer.siblings(".morph-modal").position().left,
						scale: scale,
					}, 0);
				} else
				{
					$(".morph-modal").html("asdf");
					layer.velocity({
						top: layer.siblings(".morph-modal").position().top + $(window).scrollTop(),
						left: 0,
						scale: scale,
					}, 0);
				}
			}
		}

		function closeModal() {
			var section = $('.contacto.modal-is-visible');
			$(".equipo-bio-close").removeClass("close-visible");
			section.removeClass('modal-is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
				animateLayer(section.find('.contact-modal-bg'), 1, false);
			});
			//if browser doesn't support transitions...
			if(section.parents('.no-csstransitions').length > 0 ) animateLayer(section.find('.contact-modal-bg'), 1, false);
		}



		
	});
	$(".contact-form").find("textarea").val("");
	function validateForm(){
		var error = false,
		 	form = $(".contact-form"),
		 	textAreas = form.find("textarea"),
		 	checkboxes = form.find("input[type='checkbox']"),
		 	requiredTextfields = form.find(".required"),
		 	mails = form.find("input[type='email']");
		textAreas.each(function(i, el){
			var el = $(el);
			if(el.val() != "" && !validateWordCount(el.val(), 100))
			{
				el.addClass("error");
				el.closest("div").siblings("label").find(".req").addClass("visible-error");
				error = true;
				//console.log("Heeeey, words on textarea error");
			}
		});
		if(!validateCheckbox(checkboxes))
		{
			//console.log("Heeey, checkboxes error");
			error = true;
			$("#title14").find(".req").addClass("visible-error");
		}
		requiredTextfields.each(function(i, el){
			var el = $(el);
			if(!isFilled(el.val()))
			{
				el.addClass("error");
				el.closest("div").siblings("label").find(".req").addClass("visible-error");
				error = true;
				//console.log("Heeeey, required textfields error");
			}
		});
		mails.each(function(i, el){
			var el = $(el);
			if(!isMail(el.val()))
			{
				el.addClass("error");
				el.closest("div").siblings("label").find(".req").addClass("visible-error");
				error = true;
				//console.log("Heeey, mail error");
			}
		});	
		return error;
	}

	$(".contact-form input, .contact-form textarea").focus(function(){
		$this = $(this);
		if($this.hasClass("error"))
		{
			$this.removeClass("error");
			$this.closest("div").siblings("label").find(".req").removeClass("visible-error");
		}
	});
	$(".contact-form input[type='checkbox']").click(function(){
		$("#title14").find(".req").removeClass("visible-error");
	});

	$("#saveForm").click(function(e){
		e.preventDefault();
		if(!validateForm())
		{
			//console.log("noErrors");
			$("#form2").submit();
			$(".buttons").fadeOut(400, function(){
				$(".success-message").addClass("message-visible");
				$(".buttons").remove();
			})
		} else {
			//console.log("Errors");
			$('.contact-modal-content').animate({
					scrollTop: 0
				}, 400);
		}
	});
});