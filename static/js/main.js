$(document).ready(function(){
	$('.sidenav').sidenav();
	$('.research-card').matchHeight();
});

$('.scroll-btn').click(function(e) {
    $( 'html, body' ).animate( { scrollTop : 0 }, 400 );
    return false;
});


$(window).on("scroll", function(){
    if ( $( this ).scrollTop() > 200 ) {
        $( '.scroll-btn' ).fadeIn();
    } else {
        $( '.scroll-btn' ).fadeOut();
    }
});


$(function() {
  $("#CHI2020:Phantom-sensation #citation-bibtex").click( function() {
  	var getTag = $(this).html();
  	alert(getTag);
    /*if($(this).html() == 'BIBTEX') {
      $("#CHI2020:Phantom-sensation citation description").text("CHANGE");
    }
    else {
      $(this).html('접기');
    }*/
  });
});

