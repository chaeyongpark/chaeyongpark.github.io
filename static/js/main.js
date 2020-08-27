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
  $("#CHI2020-Phantom-sensation #citation-bibtex").click( function() {
  	if ($(this).text().includes("BIBTEX")) {
  		$("#CHI2020-Phantom-sensation citation description").text("CITATION");
  		$(this).html("<i class=\"tiny material-icons left\">autorenew</i>CITATION");
  	} else {
  		$("#CHI2020-Phantom-sensation citation description").text("ORIGINAL");
  		$(this).html("<i class=\"tiny material-icons left\">autorenew</i>BIBTEX");
  	}
  });
});

