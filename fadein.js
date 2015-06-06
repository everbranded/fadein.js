/**
	Project: Fade In
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
var default_speed = 800;


// ----------------------------------------------------------------

// verify the DOM is completely loaded.
$(document).ready(function() {

	// when the page initially loads, make all fadein objects invisible.
	$(".fadein").each(function() {

		// this opacity should be set in the CSS but
		// is set here again for redundancy.
		$(this).css("opacity","0");

	}); // end $(".fadein").each();


	// check that a scroll action has happened.
	$(window).scroll(function() {

		// look through all fadein classes.
		$(".fadein").each(function() {

			// calculate the bottom of the object.
            var object_bottom = $(this).offset().top + $(this).outerHeight();

            // calculate the bottom of the window.
            var window_bottom = $(window).scrollTop() + $(window).height();
	            

            // check if the bottom of the window is now higher than the bottom
            // of the object to fade in.
            if(window_bottom > object_bottom)
            {

           		// check if a "delay" exists.
           		var obj_delay = default_delay;
            	if($(this).attr("data-delay")) obj_delay = $(this).attr("data-delay");

            	// check if a "speed" exists.
            	var obj_speed = default_speed;
            	if($(this).attr("data-speed")) obj_speed = $(this).attr("data-speed");

            	// animate the fading in of object.
                $(this).delay(obj_delay).animate({'opacity':'1'}, obj_speed);
	                    
            }

		}); // end $(".fadein").each();

	}); // end $(window).scroll();

}); // end $(document).ready();
