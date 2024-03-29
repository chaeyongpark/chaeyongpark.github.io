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
      $("#UIST2020-Programmable-button .description").html("@inproceedings{Park2020:Augmentedbutton,<br>&nbsp;&nbsp;author = {Park, Chaeyong and Yoon, Jinhyuk and Oh, Seungjae and Choi, Seungmoon},<br>&nbsp;&nbsp;title = {Augmenting Physical Buttons with Vibrotactile Feedback for Programmable Feels},<br>&nbsp;&nbsp;year = {2020},<br>&nbsp;&nbsp;isbn = {9781450375146},<br>&nbsp;&nbsp;publisher = {Association for Computing Machinery},<br>&nbsp;&nbsp;address = {New York, NY, USA},<br>&nbsp;&nbsp;url = {https://doi.org/10.1145/3379337.3415837},<br>&nbsp;&nbsp;doi = {10.1145/3379337.3415837},<br>&nbsp;&nbsp;booktitle = {Proceedings of the 33rd Annual ACM Symposium on User Interface Software and Technology},<br>&nbsp;&nbsp;pages = {924–937},<br>&nbsp;&nbsp;numpages = {14},<br>&nbsp;&nbsp;keywords = {Button; Vibrotactile; Haptics; Augmented reality; Multimodal},<br>&nbsp;&nbsp;location = {Virtual Event, USA},<br>&nbsp;&nbsp;series = {UIST '20}<br>}");
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

/*
 * TOH 2021: Length Perception Model
 */
$(function() {
  $("#TOH2021-Length-perception #citation-bibtex").click( function() {
    if ($(this).text().includes("BIBTEX")) {
      $("#TOH2021-Length-perception .description").html("@article{Park2021:Lengthperception,<br>&nbsp;&nbsp;author = {Park, Chaeyong and Kim, Jinsoo and Choi, Seungmoon},<br>&nbsp;&nbsp;journal={IEEE Transactions on Haptics},<br>&nbsp;&nbsp;title={Length Perception Model for Hand-held Controllers: The Effects of Diameter and Inertia},<br>&nbsp;&nbsp;year={2021},<br>&nbsp;&nbsp;volume={14},<br>&nbsp;&nbsp;number={2},<br>&nbsp;&nbsp;pages={310-315},<br>&nbsp;&nbsp;doi={https://doi.org/10.1109/TOH.2021.3077709}<br>}");
      $(this).html("<i class=\"tiny material-icons left\">autorenew</i>CITATION");
    } else {
      $("#TOH2021-Length-perception .description").text("Chaeyong Park, Jinsoo Kim, and Seungmoon Choi. Length Perception Model for Hand-held Controllers: The Effects of Diameter and Inertia. IEEE Transactions on Haptics, vol. 14, no. 2. 2021");
      $(this).html("<i class=\"tiny material-icons left\">autorenew</i>BIBTEX");
    }
  });
});

$(function() {
  $("#TOH2021-Length-perception #citation-copy").click( function() {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($("#TOH2021-Length-perception .description").text()).select();
    document.execCommand("copy");
    $temp.remove();

    $(this).html("<i class=\"tiny material-icons left\">check</i>COPY TO CLIPBOARD");
    M.toast({html: 'COPY TO CLIPBOARD'});
  });
});

/*
 * ADMT2021: Omnidirectional Tactile Sensor
 */
$(function() {
  $("#ADMT2021-forcesensor #citation-bibtex").click( function() {
    if ($(this).text().includes("BIBTEX")) {
      $("#ADMT2021-forcesensor .description").html("@article{kim2021omnidirectional,<br>&nbsp;&nbsp;title={Omnidirectional Tactile Profiling Using a Deformable Pressure Sensor Array Based on Localized Piezoresistivity},<br>&nbsp;&nbsp;author={Kim, Jaehyun and Park, Doowon and Moon, Sungmin and Park, Chaeyong and Thiyagarajan, Kaliannan and Choi, Seungmoon and Hwang, Heeseon and Jeong, Unyong},<br>&nbsp;&nbsp;journal={Advanced Materials Technologies},<br>&nbsp;&nbsp;pages={2100688},<br>&nbsp;&nbsp;year={2021},<br>&nbsp;&nbsp;publisher={Wiley Online Library}<br>}");
      $(this).html("<i class=\"tiny material-icons left\">autorenew</i>CITATION");
    } else {
      $("#ADMT2021-forcesensor .description").text("Jaehyun Kim, Doowon Park,Sungmin Moon, Chaeyong Park, Kaliannan Thiyagarajan, Seungmoon Choi, Heeseon Hwang, and Unyong Jeong. Omnidirectional Tactile Profiling Using a Deformable Pressure Sensor Array Based on Localized Piezoresistivity. Advanced Materials Technologies, 2100688. 2021");
      $(this).html("<i class=\"tiny material-icons left\">autorenew</i>BIBTEX");
    }
  });
});

