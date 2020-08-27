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
  		$("#CHI2020-Phantom-sensation .description").text("@inproceedings{Kim2019:Phantom,<br>\
  			author = {Kim, Jinsoo and Oh, Seungjae and Park, Chaeyong and Choi, Seungmoon},<br>\
			title = {Body-Penetrating Tactile Phantom Sensations},<br>\
			year = {2020},<br>\
			isbn = {9781450367080},<br>\
			publisher = {Association for Computing Machinery},<br>\
			address = {New York, NY, USA},<br>\
			url = {https://doi.org/10.1145/3313831.3376619},<br>\
			doi = {10.1145/3313831.3376619},<br>\
			booktitle = {Proceedings of the 2020 CHI Conference on Human Factors in Computing Systems},<br>\
			pages = {1–13},<br>\
			numpages = {13},<br>\
			keywords = {vibrotactile feedback, phantom sensation, tactile illusion, penetrating tactile sensation},<br>\
			location = {Honolulu, HI, USA},<br>\
			series = {CHI '20}<br>\
			}");
  		$(this).html("<i class=\"tiny material-icons left\">autorenew</i>CITATION");
  	} else {
  		$("#CHI2020-Phantom-sensation .description").text("Jinsoo Kim, Seungjae Oh, Chaeyong Park, and Seungmoon Choi. 2020. Body-Penetrating Tactile Phantom Sensations. In Proceedings of the 2020 CHI Conference on Human Factors in Computing Systems (CHI '20). ACM, New York, 1–13. DOI:https://doi.org/10.1145/3313831.3376619");
  		$(this).html("<i class=\"tiny material-icons left\">autorenew</i>BIBTEX");
  	}
  });
});

