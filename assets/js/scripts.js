$(document).ready(function() {
	
	/*Python Image Takes You To Downloads*/
	$('a').on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
		if (this.hash !== "") {
		// Prevent default anchor click behavior
		event.preventDefault();

		// Store hash
		var hash = this.hash;

		// Using jQuery's animate() method to add smooth page scroll
		// The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
		$('html, body').animate({
			scrollTop: $(hash).offset().top
		}, 800, function(){

			// Add hash (#) to URL when done scrolling (default click behavior)
			window.location.hash = hash;
		});
		} // End if
	});
	
	AOS.init({
		duration: 1200,
	});
	
	$('.toggle').click(function() {
		$('#menu').toggleClass('active');
	});
	
	
	$('#clickme').on('click', function(event) {
		window.location.href = "pdf.html";
	});
	
	$('html,body').animate({
		scrollTop: $(window.location.hash).offset().top
	});
});