$(function() {
  $("#ADMT2021-forcesensor #citation-copy").click( function() {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($("#ADMT2021-forcesensor .description").text()).select();
    document.execCommand("copy");
    $temp.remove();

    $(this).html("<i class=\"tiny material-icons left\">check</i>COPY TO CLIPBOARD");
    M.toast({html: 'COPY TO CLIPBOARD'});
  });
});

/*
 * UIST 2021: Finger Identification
 */
$(function() {
  $("#UIST2021-Finger-identification #citation-bibtex").click( function() {
    if ($(this).text().includes("BIBTEX")) {
      $("#UIST2021-Finger-identification .description").html("@inproceedings{Oh2021:FingerIdentification,<br>&nbsp;&nbsp;author = {Oh, Seungjae and Park, Chaeyong and Jeon, Yo-Seb and Choi, Seungmoon},<br>&nbsp;&nbsp;title = {Identifying Contact Fingers on Touch Sensitive Surfaces by Ring-Based Vibratory Communication},<br>&nbsp;&nbsp;year = {2021},<br>&nbsp;&nbsp;isbn = {9781450386357},<br>&nbsp;&nbsp;publisher = {Association for Computing Machinery},&nbsp;&nbsp;address = {New York, NY, USA},<br>&nbsp;&nbsp;url = {https://doi.org/10.1145/3472749.3474745},<br>&nbsp;&nbsp;doi = {10.1145/3472749.3474745},<br>&nbsp;&nbsp;booktitle = {The 34th Annual ACM Symposium on User Interface Software and Technology},<br>&nbsp;&nbsp;pages = {208–222},<br>&nbsp;&nbsp;numpages = {15},<br>&nbsp;&nbsp;keywords = {Vibratory Communication, Finger Identification, Vibration Sensing, Touch Interaction},<br>&nbsp;&nbsp;location = {Virtual Event, USA},<br>&nbsp;&nbsp;series = {UIST '21}<br>}");
      $(this).html("<i class=\"tiny material-icons left\">autorenew</i>CITATION");
    } else {
      $("#UIST2021-Finger-identification .description").text("Seungjae Oh, Chaeyong Park, Yo-Seb Jeon, and Seungmoon Choi. 2021. Identifying Contact Fingers on Touch Sensitive Surfaces by Ring-Based Vibratory Communication. In Proceedings of the 34th Annual ACM Symposium on User Interface Software and Technology (UIST '21). ACM, 208–222. DOI:https://doi.org/10.1145/3472749.3474745");
      $(this).html("<i class=\"tiny material-icons left\">autorenew</i>BIBTEX");
    }
  });
});

$(function() {
  $("#UIST2021-Finger-identification #citation-copy").click( function() {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($("#UIST2021-Finger-identification .description").text()).select();
    document.execCommand("copy");
    $temp.remove();

    $(this).html("<i class=\"tiny material-icons left\">check</i>COPY TO CLIPBOARD");
    M.toast({html: 'COPY TO CLIPBOARD'});
  });
});

/*
 * CHI 2022: Augmented Button
 */
