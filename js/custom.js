$(document).ready(function(){
	// loading wrapper with Spinkit
	setTimeout(function(){
		$(".loading-wrapper").fadeOut(500);
	},1000);

	// header scrolling color changes
	$(window).on("scroll",function(){
		var ScrollDistance = $(window).scrollTop();
		var $header = $(".js-scroll-detector");
		if (ScrollDistance > 100){
			$header.addClass("header--colored");
		}
		else{
			$header.removeClass("header--colored");
		}
	})

	// Stellar.js
	if(screen.width > 1200){
		$(window).stellar();
	}
	
	// Normal size animation & Small size animation
	if(screen.width > 768){
		//WOW.js
		new WOW().init();
	}
	else if(screen.width > 480){
		// ScrollReveal.js
		ScrollReveal().reveal('.quote__content', { delay:1400, easing: 'linear' });
		ScrollReveal().reveal('.quote__text', { delay:1700, easing: 'linear' });
		ScrollReveal().reveal('.skill__subtitle', { delay:250, easing: 'linear' });
		ScrollReveal().reveal('.skill-group', { delay:500, easing: 'linear' });
		ScrollReveal().reveal('.experience__subtitle', { delay:250, easing: 'linear' });
		ScrollReveal().reveal('.timeline-group', { delay:500, easing: 'linear' });
		ScrollReveal().reveal('.eduandcer__subtitle', { delay:250, easing: 'linear' });
		ScrollReveal().reveal('.background-group', { delay:500, easing: 'linear' });
	}
	else{
		// ScrollReveal.js
		ScrollReveal().reveal('.quote__content', { delay:1400, easing: 'linear' });
		ScrollReveal().reveal('.quote__text', { delay:1700, easing: 'linear' });
		ScrollReveal().reveal('.skill__subtitle', { delay:2000, easing: 'linear' });
		ScrollReveal().reveal('.skill-group', { delay:2300, easing: 'linear' });
		ScrollReveal().reveal('.experience__subtitle', { delay:250, easing: 'linear' });
		ScrollReveal().reveal('.timeline-group', { delay:500, easing: 'linear' });
		ScrollReveal().reveal('.eduandcer__subtitle', { delay:250, easing: 'linear' });
		ScrollReveal().reveal('.background-group', { delay:500, easing: 'linear' });
	}
	
})