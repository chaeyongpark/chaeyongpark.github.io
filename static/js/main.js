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
  		$("#CHI2020-Phantom-sensation .description").html("@inproceedings{Kim2020:Phantom,<br>&nbsp;&nbsp;author = {Kim, Jinsoo and Oh, Seungjae and Park, Chaeyong and Choi, Seungmoon},<br>&nbsp;&nbsp;title = {Body-Penetrating Tactile Phantom Sensations},<br>&nbsp;&nbsp;year = {2020},<br>&nbsp;&nbsp;isbn = {9781450367080},<br>&nbsp;&nbsp;publisher = {Association for Computing Machinery},<br>&nbsp;&nbsp;address = {New York, NY, USA},<br>&nbsp;&nbsp;url = {https://doi.org/10.1145/3313831.3376619},<br>&nbsp;&nbsp;doi = {10.1145/3313831.3376619},<br>&nbsp;&nbsp;booktitle = {Proceedings of the 2020 CHI Conference on Human Factors in Computing Systems},<br>&nbsp;&nbsp;pages = {1–13},<br>&nbsp;&nbsp;numpages = {13},<br>&nbsp;&nbsp;keywords = {vibrotactile feedback, phantom sensation, tactile illusion, penetrating tactile sensation},<br>&nbsp;&nbsp;location = {Honolulu, HI, USA},<br>&nbsp;&nbsp;series = {CHI '20}<br>}");
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


/*
 * WHC 2019: Multimodal Haptic Rendering
 */
$(function() {
  $("#WHC2019-Multimodal-rendering #citation-bibtex").click( function() {
    if ($(this).text().includes("BIBTEX")) {
      $("#WHC2019-Multimodal-rendering .description").html("@inproceedings{Park2019:Multimodal:,<br>&nbsp;&nbsp;author = {Park, Chaeyong and Park, Jaeyoung and Oh, Seungjae and Choi, Seungmoon},<br>&nbsp;&nbsp;title = {Realistic Haptic Rendering of Collision Effects Using Multimodal Vibrotactile and Impact Feedback},<br>&nbsp;&nbsp;year = {2019},<br>&nbsp;&nbsp;isbn = {9781538694619},<br>&nbsp;&nbsp;publisher = {IEEE},<br>&nbsp;&nbsp;url = {https://doi.org/10.1109/WHC.2019.8816116},<br>&nbsp;&nbsp;doi = {10.1109/WHC.2019.8816116},<br>&nbsp;&nbsp;booktitle = {2019 IEEE World Haptics Conference (WHC)},<br>&nbsp;&nbsp;pages = {449-454},<br>&nbsp;&nbsp;numpages = {6},<br>&nbsp;&nbsp;keywords = {Haptic interfaces, Actuators, Vibrations, Rendering (computer graphics), Engines, Force},<br>&nbsp;&nbsp;location = {Tokyo, Japan},<br>&nbsp;&nbsp;series = {WHC'19}<br>}");
      $(this).html("<i class=\"tiny material-icons left\">autorenew</i>CITATION");
    } else {
      $("#WHC2019-Multimodal-rendering .description").text("Chaeyong Park, Jaeyoung Park, Seungjae Oh, and Seungmoon Choi. 2019. Realistic Haptic Rendering of Collision Effects Using Multimodal Vibrotactile and Impact Feedback. In Proceedings of the IEEE World Haptics Conference 2019 (WHC '19). IEEE, 449-454. DOI:https://doi.org/10.1109/WHC.2019.8816116");
      $(this).html("<i class=\"tiny material-icons left\">autorenew</i>BIBTEX");
    }
  });
});

$(function() {
  $("#WHC2019-Multimodal-rendering #citation-copy").click( function() {
    var $temp = $("<input>"); 
    $("body").append($temp);
    $temp.val($("#WHC2019-Multimodal-rendering .description").text()).select();
    document.execCommand("copy");
    $temp.remove();

    $(this).html("<i class=\"tiny material-icons left\">check</i>COPY TO CLIPBOARD");
    M.toast({html: 'COPY TO CLIPBOARD'});
  });
});

