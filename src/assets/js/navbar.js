;(function(){

	$(function() {
		$('#menuToggle').on('click', function(){
			$('.toggle-nav').click();
		});
	});
	// Menu settings
	// $('#menuToggle, .menu-close, .view').on('click', function(){
	// 	$('#menuToggle').toggleClass('active');
	// 	$('body').toggleClass('body-push-toleft');
	// 	$('#theMenu').toggleClass('menu-open');
	// });
	$(function() {
		$('.view').click(function() {
			if ($('body').hasClass('show-nav')) {
				$('body').removeClass('show-nav').addClass('hide-nav');

				setTimeout(function() {
					$('body').removeClass('hide-nav');
				}, 500);

			}
		});

	});

	$(function() {

		$('.toggle-nav').click(function() {
			if ($('body').hasClass('show-nav')) {
				$('body').removeClass('show-nav').addClass('hide-nav');

				setTimeout(function() {
					$('body').removeClass('hide-nav');
				}, 500);

			} else {
				$('body').removeClass('hide-nav').addClass('show-nav');
			}

			return false;
		});

	});

	$(function(){
		$('#menuToggle').click(function(){
    var e = jQuery.Event("keyup"); // or keypress/keydown
    e.keyCode = 27; // for Esc
    $(document).trigger(e); // trigger it on document
});
	});


	$(document).keyup(function(e) {
		if (e.keyCode == 27) {
			if ($('body').hasClass('show-nav')) {
				$('body').removeClass('show-nav').addClass('hide-nav');

				setTimeout(function() {
					$('body').removeClass('hide-nav');
				}, 500);

			} else {
				$('body').removeClass('hide-nav').addClass('show-nav');
			}

		}
	});


})(jQuery)
