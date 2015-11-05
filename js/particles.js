$(window).load(function(){
	headerLoad();
});
$(document).ready(function(){
	var wasShared = false;
	$(".content").addClass("in-view");

	function makeTwitterStuff(d,s,id){
		var js,
		fjs=d.getElementsByTagName(s)[0],
		p=/^http:/.test(d.location)?'http':'https';

		if(!d.getElementById(id))
			{
				js=d.createElement(s);js.id=id;
				js.src=p+'://platform.twitter.com/widgets.js';
				fjs.parentNode.insertBefore(js,fjs);
			}
		}
	
	/**
	 * Twitter function
	 */
	function makeTwitterStuff(d,s,id){
		var js,
		fjs=d.getElementsByTagName(s)[0],
		t=window.twttr||{};if(d.getElementById(id))return;
		js=d.createElement(s);js.id=id;
		js.src="https://platform.twitter.com/widgets.js";
		fjs.parentNode.insertBefore(js,fjs);t._e=[];
		t.ready=function(f){t._e.push(f);};return t;
	}

	
/**
 * Creates a particle slider from a string
 * @author Daniel Bolívar <daniel.bolivar@icloud.com>
 * @param  {String} string The string to turn into particles
 * @return {void}        
 */
	function createParticleSlider(string)
	{
		$("#particle-slider").width($(window).width()-50);
		var svgString = buildSvg(string, getLineLength($(window).width()));
		var encodedData = window.btoa( unescape( encodeURIComponent( svgString ) ) );
		$(".main-content").fadeOut(400, function(){
			$(".particles-content").fadeIn(400, function(){
				$(".slide").attr("data-src", "data:image/svg+xml;base64,"+encodedData);
				var ps = new ParticleSlider({
					
					ptlGap:getPtlGap($(window).width()),
					restless:false,
					color: "#1a6d7e",
					monochrome: true
				});
			});
		});
	}
	if($(".activeMessage").length > 0)
	{
		wasShared = true;
		var text = $(".activeMessage").attr("data-message");
		if(wordCount(text).words <= 15 && wordCount(text).characters<=140)
		{
			$(".tw-button").attr("href", buildTwitterShare(text, false));
			makeTwitterStuff(document, 'script', 'twitter-wjs');
			createParticleSlider(text);
		} else
		{
			$(".error-message").find("p").html("No me trates no, no me trates de engañar...");
			$(".error-message").addClass("message-visible");
		}
	}


	$(".new-button").click(function(e){
		e.preventDefault();
		wasShared = false;
		$this = $(this);
		$(".particles-content").fadeOut(400, function(){
			$this.html("Quieres contar otra cosa ?");
			$(".lab-input").val("");
			var x = $("#particle-slider").find("*");
			$.each(x, function(index, value){
				var $value = $(value);
				if(!$value.hasClass("slides") && !$value.hasClass("slide"))
				{
					$value.remove();
				}
			});
			$(".main-content").fadeIn(400, function(){
				$("#particle-slider").append("<canvas class='draw'></canvas>");
			});
		});
	});

	$(".particles-button").click(function(e){
		e.preventDefault();
		wasShared = false;
		var textArea = $(".lab-input");
		if(textArea.val() != "" && wordCount(textArea.val()).words <= 15 && wordCount(textArea.val()).characters <= 140)
		{
			$(".tw-button").attr("href", buildTwitterShare(textArea.val(), true));
			makeTwitterStuff(document, 'script', 'twitter-wjs');
			createParticleSlider(textArea.val());
		} else {
			$(".error-message").addClass("message-visible");
		}
	});

/**
 * Function for changing a specific text based on if the page was shared initially or not. 
 * @author Daniel Bolívar <daniel.bolivar@icloud.com>
 * @return {string} The text.
 */
	function getShared()
	{
		var x = "";
		if(wasShared)
		{
			x = "Contaron una idea en eledelab.co";
		} else
		{
			x = "Acabo de contar una idea en eledelab.co";
		}
		return x;
	}

/**
 * Helper function for building Facebook share
 * @author Daniel Bolívar <daniel.bolivar@icloud.com>
 * @param  {String} text The text to share
 * @return {void}      
 */
	function buildFbShare(text) {
		var url = "http://eledelab.co/ideas-valiosas?mensaje=";
		url += buildUrl(text);
		return url;
	}
	$(".fb-button").click(function(e){
		e.preventDefault();
		e.stopPropagation();
		console.log(buildFbShare($(".lab-input").val()));
		$("meta[property='og:url']").attr("content", buildFbShare($(".lab-input").val()));

		FB.ui({
			method: 'feed',
	        name: getShared(),
	        link: buildFbShare($(".lab-input").val()),
	        picture: "http://www.eledelab.co/img/ideas-valiosas.jpg",
	        caption: "Elede Lab",
	        description: "Entra aquí para verla con un poco de magia. En Elede Lab, se cuentan ideas valiosas."

		}, function(response){});
	});

/**
 * Helper function for building Twitter Share
 * @author Daniel Bolívar <daniel.bolivar@icloud.com>
 * @param  {text} text   The text to be shared
 * @param  {boolean} shared If initial page was shared or not
 * @return {String}        The url to share on twitter
 */
	function buildTwitterShare(text, shared) {
		var button = $(".tw-button");
		if(shared)
		{	
			var url = "https://twitter.com/intent/tweet?original_referer=http%3A%2F%2Feledelab.co/ideas-valiosas&amp;text=Contemos%20todos%20ideas%20valiosas%2C%20mira%20la%20m%C3%ADa%20aqu%C3%AD%3A&amp;tw_p=tweetbutton&amp;url=http%3A%2F%2Fwww.eledelab.co%2Fideas-valiosas%3Fmensaje%3D";
		} else
		{
			var url = "https://twitter.com/intent/tweet?original_referer=http%3A%2F%2Feledelab.co/ideas-valiosas&amp;text=Contemos%20todos%20ideas%20valiosas%2C%20mira%20esta%20aqu%C3%AD%3A&amp;tw_p=tweetbutton&amp;url=http%3A%2F%2Fwww.eledelab.co%2Fideas-valiosas%3Fmensaje%3D";

		}
		url += twitterUrl(buildUrl(text));
		url+= "&amp;via=eledelab";
		return url;
	}

/**
 * Helper function for getting a correctly formatted url for twitter share
 * @author Daniel Bolívar <daniel.bolivar@icloud.com>
 * @param  {String} text The text to format
 * @return {String}      The formatted text
 */
	function twitterUrl(text) {
		return text.split("%").join("%25");
	}

/**
 * Helper function for getting a correctly formatted url to share on facebook
 * @author Daniel Bolívar <daniel.bolivar@icloud.com>
 * @param  {String} text The text to format
 * @return {String}      The formatted text
 */
	function buildUrl(text) {
		var url = text.split(' ').join('%20');
		return url.split("\n").join("%0D%0A");
	}

/**
 * Helper function for getting correct font size of particles, based on browser width
 * @author Daniel Bolívar <daniel.bolivar@icloud.com>
 * @param  {int} width Browser width
 * @return {float}       Font Size
 */
	function getFontSize(width) {
		var fontSize;
		if(width >= 1025)
		{
			fontSize = $("#particle-slider").width()/13;
		} else if(width >= 600 && width< 1025) 
		{
			fontSize = $("#particle-slider").width()/11;
		} else
		{
			fontSize = $("#particle-slider").width()/8;
		}
		return fontSize;
	}

/**
 * Helper function for getting particle gap, based on browser window
 * @author Daniel Bolívar <daniel.bolivar@icloud.com>
 * @param  {Int} width Browser Width
 * @return {int}       Particle Gap
 */
	function getPtlGap(width) {
		var gap;
		if(width >= 1025)
		{
			gap = 1;
		} else if(width >= 600 && width< 1025) 
		{
			gap = 2;
		} else
		{
			gap = 3;
		}
		return gap;
	}

/**
 * Helper function for getting maximum character line length for text, based on Browser Width
 * @author Daniel Bolívar <daniel.bolivar@icloud.com>
 * @param  {Int} width Browser Width
 * @return {Int}       Line length
 */
	function getLineLength(width) {
		var lineLength;
		if(width >= 1025)
		{
			lineLength = 25;
		} else if(width >= 600 && width< 1025) 
		{
			lineLength = 20;
		} else
		{
			lineLength = 15;
		}
		return lineLength;
	}

/**
 * Helper function for getting the correct spacing on X axis that particles should have on each line
 * @author Daniel Bolívar <daniel.bolivar@icloud.com>
 * @param  {String} value Line text
 * @return {float}       Correct Spacing
 */
	function getSpanX(value) {
		var spaces = 25-value.length;
		var spaceWidth = $("#particle-slider").width()/25;
		return (spaces*spaceWidth)/2;
	}

/**
 * Helper function for building SVG text out of a String (User input)
 * @author Daniel Bolívar <daniel.bolivar@icloud.com>
 * @param  {String} value      Input String
 * @param  {Int} lineLength Maximum LineLength
 * @return {String}            An SVG string containing the text
 */
	function buildSvg(value, lineLength) {
		var splitted = value.split("\n");
		var finalArray = [];
		$.each(splitted, function(index, value){
			if(value.length > lineLength)
			{
				var tailString = value;
				while (tailString.length > lineLength)
				{
					var tempStr = tailString.substr(0,tailString.lastIndexOf(" ", lineLength));
					
					if(tailString.lastIndexOf(" ", lineLength) == -1 || tailString.lastIndexOf(" ", lineLength) == 0)
					{
						var xString = tailString.substr(0,lineLength-1)+"-";
						finalArray.push(xString.trim());
						tailString = tailString.substr(lineLength);
					} else
					{
						tailString = tailString.substr(tailString.lastIndexOf(" ", lineLength));
						finalArray.push(tempStr.trim());
					}
				}
				finalArray.push(tailString.trim());
			} else {
				finalArray.push(value);
			}
		});
		$("#particle-slider").height((finalArray.length*(getFontSize($(window).width()))) + 100);
		var svgString = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="75 0 ' + ($(window).width()-50) + ' '+ (finalArray.length*(getFontSize($(window).width())+30)) +'" height="'+ (finalArray.length*(getFontSize($(window).width())+10)) +'" width="'+ ($(window).width()-50) +'" xml:space="preserve"><g><text x="0.01px" y="0.01px" style="font-size: '+ getFontSize($(window).width()) +'px; font-family: \'Courier New\';">';
		$.each(finalArray, function(index, value){
			svgString += '<tspan x="' + getSpanX(value) + '" dy="'+ (getFontSize($(window).width())+5) +'">' + value +'</tspan>';
		});
		svgString+= "</text></g></svg>";
		return svgString;
	}

	
});