// performs a smooth page scroll to an anchor on the same page. 
// https://css-tricks.com/snippets/jquery/smooth-scrolling/

import { $ } from '../jquery-definition.js';

// Select all links with hashes
$('a[href*="#"]')
// Remove links that don't actually link to anything
.not( '[href="#"]' )
.not( '[href="#0"]' )
.not( '.js--toggle' ) // don't want smoothscroll on accordions
.click(function(event) {
	// On-page links
	if (
		location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
		&& 
		location.hostname == this.hostname
	) {
		// Figure out element to scroll to
		var target = $(this.hash);
		target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
		// Does a scroll target exist?
		if (target.length) {
			// Only prevent default if animation is actually gonna happen
			event.preventDefault();
			$('html, body').animate({
				scrollTop: target.offset().top - 120 // -120 to account for sticky header
			}, 1000, function() {
				// Callback after animation
				// Must change focus!
				var $target = $(target);
				$target.focus();
				if ($target.is(":focus")) { // Checking if the target was focused
					return false;
				} else {
					$target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
					$target.focus(); // Set focus again
				};
			});
		}
	}
});