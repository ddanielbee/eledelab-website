//Visibility jquery plugin

(function($) {

  /**
   * Copyright 2012, Digital Fusion
   * Licensed under the MIT license.
   * http://teamdf.com/jquery-plugins/license/
   *
   * @author Sam Sehnert
   * @desc A small plugin that checks whether elements are within
   *     the user visible viewport of a web browser.
   *     only accounts for vertical position, not horizontal.
   */

  $.fn.visible = function(partial) {
    
      var $t            = $(this),
          $w            = $(window),
          viewTop       = $w.scrollTop(),
          viewBottom    = viewTop + $w.height(),
          _top          = $t.offset().top,
          _bottom       = _top + $t.height(),
          compareTop    = partial === true ? _bottom : _top,
          compareBottom = partial === true ? _top : _bottom;
    
    return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

  };
    
})(jQuery);

//Nav Button Js
!function(n,r){"function"==typeof define&&define.amd?define(r):n.transformicons=r()}(this||window,function(){"use strict";var n={},r="tcon-transform",t={transform:["click"],revert:["click"]},e=function(n){return"string"==typeof n?Array.prototype.slice.call(document.querySelectorAll(n)):"undefined"==typeof n||n instanceof Array?n:[n]},o=function(n){return"string"==typeof n?n.toLowerCase().split(" "):n},i=function(n,r,i){var c=(i?"remove":"add")+"EventListener",u=e(n),a=u.length,s={};for(var l in t)s[l]=r&&r[l]?o(r[l]):t[l];for(;a--;)for(var d in s)for(var v=s[d].length;v--;)u[a][c](s[d][v],f)},f=function(r){n.toggle(r.currentTarget)};return n.add=function(r,t){return i(r,t),n},n.remove=function(r,t){return i(r,t,!0),n},n.transform=function(t){return e(t).forEach(function(n){n.classList.add(r)}),n},n.revert=function(t){return e(t).forEach(function(n){n.classList.remove(r)}),n},n.toggle=function(t){return e(t).forEach(function(t){n[t.classList.contains(r)?"revert":"transform"](t)}),n},n});transformicons.add('.tcon');

function navShow(header)
  {
    header.removeClass("move-back");
    header.addClass("active");
    header.find("nav").addClass("active").find("ul").find("li").addClass("active");
  }

function headerLoad() {
	$(".loader").removeClass("loading");
	$("header").addClass("show");
  $(".content").addClass("in-view")
}

function isFilled(value){
      return value != "";
    }

function isMail(value){
  var re = /[^@]+@[^@]+\.[^@]+/;
  return re.test(value);
}

function wordCount( val ){
    return {
        charactersNoSpaces : val.replace(/\s+/g, '').length,
        characters         : val.length,
        words              : val.match(/\S+/g).length,
        lines              : val.split(/\r*\n/).length
    };
}

function validateWordCount(val, number){
  var count = wordCount(val);
  return count.words < number;
}

function validateCheckbox(elements){
  return elements.is(":checked");
}

function navHide(header) {
  header.removeClass("active");
  header.find("ul").find("li").removeClass("active");
  $(".mobile-nav").removeClass("active");
  $(".mobile-nav").find("ul").find("li").removeClass("active");
}
function headerHide() {
  $(".loader").addClass("header-hide");
  var header = $("header");
	$(".loader").addClass("loading");
  if(!header.hasClass("active") && !$(".mobile-nav").hasClass("active"))
  {
	 header.removeClass("show");
  } else
  {
    navHide(header);
  }
  $(".content").addClass("fade-out");
}

function mobileNavHide(header) {
  header.removeClass("active");
      header.find("ul").find("li").removeClass("active");
}



$(document).ready(function(){
  //Navigation controllers
  if (!Modernizr.svg) {
    $("img[src$='.svg']")
      .attr("src", $(this).attr("data-fallback"));
  }
  $(".nav-button").click(function(){
    var header = $("header.desktop");
    if(header.hasClass("active"))
    {
      navHide(header);
    } else
    {
      navShow(header);
    }
  });

  $(".nav-button-small").click(function(){
    var header = $(".mobile-nav");
    if(header.hasClass("active"))
    {
      mobileNavHide(header);
    } else
    {
      header.removeClass("move-back");
      header.addClass("active");
      header.find("ul").find("li").addClass("active");
    }
  });
  var slidingElements = $(".should-slide");
  //Slide in effect
  setTimeout(function(){
    slidingElements.each(function(i, el) {
      var el = $(el);
      if (el.visible(true)) {
        el.addClass("slides-in"); 
      } 
    });
  }, 1000);
  
  $(window).scroll(function(event) {
    console.log("scrolling");
    slidingElements.each(function(i, el) {
      var el = $(el);
      if (el.visible(true)) {
        el.addClass("slides-in"); 
      } 
    });
  });

    $(".ajax-link").click(function(e){
      console.log("ajax-linked");
      headerHide();
      e.preventDefault();
      var url = $(this).attr("data-link");
      setTimeout(function(){window.location=url;}, 1000);
  })

    // Field Validation
    


});