/*
 * AH 2018: Viscoelastic rendering
 */
$(function() {
  $("#AH2018-Viscoelastic-rendering #citation-bibtex").click( function() {
    if ($(this).text().includes("BIBTEX")) {
      $("#AH2018-Viscoelastic-rendering .description").html("@inproceedings{Cha2018:Viscoelastic:,<br>&nbsp;&nbsp;author = {Cha, Hojun and Amit, Bhardwaj and Park, Chaeyong and Choi, Seungmoon},<br>&nbsp;&nbsp;title = {Random Forest for Modeling and Rendering of Viscoelastic Deformable Objects},<br>&nbsp;&nbsp;year = {2019},<br>&nbsp;&nbsp;isbn = {9789811331947},<br>&nbsp;&nbsp;publisher = {Springer},<br>&nbsp;&nbsp;url = {https://doi.org/10.1007/978-981-13-3194-7_10},<br>&nbsp;&nbsp;doi = {10.1007/978-981-13-3194-7_10},<br>&nbsp;&nbsp;booktitle = {Haptic Interaction},<br>&nbsp;&nbsp;pages = {1-6},<br>&nbsp;&nbsp;numpages = {6},<br>&nbsp;&nbsp;location = {Incheon, Korea},<br>&nbsp;&nbsp;series = {AsiaHaptics'18}<br>}");
      $(this).html("<i class=\"tiny material-icons left\">autorenew</i>CITATION");
    } else {
      $("#AH2018-Viscoelastic-rendering .description").text("Hojun Cha, Amit Bhardwaj, Chaeyong Park, and Seungmoon Choi. 2018. Random Forest for Modeling and Rendering of Viscoelastic Deformable Objects. In Proceedings of the International AsiaHaptics conference (AsiaHaptics '18). Springer, 48-53. DOI:https://doi.org/10.1007/978-981-13-3194-7_10");
      $(this).html("<i class=\"tiny material-icons left\">autorenew</i>BIBTEX");
    }
  });
});

$(function() {
  $("#AH2018-Viscoelastic-rendering #citation-copy").click( function() {
    var $temp = $("<input>"); 
    $("body").append($temp);
    $temp.val($("#AH2018-Viscoelastic-rendering .description").text()).select();
    document.execCommand("copy");
    $temp.remove();

    $(this).html("<i class=\"tiny material-icons left\">check</i>COPY TO CLIPBOARD");
    M.toast({html: 'COPY TO CLIPBOARD'});
  });
});

/*
 * CHI 2019: Vibeye
 */
$(function() {
  $("#CHI2019-Vibeye #citation-bibtex").click( function() {
    if ($(this).text().includes("BIBTEX")) {
      $("#CHI2019-Vibeye .description").html("@inproceedings{Oh2019:Vibeye,<br>&nbsp;&nbsp;author = {Oh, Seungjae and Yun, Gyeore and Park, Chaeyong and Kim, Jinsoo and Choi, Seungmoon},<br>&nbsp;&nbsp;title = {VibEye: Vibration-Mediated Object Recognition for Tangible Interactive Applications},<br>&nbsp;&nbsp;year = {2019},<br>&nbsp;&nbsp;isbn = {9781450359702},<br>&nbsp;&nbsp;publisher = {Association for Computing Machinery},<br>&nbsp;&nbsp;address = {New York, NY, USA},<br>&nbsp;&nbsp;url = {https://doi.org/10.1145/3290605.3300906},<br>&nbsp;&nbsp;doi = {10.1145/3290605.3300906},<br>&nbsp;&nbsp;booktitle = {Proceedings of the 2019 CHI Conference on Human Factors in Computing Systems},<br>&nbsp;&nbsp;pages = {1–12},<br>&nbsp;&nbsp;numpages = {12},<br>&nbsp;&nbsp;keywords = {vibration-based sensing, virtual reality, passive haptics, tangible interaction, augmented reality, object recognition},<br>&nbsp;&nbsp;location = {Glasgow, Scotland Uk},<br>&nbsp;&nbsp;series = {CHI '19}<br>}");
      $(this).html("<i class=\"tiny material-icons left\">autorenew</i>CITATION");
    } else {
      $("#CHI2019-Vibeye .description").text("Seungjae Oh, Gyeore Yun, Chaeyong Park, Jinsoo Kim, and Seungmoon Choi. 2019. VibEye: Vibration-Mediated Object Recognition for Tangible Interactive Applications. In Proceedings of the 2019 CHI Conference on Human Factors in Computing Systems (CHI '19). ACM, 1–12. DOI:https://doi.org/10.1145/3290605.3300906");
      $(this).html("<i class=\"tiny material-icons left\">autorenew</i>BIBTEX");
    }
  });
});

