$(document).ready(function(){
	$('.sidenav').sidenav();
	$('.research-card').matchHeight();
	$('.fixed-action-btn').floatingActionButton();
});

$('.scroll-btn').click(function(e) {
    $( 'html, body' ).animate( { scrollTop : 0 }, 400 );
    return false;
});