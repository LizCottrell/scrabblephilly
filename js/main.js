$(document).on('ready', function(){   

	
	// FOOTER BOTTOM-STICK
	
	//main area needs min-height of viewport - header - footer 
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

	$('.js-STactivate').on('click', function(){     
		$(this).parent().find('.js-ST').slideToggle();

			//makes text flip for GAME INFO button
			if ($(this).hasClass('js-gameInfo')){
		   	if ($(this).text() == 'GAME INFO'){
		   		$(this).text('LESS INFO');
		   	} else {
		   		$(this).text('GAME INFO');
		   	}
	   	}
	}); 



	// SUB-MENU ACCORDIAN //

	$(function() {
		$(".js-ST").accordion({
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
    $(".js-tab-close").hide();

    //add the click function
    $('.tabs-nav li').click(function(){

        //remove active class from previous li
        $('.tabs-nav li').removeClass('active');

        //add active class to the active li.
        $(this).addClass('active');

        //hide all content classes
        $(".content").hide();

        //find the data attribute of the active tab
        var activeTab = $(this).find("button").data("type");

        //fade in the content of active tab
        $('#' + activeTab).fadeIn(500);

        //shrink tabs to top left corner and display close button
        $(".js-tabs-nav").addClass('tabs-nav-shrink');
        $(".js-tab-close").show();

        //close tab button
        $('.js-tab-close').on('click', function(){
			$('.content').fadeOut(function(){
				$('body').removeClass('tab-on'); 
			});
			$(".js-tabs-nav").removeClass('tabs-nav-shrink');
			$(".tabs-nav").fadeIn(500);
			$(".js-tab-close").hide();
		});

        return false;

    });




});  // end of doc.ready