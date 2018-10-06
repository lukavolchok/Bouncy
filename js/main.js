'use strict';

(function($){
	$(document).ready(function() {
		// Code
		$("#menu").on("click","a", function (event) {
			event.preventDefault();
			var id  = $(this).attr('href'),
				top = $(id).offset().top;

			$('body,html').animate({scrollTop: top}, 1500);
		});
		$("#scroll").on("click","a", function (event) {
			event.preventDefault();
			var id  = $(this).attr('href'),
				top = $(id).offset().top;

			$('body,html').animate({scrollTop: top}, 1500);
		});

		var $grid = $('.grid').isotope({
			itemSelector: '.grid-item',
			masonry: {
			  columnWidth: 270
			}
		 });

		 $('.filters-button-group').on( 'click', 'button', function() {
			var filterValue = $( this ).attr('data-filter');
			$grid.isotope({ filter: filterValue });
		  });
		  // change is-checked class on buttons
		  $('.button-group').each( function( i, buttonGroup ) {
			var $buttonGroup = $( buttonGroup );
			$buttonGroup.on( 'click', 'button', function() {
			  $buttonGroup.find('.is-checked').removeClass('is-checked');
			  $( this ).addClass('is-checked');
			});
		  });
		  
		  $('.slider').slick({
			dots: true,
			arrows: false,
			//autoplay: true,
			//autoplaySpeed: 2000,
			infinite: true,
			//initialSlide: 1,
			//pauseOnHover: true,
			//slidesToShow: 2,
			//slidesToScroll: 2,
			//fade: true,
			speed: 1000,
			appendDots: $('.slider__pages'),
			accessibility: true
			});
			
			function initMap() {
				var beetroot = {lat: 49.5692385, lng: 34.5852739};
				var map = new google.maps.Map(
					document.getElementById('map'), {zoom: 15, center: beetroot});
					var marker = new google.maps.Marker ({
						position: beetroot,
						map: map,
						icon: 'images/map.png'
					});
			}
			google.maps.event.addDomListener(window, "load", initMap());

			
	});
})(jQuery);