$(function() {
  $("#CHI2022-Programmable-button #citation-bibtex").click( function() {
    if ($(this).text().includes("BIBTEX")) {
      $("#CHI2022-Programmable-button .description").html("@inproceedings{Park2022:Augmentedbutton,<br>&nbsp;&nbsp;author = {Park, Chaeyong and Kim, Jeongwoo and Kim, Dong-Geun and Oh, Seungjae and Choi, Seungmoon},<br>&nbsp;&nbsp;title = {Vibration-Augmented Buttons: Information Transmission Capacity and Application to Interaction Design},<br>&nbsp;&nbsp;year = {2022},<br>&nbsp;&nbsp;isbn = {9781450391573},<br>&nbsp;&nbsp;publisher = {Association for Computing Machinery},<br>&nbsp;&nbsp;address = {New York, NY, USA},<br>&nbsp;&nbsp;url = {https://doi.org/10.1145/3491102.3501849},<br>&nbsp;&nbsp;doi = {10.1145/3491102.3501849},<br>&nbsp;&nbsp;booktitle = {Proceedings of the 2022 CHI Conference on Human Factors in Computing Systems},<br>&nbsp;&nbsp;articleno = {435},<br>&nbsp;&nbsp;numpages = {13},<br>&nbsp;&nbsp;location = {New Orleans, LA, USA},<br>&nbsp;&nbsp;series = {CHI '22}<br>}");
      $(this).html("<i class=\"tiny material-icons left\">autorenew</i>CITATION");
    } else {
      $("#CHI2022-Programmable-button .description").text("Chaeyong Park, Jeongwoo Kim, Dong-Geun Kim, Seungjae Oh, and Seungmoon Choi. 2022. Vibration-Augmented Buttons: Information Transmission Capacity and Application to Interaction Design. In Proceedings of the 2022 CHI Conference on Human Factors in Computing Systems (CHI '22). Association for Computing Machinery, New York, NY, USA, Article 435, 1–13. https://doi.org/10.1145/3491102.3501849");
      $(this).html("<i class=\"tiny material-icons left\">autorenew</i>BIBTEX");
    }
  });
});

$(function() {
  $("#CHI2022-Programmable-button #citation-copy").click( function() {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($("#CHI2022-Programmable-button .description").text()).select();
    document.execCommand("copy");
    $temp.remove();

    $(this).html("<i class=\"tiny material-icons left\">check</i>COPY TO CLIPBOARD");
    M.toast({html: 'COPY TO CLIPBOARD'});
  });
});

/*
 * ADMT 2022: Shear Sensor
 */
$(function() {
  $("#ADMT2022-shearsensor #citation-bibtex").click( function() {
    if ($(this).text().includes("BIBTEX")) {
      $("#ADMT2022-shearsensor .description").html("@article{Suh2022:shearsensor,<br>&nbsp;&nbsp;title={Small-Sized Deformable Shear Sensor Array for Direct Monitoring of Quantitative Shear Distribution},<br>&nbsp;&nbsp;author={Suh, Wonjeong and Park, Chaeyong and Oh, Joosung and Moon, Sungmin and Choi, Seungmoon and Kim, Youn Soo and Jeong, Unyong},<br>&nbsp;&nbsp;journal={Advanced Materials Technologies},<br>&nbsp;&nbsp;volume={7},<br>&nbsp;&nbsp;number={6},<br>&nbsp;&nbsp;pages={2101071},<br>&nbsp;&nbsp;year={2022},<br>&nbsp;&nbsp;publisher={Wiley Online Library}<br>}");
      $(this).html("<i class=\"tiny material-icons left\">autorenew</i>CITATION");
    } else {
      $("#ADMT2022-shearsensor .description").text("Wonjeong Suh, Chaeyong Park, Joosung Oh, Sungmin Moon, Seungmoon Choi, Yeonsoo Kim, and Unyong Jeong. Small-sized Deformable Shear Sensor Array for Direct Monitoring the Quantitative Shear Distribution. Advanced Materials Technologies, Vol. 7, No. 6, 2101071. 2022");
      $(this).html("<i class=\"tiny material-icons left\">autorenew</i>BIBTEX");
    }
  });
});

$(function() {
  $("#ADMT2022-shearsensor #citation-copy").click( function() {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($("#ADMT2022-shearsensor .description").text()).select();
    document.execCommand("copy");
    $temp.remove();

    $(this).html("<i class=\"tiny material-icons left\">check</i>COPY TO CLIPBOARD");
    M.toast({html: 'COPY TO CLIPBOARD'});
  });
});

/*
 * EURO 2022: Information Transmissio Capacity of Multimodal Stimuli
 */
