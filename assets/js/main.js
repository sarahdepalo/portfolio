/*
	Photon by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body');

	// Breakpoints.
		breakpoints({
			xlarge:   [ '1141px',  '1680px' ],
			large:    [ '981px',   '1140px' ],
			medium:   [ '737px',   '980px'  ],
			small:    [ '481px',   '736px'  ],
			xsmall:   [ '321px',   '480px'  ],
			xxsmall:  [ null,      '320px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Scrolly.
		$('.scrolly').scrolly();

})(jQuery);


//Adds spin class to bee icon
const beeIcon = document.getElementById('beeIcon');
beeIcon.addEventListener('click', () => {
	beeIcon.classList.add('spin');
	setTimeout(() => {
		beeIcon.classList.remove('spin');
	}, 2000);
});

// Adds Button animations on sroll
$(window).scroll(function () {
	if($(window).scrollTop() > 0) {
	  $(".animated-btn").addClass("animated");
	  $(".animated-btn").addClass("fadeIn");
	}
	else {
		$(".animated-btn").removeClass("animated");
		$(".animated-btn").removeClass("fadeIn");
	}
  });

  //Adds fade in from left animation to skill icons
  $(window).scroll(function () {
	if($(window).scrollTop() > 0) {
	  $("#skill-icons").addClass("animate__animated");
	  $("#skill-icons").addClass("animate__fadeInLeftBig");
	}
	else {
		$("#skill-icons").removeClass("animate__animated");
		$("#skill-icons").removeClass("animate__fadeInLeftBig");
	}
  });


