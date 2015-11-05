$(window).load(function(){
	headerLoad();
});

$(document).ready(function(){
	
		if(".svg-container")
	{
		$(".svg-container, h2").addClass("in-view");
		
		$(".links-container, .links-container-small").addClass("slides-in");
			$(".svg-container").height($(window).height());
			

		$(".hugetext").fitText(1.2, { maxFontSize: '100px' });
		//TODO optimize svg animations.
		//var s = new Snap("#svg");
		function lineDistance( point1, point2 ) {
		  var xs = 0;
		  var ys = 0;
		 
		  xs = point2.x - point1.x;
		  xs = xs * xs;
		 
		  ys = point2.y - point1.y;
		  ys = ys * ys;
		 
		  return Math.sqrt( xs + ys );
		}
		
		// SVG Animation
		/*var circles = [];
		
		for(var i=0; i<$(".svg-container").height()/40; i++)
		{
			for(var e=0; e<$(".svg-container").width()/40; e++)
			{
				var tempCircle = s.circle((e*40)+10, (i*40)+10,1);
				tempCircle.attr({
					fill:"white", 
					"fill-opacity": 0.3
				});
				circles.push(tempCircle);
				
			}
		}*/
		$(window).smartresize(function(){
			//console.log("resize ended !");
			$(".svg-container").height($(window).height());
			/*circles = [];
			$("#svg").html("");
			for(var i=0; i<$(".svg-container").height()/40; i++)
			{
				for(var e=0; e<$(".svg-container").width()/40; e++)
				{
					var tempCircle = s.circle((e*40)+10, (i*40)+10,1);
					tempCircle.attr({
						fill:"white", 
						"fill-opacity": 0.3
					});
					circles.push(tempCircle);
					
				}
			}*/
		});

		if( !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
			$(window).scroll(function(){
				$(".svg-container").css("background-position-y", $(this).scrollTop()*0.5);
			});
			/*$(window).mousemove(function(e){
				//console.log(e.clientY);
				for(var i = 0; i<circles.length; i++)
				{
					var tempCircle = circles[i];
					var circlePos = {x:tempCircle.attr("cx"), y:tempCircle.attr("cy")};
					var mousePos = {x:e.clientX, y:e.clientY-50};
					tempCircle.attr("r", lineDistance(mousePos, circlePos)/350);
				}
			});*/
		}
	}
});