$(function() {
  $("#EURO2022-multimodalIT #citation-bibtex").click( function() {
    if ($(this).text().includes("BIBTEX")) {
      $("#EURO2022-multimodalIT .description").html("@inproceedings{Park2022:multimodal_IT,<br>&nbsp;&nbsp;title={A Preliminary Study on the Perceptual Independence Between Vibrotactile and Thermal Senses},<br>&nbsp;&nbsp;author={Park, Jaejun and Kim, Jeongwoo and Park, Chaeyong and Oh, Seungjae and Park, Junseok and Choi, Seungmoon},<br>&nbsp;&nbsp;booktitle={International Conference on Human Haptic Sensing and Touch Enabled Computer Applications},<br>&nbsp;&nbsp;pages={75--83},<br>&nbsp;&nbsp;year={2022},<br>&nbsp;&nbsp;organization={Springer}<br>}");
      $(this).html("<i class=\"tiny material-icons left\">autorenew</i>CITATION");
    } else {
      $("#EURO2022-multimodalIT .description").text("Jaejun Park, Jeongwoo Kim, Chaeyong Park, Seungjae Oh, and Seungmoon Choi. A Preliminary Study on the Perceptual Independence Between Vibrotactile and Thermal Senses. International Conference on Human Haptic Sensing and Touch Enabled Computer Applications (EuroHaptics'22). Springer, 75-83. https://doi.org/10.1007/978-3-031-06249-0_9");
      $(this).html("<i class=\"tiny material-icons left\">autorenew</i>BIBTEX");
    }
  });
});

$(function() {
  $("#EURO2022-multimodalIT #citation-copy").click( function() {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($("#EURO2022-multimodalIT .description").text()).select();
    document.execCommand("copy");
    $temp.remove();

    $(this).html("<i class=\"tiny material-icons left\">check</i>COPY TO CLIPBOARD");
    M.toast({html: 'COPY TO CLIPBOARD'});
  });
});

/*
 * CHI 2023: Perception Model
 */
$(function() {
  $("#CHI2023-perception-model #citation-bibtex").click( function() {
    if ($(this).text().includes("BIBTEX")) {
      $("#CHI2023-perception-model .description").html("@inproceedings{Park2023:Perceptionmodel,<br>&nbsp;&nbsp;author = {Park, Chaeyong and Kim, Jeongwoo and Choi, Seungmoon},<br>&nbsp;&nbsp;title = {Visuo-Haptic Crossmodal Shape Perception Model for Shape-Changing Handheld Controllers Bridged by Inertial Tensor},<br>&nbsp;&nbsp;year = {2023},<br>&nbsp;&nbsp;isbn = {9781450394215},<br>&nbsp;&nbsp;publisher = {Association for Computing Machinery},<br>&nbsp;&nbsp;address = {New York, NY, USA},<br>&nbsp;&nbsp;url = {https://doi.org/10.1145/3544548.3580724},<br>&nbsp;&nbsp;doi = {10.1145/3544548.3580724},<br>&nbsp;&nbsp;booktitle = {Proceedings of the 2023 CHI Conference on Human Factors in Computing Systems},<br>&nbsp;&nbsp;articleno = {699},<br>&nbsp;&nbsp;numpages = {18},<br>&nbsp;&nbsp;location = {Hamburg, Germany},<br>&nbsp;&nbsp;series = {CHI '23}<br>}");
      $(this).html("<i class=\"tiny material-icons left\">autorenew</i>CITATION");
    } else {
      $("#CHI2023-perception-model .description").text("Chaeyong Park, Jeongwoo Kim, and Seungmoon Choi. 2023. Visuo-haptic Crossmodal Shape Perception Model for Shape-Changing Handheld Controllers Bridged by Inertial Tensor. In Proceedings of the 2023 CHI Conference on Human Factors in Computing Systems (CHI '23). Association for Computing Machinery, New York, NY, USA, Article 699, 1–18. https://doi.org/10.1145/3544548.3580724");
      $(this).html("<i class=\"tiny material-icons left\">autorenew</i>BIBTEX");
    }
  });
});

$(function() {
  $("#CHI2023-perception-model #citation-copy").click( function() {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($("#CHI2023-perception-model .description").text()).select();
    document.execCommand("copy");
    $temp.remove();

    $(this).html("<i class=\"tiny material-icons left\">check</i>COPY TO CLIPBOARD");
    M.toast({html: 'COPY TO CLIPBOARD'});
  });
});

