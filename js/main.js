$(document).on('ready', function(){   

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



	// MODAL //

	$('body').removeClass('modal-on');

	$('.js-modal-open').on('click', function(){
		$('.modal-wrapper').fadeIn(function(){
			$('body').addClass('modal-on'); 
		});
	});


	$('.js-modal-close').on('click', function(){
		$('.modal-wrapper').fadeOut(function(){
			$('body').removeClass('modal-on'); 
		});
	});



	// FAQ SLIDE-TOGGLE //





});  // end of doc.ready