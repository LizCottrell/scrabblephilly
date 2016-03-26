$(document).on('ready', function(){   

	
	// FOOTER BOTTOM-STICK
	
	// make .main have a minimum height of viewport minus header + footer 
	
	var footerStick = function(){
		var viewportHeight = $('body').height();
		var headerHeight = $('header').height();
		var footerHeight = $('footer').height();

		var mainHeight = viewportHeight - headerHeight - footerHeight;

		$('#main').css('min-height', mainHeight);
	}

	footerStick();
	
	$(window).on('resize', function(){
		footerStick();
	});




	// SLIDE-TOGGLE //

	$('.js-menu').on('click', function(){     
		$(this).parent().find('.js-ul').slideToggle();

			if ($(this).hasClass('pickles')){
		   	if ($(this).text() == 'MORE INFO'){
		   		$(this).text('LESS INFO');
		   	} else {
		   		$(this).text('MORE INFO');
		   	}
	   	}
	}); 



  // SUB-MENU ACCORDIAN //
  
  $(function() {
		$(".js-ul").accordion({
			active: false, 
			collapsible: true,
			heightStyle: "content"
		});
	});



	// MODALS //

	$('body').removeClass('modal-on');

	
	var modalOpen = function(whichModalToShow){
		$('.modal-content').removeClass('modal-visible');
		$('.modal-wrapper').fadeIn(function(){
			$('body').addClass('modal-on'); 
			$('#' + whichModalToShow).addClass('modal-visible');
		});
	};

	// requires a data-type attribute on each .js-modal-open
	$('.js-modal-open').on('click', function(){
			var whichModalToShow = $(this).data('type');
			console.log(whichModalToShow);
			modalOpen(whichModalToShow);
	});


	$('.js-modal-close').on('click', function(){
		$('.modal-wrapper').fadeOut(function(){
			$('body').removeClass('modal-on'); 
		});
	});



	// TWITTER CONTENT BLOCK ANIMATION //
	
	$('.js-animate').on('click', function(){
		$('.b').animate({
			width: '100%', 
			opacity: 0.5,
			'margin-left': 0 
		}, 0);

		$('.a').hide();
	});



	// TABS

    //hide all content classes.
    $('.content').hide();

    //add the click function
    $('.tabs-nav li').click(function(){

        //remove active class from previous li
        $('.tabs-nav li').removeClass('active');

        //add active class to the active li.
        $(this).addClass('active');

        //hide all content classes
        $(".content").hide();
        $(".tabs-nav").hide(500);

        //find the data attribute of the active tab
        var activeTab = $(this).find("button").data("type");

        //fade in the content of active tab
        $('#' + activeTab).fadeIn(500);

        //close tab button
        $('.js-tab-close').on('click', function(){
			$('.content').fadeOut(function(){
				$('body').removeClass('tab-on'); 
			});
			$(".tabs-nav").fadeIn(500);
		});

        return false;

    });




});  // end of doc.ready