/*
 * ADOM 2023: O-EV
 */
$(function() {
  $("#ADOM2023-OEV #citation-bibtex").click( function() {
    if ($(this).text().includes("BIBTEX")) {
      $("#ADOM2023-OEV .description").html("@article{Lee2023:OEV,<br>&nbsp;&nbsp;title={Intrinsically Synchronized Flexible Visuo-Haptic Device Operated by Single External Electric Field},<br>&nbsp;&nbsp;author={Gilwoon Lee, Chaeyong Park, Doowon Park, Seungmoon Choi, and Unyong Jeong},<br>&nbsp;&nbsp;journal={Advanced Optical Materials},<br>&nbsp;&nbsp;volume={11},<br>&nbsp;&nbsp;number={7},<br>&nbsp;&nbsp;pages={2202515},<br>&nbsp;&nbsp;year={2023},<br>&nbsp;&nbsp;publisher={Wiley Online Library}<br>}");
      $(this).html("<i class=\"tiny material-icons left\">autorenew</i>CITATION");
    } else {
      $("#ADOM2023-OEV .description").text("Gilwoon Lee, Chaeyong Park, Doowon Park, Seungmoon Choi, and Unyong Jeong. Intrinsically Synchronized Flexible Visuo-Haptic Device Operated by Single External Electric Field. Advanced Optical Materials, Vol. 11, No. 7, 2202515. 2023");
      $(this).html("<i class=\"tiny material-icons left\">autorenew</i>BIBTEX");
    }
  });
});

$(function() {
  $("#ADOM2023-OEV #citation-copy").click( function() {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($("#ADOM2023-OEV .description").text()).select();
    document.execCommand("copy");
    $temp.remove();

    $(this).html("<i class=\"tiny material-icons left\">check</i>COPY TO CLIPBOARD");
    M.toast({html: 'COPY TO CLIPBOARD'});
  });
});

/*
 * WHC 2023: Perceived Simultaneity
 */
$(function() {
  $("#WHC2023-Perceptual-simultaneity #citation-bibtex").click( function() {
    if ($(this).text().includes("BIBTEX")) {
      $("#WHC2023-Perceptual-simultaneity .description").html("@inproceedings{Park2023:PerceivedSimultaneity,<br>&nbsp;&nbsp;author={Park, Chaeyong and Choi, Seungmoon},<br>&nbsp;&nbsp;booktitle={2023 IEEE World Haptics Conference (WHC)},<br>&nbsp;&nbsp;title={Perceptual Simultaneity Between Vibrotactile and Impact Stimuli},<br>&nbsp;&nbsp;year={2023},<br>&nbsp;&nbsp;pages={148-155},<br>&nbsp;&nbsp;keywords={Vibrations;Torso;Sensitivity;Design methodology;Vibration measurement;Rendering (computer graphics);Haptic interfaces;Vibration;Impact;Multimodal Haptic Rendering;Simultaneity Judgment;Psychometric Function},<br>&nbsp;&nbsp;doi={10.1109/WHC56415.2023.10224459}<br>}");
      $(this).html("<i class=\"tiny material-icons left\">autorenew</i>CITATION");
    } else {
      $("#WHC2023-Perceptual-simultaneity .description").text("Chaeyong Park and Seungmoon Choi. Perceptual Simultaneity Between Vibrotactile and Impact Stimuli. In Proceedings of the IEEE World Haptics Conference (Delft, Netherlands, July 10-13, 2023). WHC ’23. IEEE. pp. 148-155. DOI:https://doi.org/10.1109/WHC56415.2023.10224459");
      $(this).html("<i class=\"tiny material-icons left\">autorenew</i>BIBTEX");
    }
  });
});

$(function() {
  $("#WHC2023-Perceptual-simultaneity #citation-copy").click( function() {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($("#WHC2023-Perceptual-simultaneity .description").text()).select();
    document.execCommand("copy");
    $temp.remove();

    $(this).html("<i class=\"tiny material-icons left\">check</i>COPY TO CLIPBOARD");
    M.toast({html: 'COPY TO CLIPBOARD'});
  });
});