$(function() {
  $("#CHI2019-Vibeye #citation-copy").click( function() {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($("#CHI2019-Vibeye .description").text()).select();
    document.execCommand("copy");
    $temp.remove();

    $(this).html("<i class=\"tiny material-icons left\">check</i>COPY TO CLIPBOARD");
    M.toast({html: 'COPY TO CLIPBOARD'});
  });
});

/*
 * UIST 2020: Augmented Button
 */
$(function() {
  $("#UIST2020-Programmable-button #citation-bibtex").click( function() {
    if ($(this).text().includes("BIBTEX")) {
      $("#UIST2020-Programmable-button .description").html("@inproceedings{Park2020:Augmentedbutton,<br>&nbsp;&nbsp;author = {Park, Chaeyong and Yoon, Jinhyuk and Oh, Seungjae and Choi, Seungmoon},<br>&nbsp;&nbsp;title = {Augmenting Physical Buttons with Vibrotactile Feedback for Programmable Feels},<br>&nbsp;&nbsp;year = {2020},<br>&nbsp;&nbsp;isbn = {-},<br>&nbsp;&nbsp;publisher = {Association for Computing Machinery},<br>&nbsp;&nbsp;address = {New York, NY, USA},<br>&nbsp;&nbsp;url = {https://doi.org/10.1145/3379337.3415837},<br>&nbsp;&nbsp;doi = {10.1145/3379337.3415837},<br>&nbsp;&nbsp;booktitle = {Proceedings of the 2019 CHI Conference on Human Factors in Computing Systems},<br>&nbsp;&nbsp;pages = {1–14},<br>&nbsp;&nbsp;numpages = {14},<br>&nbsp;&nbsp;keywords = {Button; Vibrotactile; Haptics; Augmented reality; Multimodal},<br>&nbsp;&nbsp;location = {Virtual Event, USA},<br>&nbsp;&nbsp;series = {UIST '20}<br>}");
      $(this).html("<i class=\"tiny material-icons left\">autorenew</i>CITATION");
    } else {
      $("#UIST2020-Programmable-button .description").text("Chaeyong Park, Jinhyuk Yoon, Seungjae Oh, and Seungmoon Choi. 2020. Augmenting Physical Buttons with Vibrotactile Feedback for Programmable Feels. In Proceedings of the 33rd Annual ACM Symposium on User Interface Software and Technology (UIST '20). ACM, 1–14. DOI:https://doi.org/10.1145/3379337.3415837");
      $(this).html("<i class=\"tiny material-icons left\">autorenew</i>BIBTEX");
    }
  });
});

$(function() {
  $("#UIST2020-Programmable-button #citation-copy").click( function() {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($("#UIST2020-Programmable-button .description").text()).select();
    document.execCommand("copy");
    $temp.remove();

    $(this).html("<i class=\"tiny material-icons left\">check</i>COPY TO CLIPBOARD");
    M.toast({html: 'COPY TO CLIPBOARD'});
  });
});