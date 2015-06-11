/**
  __          _      _         _     
 / _|        | |    (_)       (_)    
| |_ __ _  __| | ___ _ _ __    _ ___ 
|  _/ _` |/ _` |/ _ \ | '_ \  | / __|
| || (_| | (_| |  __/ | | | |_| \__ \
|_| \__,_|\__,_|\___|_|_| |_(_) |___/
                             _/ |    
                            |__/     
                            
Filename: fadein.js
Description: A jQuery extension that fades in objects 
once they appear within the active browser view.
Author: Zach Alam
Example: http://everbranded.com/
*/


// ----------------------------------------------------------------


// CONFIGURATION VARIABLES

// default delay: the default amount of time to wait in milliseconds
// before the fading in of an element begins.
var default_delay = 0;

// default speed: the default amount of time in milliseconds that
// elapses during the fade in animation.
var default_speed = 600;


// ----------------------------------------------------------------

// verify the DOM is completely loaded.
$(document).ready(function() {


	// function that defines the fading in of an element.
	function element_fade(element)
	{
		// check if a "delay" exists.
		var obj_delay = default_delay;
		if($(element).attr("data-delay")) obj_delay = $(element).attr("data-delay");

		// check if a "speed" exists.
		var obj_speed = default_speed;
		if($(element).attr("data-speed")) obj_speed = $(element).attr("data-speed");

		// animate the fading in of object.
		$(element).delay(obj_delay).animate({'opacity':'1'}, obj_speed);		
	}


	// function that defines the fading in of a element (when scrolled).
	function element_fade_scroll(element)
	{
		// calculate the bottom of the object.
		var object_bottom = $(element).offset().top + $(element).outerHeight();

		// calculate the bottom of the window.
		var window_bottom = $(window).scrollTop() + $(window).height();
	            

		// check if the bottom of the window is now higher than the bottom
		// of the object to fade in.
		if(window_bottom > object_bottom)
		{
			// animate the fadein.
			element_fade(element);        
		}
	}

	// --------------------------------------------------------------


	// when the page initially loads, make all fadein objects invisible.
	$(".fadein").each(function() {

		// this opacity should be set in the CSS but
		// is set here again for redundancy.
		$(this).css("opacity","0");

		// check to see if this element has a "always" attribute,
		// if so we'll fade the object in regardless of its position.
		if($(this).attr("data-always")) element_fade(this);

		// fade in any elements that are in the active view
		element_fade_scroll(this);

	}); // end $(".fadein").each();


	// after the page is loaded, check that a scroll action has happened.
	$(window).scroll(function() {

		// look through all fadein classes.
		$(".fadein").each(function() {

			element_fade_scroll(this);

		}); // end $(".fadein").each();

	}); // end $(window).scroll();



}); // end $(document).ready();
