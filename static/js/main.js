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
  		$("#CHI2020-Phantom-sensation .description").text("@inproceedings{Kim2019:Phantom,<br> \
  			author = {Kim, Jinsoo and Oh, Seungjae and Park, Chaeyong and Choi, Seungmoon},\n\r \
			title = {Body-Penetrating Tactile Phantom Sensations},/\r/ \
			year = {2020},\n\r \
			isbn = {9781450367080},\n\r \
			publisher = {Association for Computing Machinery},\n\r \
			address = {New York, NY, USA},\n\r \
			url = {https://doi.org/10.1145/3313831.3376619},\n\r \
			doi = {10.1145/3313831.3376619},\n\r \
			booktitle = {Proceedings of the 2020 CHI Conference on Human Factors in Computing Systems},\n\r \
			pages = {1–13},\n\r \
			numpages = {13},\n\r \
			keywords = {vibrotactile feedback, phantom sensation, tactile illusion, penetrating tactile sensation},\n\r \
			location = {Honolulu, HI, USA},\n\r \
			series = {CHI '20}\n\r \
			}");
  		$(this).html("<i class=\"tiny material-icons left\">autorenew</i>CITATION");
  	} else {
  		$("#CHI2020-Phantom-sensation .description").text("Jinsoo Kim, Seungjae Oh, Chaeyong Park, and Seungmoon Choi. 2020. Body-Penetrating Tactile Phantom Sensations. In Proceedings of the 2020 CHI Conference on Human Factors in Computing Systems (CHI '20). ACM, New York, 1–13. DOI:https://doi.org/10.1145/3313831.3376619");
  		$(this).html("<i class=\"tiny material-icons left\">autorenew</i>BIBTEX");
  	}
  });
});

