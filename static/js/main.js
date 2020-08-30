$(document).ready(function(){
	$('.modal').modal();
	$('.research-card').matchHeight();
});


/*
 * Scroll Button
 */
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


/*
 * CHI 2020: Phantom Sensations
 */
$(function() {
  $("#CHI2020-Phantom-sensation #citation-bibtex").click( function() {
  	if ($(this).text().includes("BIBTEX")) {
  		$("#CHI2020-Phantom-sensation .description").html("@inproceedings{Kim2019:Phantom,<br>&nbsp;&nbsp;author = {Kim, Jinsoo and Oh, Seungjae and Park, Chaeyong and Choi, Seungmoon},<br>&nbsp;&nbsp;title = {Body-Penetrating Tactile Phantom Sensations},<br>&nbsp;&nbsp;year = {2020},<br>&nbsp;&nbsp;isbn = {9781450367080},<br>&nbsp;&nbsp;publisher = {Association for Computing Machinery},<br>&nbsp;&nbsp;address = {New York, NY, USA},<br>&nbsp;&nbsp;url = {https://doi.org/10.1145/3313831.3376619},<br>&nbsp;&nbsp;doi = {10.1145/3313831.3376619},<br>&nbsp;&nbsp;booktitle = {Proceedings of the 2020 CHI Conference on Human Factors in Computing Systems},<br>&nbsp;&nbsp;pages = {1–13},<br>&nbsp;&nbsp;numpages = {13},<br>&nbsp;&nbsp;keywords = {vibrotactile feedback, phantom sensation, tactile illusion, penetrating tactile sensation},<br>&nbsp;&nbsp;location = {Honolulu, HI, USA},<br>&nbsp;&nbsp;series = {CHI '20}<br>}");
  		$(this).html("<i class=\"tiny material-icons left\">autorenew</i>CITATION");
  	} else {
  		$("#CHI2020-Phantom-sensation .description").text("Jinsoo Kim, Seungjae Oh, Chaeyong Park, and Seungmoon Choi. 2020. Body-Penetrating Tactile Phantom Sensations. In Proceedings of the 2020 CHI Conference on Human Factors in Computing Systems (CHI '20). ACM, New York, 1–13. DOI:https://doi.org/10.1145/3313831.3376619");
  		$(this).html("<i class=\"tiny material-icons left\">autorenew</i>BIBTEX");
  	}
  });
});

$(function() {
	$("#CHI2020-Phantom-sensation #citation-copy").click( function() {
		var $temp = $("<input>");
		$("body").append($temp);
		$temp.val($("#CHI2020-Phantom-sensation .description").text()).select();
		document.execCommand("copy");
		$temp.remove();

		$(this).html("<i class=\"tiny material-icons left\">check</i>COPY TO CLIPBOARD");
		M.toast({html: 'COPY TO CLIPBOARD'});
	});
});