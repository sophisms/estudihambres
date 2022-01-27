$(function(){

  window.sr = ScrollReveal({ reset: true });  
  	sr.reveal('.js--fadeInLeft', {
	    origin: 'left',
	    distance: '300px',
	    duration: 2000,
	  });
	sr.reveal('.js--fadeInRight', {
	    origin: 'right',
	    distance: '300px',
	    duration: 2000,
	  });


});