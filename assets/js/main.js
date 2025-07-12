(function ($) {
	"use strict";

    jQuery(document).ready(function($){


        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");
        
        $('[data-toggle="tooltip"]').tooltip();

          // Sticky menu
          // Even when the window is resized, run this code.
          $(window).resize(function(){
            
            // Variables
            var windowHeight = $(window).height();
            
            // Find the value of 90% of the viewport height
            var ninetypercent = 1.1 * windowHeight;
            
            // When the document is scrolled ninety percent, toggle the classes
            // Does not work in iOS 7 or below
            // Hasn't been tested in iOS 8
            $(document).scroll(function(){
              
              // Store the document scroll function in a variable
              var y = $(this).scrollTop();
              
              // If the document is scrolled 90%
              if( y > ninetypercent) {
                
                // Add the "sticky" class
                $('.header-area').addClass('sticky');
              } else {
                // Else remove it.
                $('.header-area').removeClass('sticky');
              }
            });

          // Call it on resize.
          }).resize();




          // Smooth scroll
            $(function() {
            $('a[href*="#"]:not([data-toggle="tab"])').on('click', function() {
             if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                 var target = $(this.hash);
                 var headerH = '70' ;
                 target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                 if (target.length) {
                     $('html, body').animate({
                         scrollTop: target.offset().top - headerH + "px"
                     }, 1000);
                     return false;
                 }
             }
           });
         });



        // Magnific Popup gallery
        $('.popup-gallery').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        gallery: {
          enabled: true
        },
        type: 'image'
        // other options
        });
        


        // Slicknav
        $('#traffic-menu').slicknav({
			
			   prependTo:'#mobile-menu-wrap'

		    });




        // Masonary
        $('.product-list').masonry({
        });


        // Owl Carousel
        $('.team-slide-wrap').owlCarousel({
            
            items: 3,
            loop: true,
            margin:25,
            smartSpeed: 1500,
            autoplay: false,
            dots: true,
            nav: false,
            responsive:{
                0:{
                    items:1,
                    nav:false
                },
                600:{
                    items:2,
                    nav:false
                },
                1000:{
                    items:3,
                    nav:false,
                    loop:false
                }
            }
        });



        // Contact Form
        
        // Get the form.
        var form = $('#contact-form');

        // Get the messages div.
        var formMessages = $('.form-message');

        // Set up an event listener for the contact form.
        $(form).submit(function(e) {
          // Stop the browser from submitting the form.
          e.preventDefault();

          // Serialize the form data.
          var formData = $(form).serialize();

          // Submit the form using AJAX.
          $.ajax({
            type: 'POST',
            url: $(form).attr('action'),
            data: formData
          })
          .done(function(response) {
            // Make sure that the formMessages div has the 'success' class.
            $(formMessages).removeClass('error');
            $(formMessages).addClass('success');

            // Set the message text.
            $(formMessages).text(response);

            // Clear the form.
            $('#contact-form input,#contact-form textarea').val('');
          })
          .fail(function(data) {
            // Make sure that the formMessages div has the 'error' class.
            $(formMessages).removeClass('success');
            $(formMessages).addClass('error');

            // Set the message text.
            if (data.responseText !== '') {
              $(formMessages).text(data.responseText);
            } else {
              $(formMessages).text('Oops! An error occured. Message could not be sent.');
            }
          });
        });


        // Home-2 
        // Owl Carousel
        $('.hero-area-wrap').owlCarousel({
            
            items: 1,
            lazyLoad:true,
            smartSpeed: 1500,
            loop: true,
            autoplay: false,
            dots: true,
            nav: false
        });

        $('.hero-area-wrap').owlCarousel({
        onTranslated: function(me){
        $(me.target).find(".owl-item.active [data-src]:not(.loaded)").each(function(i,v){
            $(v).addClass("loaded").css("background-image", "url("+$(v).attr("data-src")+")");
        });
            }
        });



        // Owl Carousel
        $('.hero-area-home-4').owlCarousel({
            
            items: 1,
            lazyLoad:true,
            smartSpeed: 1500,
            loop: true,
            autoplay: false,
            dots: false,
            nav: true,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
        });

          $('.hero-area-home-4').owlCarousel({
        onTranslated: function(me){
        $(me.target).find(".owl-item.active [data-src]:not(.loaded)").each(function(i,v){
            $(v).addClass("loaded").css("background-image", "url("+$(v).attr("data-src")+")");
        });
            }
        });







    });










    jQuery(window).load(function(){


            //wow
            new WOW().init();
            window.wow = new WOW(
                          {
                          boxClass:     'wow',      // default
                          animateClass: 'animated', // default
                          offset:       0,          // default
                          mobile:       true,       // default
                          live:         true,        // default
                          offset: 100
                        }
                        )
                        window.wow.init();

        
    });


}(jQuery));	