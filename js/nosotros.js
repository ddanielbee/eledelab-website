function isIE() { return ((navigator.appName == 'Microsoft Internet Explorer') || ((navigator.appName == 'Netscape') && (new RegExp("Trident/.*rv:([0-9]{1,}[\.0-9]{0,})").exec(navigator.userAgent) != null))); }

$(window).load(function(){
	headerLoad();
})
$(document).ready(function(){
	
	if(isIE())
	{
		$("footer").css("display", "none");
	}
	var els = $(".icon-grid").find("li").find("img");
	var bioEls = $(".equipo-list").find("li").find(".img-div");
	function resizeIcons(els)
	{
		if(window.innerWidth > 640 && window.innerHeight < 620)
		{
			els.css("height", window.innerHeight/4);
		} else
		{
			els.css("height", window.innerHeight/3.5);
		}
	}
	resizeIcons(els);
	$(window).smartresize(function(){
		
		resizeIcons(els);
	});
	$(".hugetext").fitText(0.9, { maxFontSize: '100px' });
	
	$(".content").onepage_scroll({
	   sectionContainer: "section.onepage-section",     // sectionContainer accepts any kind of selector in case you don't want to use section
	   easing: "ease-in-out",                  // Easing options accepts the CSS3 easing animation such "ease", "linear", "ease-in",
	                                    // "ease-out", "ease-in-out", or even cubic bezier value such as "cubic-bezier(0.175, 0.885, 0.420, 1.310)"
	   animationTime: 1000,             // AnimationTime let you define how long each section takes to animate
	   pagination: true,                // You can either show or hide the pagination. Toggle true for show, false for hide.
	   updateURL: true,                // Toggle this true if you want the URL to be updated automatically when the user scroll to each page.
	   beforeMove: function(index) {},  // This option accepts a callback function. The function will be called before the page moves.
	   afterMove: function(index) {
	   	var slidingEls = $("section.active").find($(".should-slide"));
	   	setTimeout(function(){slidingEls.each(function(i, el) {
            var el = $(el);
            
              el.addClass("slides-in"); 
            
          });}, 500);
	   	
	   	if(index === 3)
	   	{
	   		$(".onepage-pagination").addClass("blue-page");
	   		$(".logo-nav.logo-dark").addClass("fade-out");
	   		$(".logo-nav-small.logo-dark").addClass("fade-out");
	   		$(".logo-nav.logo-light").removeClass("fade-out");
	   		$(".logo-nav-small.logo-light").removeClass("fade-out");
	   		$(".dark-nav").addClass("light-nav");
	   	} else
	   	{
	   		$(".onepage-pagination").removeClass("blue-page");
	   		$(".logo-nav.logo-dark").removeClass("fade-out");
	   		$(".logo-nav-small.logo-dark").removeClass("fade-out");
	   		$(".logo-nav.logo-light").addClass("fade-out");
	   		$(".logo-nav-small.logo-light").addClass("fade-out");
	   		$(".dark-nav").removeClass("light-nav");
	   	}
	   },   // This option accepts a callback function. The function will be called after the page moves.
	   loop: false,                     // You can have the page loop back to the top/bottom when the user navigates at up/down on the first/last page.
	   keyboard: true,                  // You can activate the keyboard controls
	   responsiveFallback: 1025,        // You can fallback to normal page scroll by defining the width of the browser in which
	                                    // you want the responsive fallback to be triggered. For example, set this to 600 and whenever
	                                    // the browser's width is less than 600, the fallback will kick in.
	   direction: "vertical"            // You can now define the direction of the One Page Scroll animation. Options available are "vertical" and "horizontal". The default value is "vertical".  
	});
	$(".elede-container, .onepage-pagination").addClass("in-view");
	$(".arrow-down").addClass("slides-in");

	$(".equipo-list-item").click(function(){
		var number = $(this).attr("data-member");
		if(!$(".bio-"+number).hasClass("move-in"))
		{
			showTeamSlider(number);
		}
	});

	$(".small-img").click(function(){
		var number = $(this).attr("data-member");
		if(!$(".small-bio-"+number).hasClass("width-in"))
		{
			$(".small-bio-"+number).addClass("width-in");
			$(".equipo-bio-close").addClass("close-visible");
			$("body").addClass("no-overflow");
			$(".tcon-menu--xbutterfly").removeClass("tcon-transform");
			mobileNavHide($(".mobile-nav"));
		}
	});
	
	function showTeamSlider(number) {
		$(".onepage-section").addClass("move-out");
		navHide($("header.desktop"));
		$("header.desktop").addClass("move-out");
		$(".bio-"+number).addClass("move-in");
		$(".tcon-menu--xbutterfly").removeClass("tcon-transform");
		$(".equipo-overlay").addClass("overlay-show");
		$(".onepage-pagination").addClass("not-clickable, invisible");
		$("body").addClass("no-overflow");
		$(".equipo-bio-close").addClass("close-visible");
	}

	function hideTeamSlider() {
		$(".equipo-bio-close").removeClass("close-visible");
		$("body").removeClass("no-overflow");
		if($(".equipo-overlay").hasClass("overlay-show"))
		{
			$(".onepage-section").removeClass("move-out");
			$("header.desktop").removeClass("move-out");
			$("header.desktop").addClass("move-back");
			$(".equipo-bio").removeClass("move-in");
			$(".equipo-overlay").removeClass("overlay-show");
			$(".onepage-pagination").removeClass("not-clickable, invisible");
			
			
			$(".content").onepage_scroll({
				   sectionContainer: "section.onepage-section",     // sectionContainer accepts any kind of selector in case you don't want to use section
				   easing: "ease-in-out",                  // Easing options accepts the CSS3 easing animation such "ease", "linear", "ease-in",
				                                    // "ease-out", "ease-in-out", or even cubic bezier value such as "cubic-bezier(0.175, 0.885, 0.420, 1.310)"
				   animationTime: 1000,             // AnimationTime let you define how long each section takes to animate
				   pagination: true,                // You can either show or hide the pagination. Toggle true for show, false for hide.
				   updateURL: true,                // Toggle this true if you want the URL to be updated automatically when the user scroll to each page.
				   beforeMove: function(index) {},  // This option accepts a callback function. The function will be called before the page moves.
				   afterMove: function(index) {
				   	var slidingEls = $("section.active").find($(".should-slide"));
				   	setTimeout(function(){slidingEls.each(function(i, el) {
			            var el = $(el);
			            
			              el.addClass("slides-in"); 
			            
			          });}, 500);
				   	
				   	if(index === 3)
				   	{
				   		$(".onepage-pagination").addClass("blue-page");
				   		$(".logo-nav.logo-dark").addClass("fade-out");
				   		$(".logo-nav-small.logo-dark").addClass("fade-out");
				   		$(".logo-nav.logo-light").removeClass("fade-out");
				   		$(".logo-nav-small.logo-light").removeClass("fade-out");
				   		$(".dark-nav").addClass("light-nav");
				   	} else
				   	{
				   		$(".onepage-pagination").removeClass("blue-page");
				   		$(".logo-nav.logo-dark").removeClass("fade-out");
				   		$(".logo-nav-small.logo-dark").removeClass("fade-out");
				   		$(".logo-nav.logo-light").addClass("fade-out");
				   		$(".logo-nav-small.logo-light").addClass("fade-out");
				   		$(".dark-nav").removeClass("light-nav");
				   	}
				   },   // This option accepts a callback function. The function will be called after the page moves.
				   loop: false,                     // You can have the page loop back to the top/bottom when the user navigates at up/down on the first/last page.
				   keyboard: true,                  // You can activate the keyboard controls
				   responsiveFallback: 1025,        // You can fallback to normal page scroll by defining the width of the browser in which
				                                    // you want the responsive fallback to be triggered. For example, set this to 600 and whenever
				                                    // the browser's width is less than 600, the fallback will kick in.
				   direction: "vertical"            // You can now define the direction of the One Page Scroll animation. Options available are "vertical" and "horizontal". The default value is "vertical".  
				});
		}
	}
	$(".equipo-bio-close").click(function(e){
		e.preventDefault();
		e.stopPropagation();
		hideTeamSlider();
		if($(".small-equipo-bio").hasClass("width-in"))
		{
			$(".small-equipo-bio").removeClass("width-in");
		}
	});
	$(".equipo-overlay").click(function(){
		//console.log("asdf");
		hideTeamSlider();
	});
	
})