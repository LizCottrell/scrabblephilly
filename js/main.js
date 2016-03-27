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
		$('.js-ST').accordion({
			active: false, 
			collapsible: true,
			heightStyle: 'content'
		});
	});



	// TWITTER-FEED //
	
	//hide all content classes
	$('.js-twitter-content').hide();
  $('.js-twitter-close').hide();

  //add the click function
	$('.js-twitter-open').on('click', function(){
		$('#b').toggleClass('full-block hover-scale');

		//hide venue content block
		$('#a').hide();

		//shrink icon, show feed and close-button
    $('.js-twitter-nav').toggleClass('twitter-animate');
    $('.js-twitter-content').show();
    $('.js-twitter-close').show();
	});

	//close twitter-feed button
	$('.js-twitter-close').on('click', function(){
		$('.js-twitter-content').hide();
		$('.js-twitter-close').hide();
		$('.js-twitter-nav').toggleClass('twitter-animate');
		$('#b').toggleClass('full-block hover-scale');
		$('#a').show();		
	});



	// TABS CONTENT //

    //hide all content classes
  $('.js-tab-content').hide();
  $('.js-tab-close').hide();

  //add the click function
  $('.js-tabs-nav li').click(function(){
    //remove active class from previous li
    $('.js-tabs-nav li').removeClass('active');

    //add active class to the active li.
    $(this).addClass('active');

    //hide all content classes
    $('.js-tab-content').hide();

    //find the data attribute of the active tab
    var activeTab = $(this).find('button').data('type');

    //fade in the content of active tab
    $('#' + activeTab).fadeIn(500);

    //shrink tabs to top left corner and display close button
    $('.js-tabs-nav').addClass('tabs-animate');
    $('.js-tab-close').show();

    //close tab button
    $('.js-tab-close').on('click', function(){
			$('.js-tab-content').fadeOut();
			$('.js-tabs-nav').removeClass('tabs-animate');
			$('.js-tabs-nav').fadeIn(500);
			$('.js-tab-close').hide();
		});

      return false;

  });




   // MODALS //

	$('body').removeClass('modal-on');

	
	var modalOpen = function(whichModalToShow){
		$('.modal-content').removeClass('modal-visible');
		$('.modal-wrapper').show(function(){
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
		$('.modal-wrapper').hide(function(){
			$('body').removeClass('modal-on'); 
		});
	});




});  // end of doc.ready