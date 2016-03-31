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
		// close any other open FAQs first
		$(this).parent().parent('ul').find('.js-ST').slideUp();

		if (!$(this).hasClass('is-open') || $(this).hasClass('js-gameInfo')){
			$(this).parent().find('> .js-ST').slideToggle();
			$.scrollTo('.js-ST', 800);
		}
		
   	$(this).toggleClass('is-open');

		//makes text flip for GAME INFO button
		if ($(this).hasClass('js-gameInfo')){
	   	if ($(this).text() == 'GAME INFO'){
	   		$(this).text('LESS INFO');
	   	} else {
	   		$(this).text('GAME INFO');
	   	}
   	}	

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
    $('#' + activeTab).fadeIn(600);
    
    // scrollTo ('#' + activeTab)
    $.scrollTo('#' + activeTab, 800);
    

    //shrink tabs to top left corner and display close button
    $('.js-tabs-nav').addClass('tabs-animate');
    $('.js-tab-close').show();

    //close tab button
    $('.js-tab-close').on('click', function(){

			$('.js-tab-content').slideUp();
			$('.js-tabs-nav').removeClass('tabs-animate');
			$('.js-tabs-nav').fadeIn(500);
			$('.js-tab-close').hide();
		});

      return false;

  });



// TWITTER-FEED //
	
	//hide all content classes
  $('.js-twitter-content').hide();
  $('.js-twitter-close').hide();

  //add the click function
	$('.js-twitter-open').on('click', function(){
		// if this has a class of 'is-open', do nothing
		if ($(this).hasClass('is-open')){
			// alert('already open, do nothing')
		} else {
			// It's NOT open, go ahead and open
			//hide venue content block
			$('#a').hide();
			$('#b').toggleClass('full-block hover-scale');
			
			//shrink icon, show feed and close-button
	    	$('.js-twitter-nav').toggleClass('twitter-animate');
	    	$('.js-twitter-content').show();
	    	$('.js-twitter-close').show();
	    	// Mark this as 'is-open'
    		$(this).addClass('is-open');
	    }
	});

	//close twitter-feed button
	$('.js-twitter-close').on('click', function(){
		// remove is-open class on close
		$('.js-twitter-open').removeClass('is-open');

		$('.js-twitter-content').hide();
		$('.js-twitter-close').hide();
		$('.js-twitter-nav').toggleClass('twitter-animate');
		$('#b').toggleClass('full-block hover-scale');
		
		setTimeout(function(){
			$('#a').fadeIn('slow');
		}, 200)

	});



   // MODALS //

	$('body').removeClass('modal-on');
	
	var modalOpen = function(whichModalToShow){
		$('.modal-content').removeClass('modal-visible');
		$('body').addClass('modal-on'); 
		$('#' + whichModalToShow).addClass('modal-visible');
		$('.modal-wrapper').fadeIn(function(){}, 0);
	};

	// requires a data-type attribute on each .js-modal-open
	$('.js-modal-open').on('click', function(){
			var whichModalToShow = $(this).data('type');
			console.log(whichModalToShow);
			modalOpen(whichModalToShow);
	});


	$('.js-modal-close').on('click', function(){
		$('body').removeClass('modal-on'); 
		$('.modal-wrapper').fadeOut(function(){}, 0);

	});


	// form submit
	$('#contact_form .submit').on('click', function(e){
		$('#modal-rsvp').html("<div id='message'>THANKS FOR YOUR SUBMISSION</div>");

		e.preventDefault();
		name = $('input#name').val();
		email = $('input#email').val();
		message = $('textarea#message').val();
		dataString = 'name='+ name + '&email=' + email + '&message=' + message + '&submit=true';
	  
	  $.ajax({
	    type: "POST",
	    url: "index.php",
	    data: dataString,
	    success: function() {
	    	// no needs
	    }
	  });
	  return false;
	});

});  // end of doc.ready