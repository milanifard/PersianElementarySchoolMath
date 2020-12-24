$('document').ready(function () {
	var pathname = window.location.pathname;
	var pageNumber = pathname.match(/\d/g);
	pageNumber.shift();
	pageNumber = pageNumber.join('');
	pageNumber = parseInt(pageNumber);
	$('.page-number-on-bottom').text(pageNumber);
	$('.page-number-on-bottom').css('font-family', 'zar');
	

	$('#rightArrow').on('click', function () {
		pageNumber++;
		window.location.replace("book_3_" + pageNumber + ".html");
	});

	$('#leftArrow').on('click', function () {
		pageNumber--;
		window.location.replace("book_3_" + pageNumber + ".html");;
	});

	// Page 76

	$('#page_76_questionOne').on('input', function (e) {
		// نکاه میکنیم ببینیم عدد کوچکتر که سه هست ضرب در چند میشه بزرگتر که دوازده هست و میشه چهار.
		let val = e.target.value;

		if ((val.includes('3') || val.includes('۳') || val.includes('سه')) && (val.includes('4') || val.includes('۴') || val.includes('چهار')) && (val.includes('12') || val.includes('۱۲') || val.includes('دوازده')) && (val.includes('عدد') || val.includes('عددی') || val.includes('چند')) && (val.includes('ضرب') || val.includes('در'))) {
			$('#page_76_questionOne').css('color', 'green');
		} else {
			$('#page_76_questionOne').css('color', 'red');
		}
	});

	$('#page_76_questionTwo').on('input', function (e) {
		// نکاه میکنیم ببینیم عدد کوچکتر که سه هست ضرب در چند میشه بزرگتر که دوازده هست و میشه چهار.
		let val = e.target.value;

		if ((val.includes('3') || val.includes('۳') || val.includes('سه')) && (val.includes('4') || val.includes('۴') || val.includes('چهار')) && (val.includes('8') || val.includes('۸') || val.includes('هشت')) && (val.includes('2') || val.includes('۲') || val.includes('دو')) && (val.includes('16') || val.includes('۱۶') || val.includes('شانزده') || val.includes('شونزده')) && (val.includes('جمع') || val.includes('علاوه') || val.includes('اضافه')) && (val.includes('ضرب') || val.includes('در')) && (val.includes('تقصیم') || val.includes('قسمت') || val.includes('بر'))) {
			$('#page_76_questionTwo').css('color', 'green');
		} else {
			$('#page_76_questionTwo').css('color', 'red');
		}
	});

	for (let index = 1; index < 7; index++) {
		$('#page_76_firstPattern_' + index).on('input', function () {
			if ($('#page_76_firstPattern_' + index).val() == (index + 3) * 6) {
				$('#page_76_firstPattern_' + index).css('color', 'green');
			} else {
				$('#page_76_firstPattern_' + index).css('color', 'red');
			}
		});
	}

	for (let index = 1; index < 7; index++) {
		$('#page_76_secondPattern_' + index).on('input', function () {
			if ($('#page_76_secondPattern_' + index).val() == (index + 3) * 7) {
				$('#page_76_secondPattern_' + index).css('color', 'green');
			} else {
				$('#page_76_secondPattern_' + index).css('color', 'red');
			}
		});
	}

	$('#page_76_questionTwoPartOne').on('input', function () {
		if (($('#page_76_questionTwoPartOne').val() == 6) || ($('#page_76_questionTwoPartOne').val() == 'شش') || ($('#page_76_questionTwoPartOne').val() == 'شیش')) {
			$('#page_76_questionTwoPartOne').css('color', 'green');
		} else {
			$('#page_76_questionTwoPartOne').css('color', 'red');
		}
	});
	
	$('#page_76_questionTwoPartTwo').on('input', function () {
		if (($('#page_76_questionTwoPartTwo').val() == 63)) {
			$('#page_76_questionTwoPartTwo').css('color', 'green');
		} else {
			$('#page_76_questionTwoPartTwo').css('color', 'red');
		}
	});

	$('#page_76_lastQuestion').on('input', function (e) {
		if (e.target.value.length >= 60) {
			$('#page_76_lastQuestion').css('color', 'green');
		} else {
			$('#page_76_lastQuestion').css('color', 'red');
		}
	});
	
	// Page 77

	$('#page_77_firstQuestionPartOne').on('input', function () {
		if ($('#page_77_firstQuestionPartOne').val() == 4) {
			$('#page_77_firstQuestionPartOne').css('color', 'green');
		} else {
			$('#page_77_firstQuestionPartOne').css('color', 'red');
		}
	});
	
	$('#page_77_firstQuestionPartTwo').on('input', function () {
		if ($('#page_77_firstQuestionPartTwo').val() == 4) {
			$('#page_77_firstQuestionPartTwo').css('color', 'green');
		} else {
			$('#page_77_firstQuestionPartTwo').css('color', 'red');
		}
	});
	
	$('#page_77_secondQuestionPartOne').on('input', function () {
		if ($('#page_77_secondQuestionPartOne').val() == 3) {
			$('#page_77_secondQuestionPartOne').css('color', 'green');
		} else {
			$('#page_77_secondQuestionPartOne').css('color', 'red');
		}
	});
	
	$('#page_77_secondQuestionPartTwo').on('input', function () {
		if ($('#page_77_secondQuestionPartTwo').val() == 6) {
			$('#page_77_secondQuestionPartTwo').css('color', 'green');
		} else {
			$('#page_77_secondQuestionPartTwo').css('color', 'red');
		}
	});
	
	$('#page_77_secondQuestionPartThree').on('input', function () {
		if ($('#page_77_secondQuestionPartThree').val() == 2) {
			$('#page_77_secondQuestionPartThree').css('color', 'green');
		} else {
			$('#page_77_secondQuestionPartThree').css('color', 'red');
		}
	});
	
	$('#page_77_secondQuestionPartFour').on('input', function () {
		if ($('#page_77_secondQuestionPartFour').val() == 10) {
			$('#page_77_secondQuestionPartFour').css('color', 'green');
		} else {
			$('#page_77_secondQuestionPartFour').css('color', 'red');
		}
	});
	
	$('#page_77_secondQuestionPartFive_1').on('input', function () {
		if ((($('#page_77_secondQuestionPartFive_1').val() == 3) || ($('#page_77_secondQuestionPartFive_1').val() == 7)) && ($('#page_77_secondQuestionPartFive_2').val() != $('#page_77_secondQuestionPartFive_1').val())) {
			$('#page_77_secondQuestionPartFive_1').css('color', 'green');
		} else {
			$('#page_77_secondQuestionPartFive_1').css('color', 'red');
		}
	});
	
	$('#page_77_secondQuestionPartFive_2').on('input', function () {
		if ((($('#page_77_secondQuestionPartFive_2').val() == 7) || ($('#page_77_secondQuestionPartFive_2').val() == 3)) && ($('#page_77_secondQuestionPartFive_1').val() != $('#page_77_secondQuestionPartFive_2').val())) {
			$('#page_77_secondQuestionPartFive_2').css('color', 'green');
		} else if ((($('#page_77_secondQuestionPartFive_1').val() == 3) && ($('#page_77_secondQuestionPartFive_2').val() == 7)) || (($('#page_77_secondQuestionPartFive_1').val() == 7) && ($('#page_77_secondQuestionPartFive_2').val() == 3))) {
			$('#page_77_secondQuestionPartFive_2').css('color', 'green');
		} else {
			$('#page_77_secondQuestionPartFive_2').css('color', 'red');
		}
	});
	
	$('#page_77_secondQuestionPartFive_3').on('input', function () {
		if ($('#page_77_secondQuestionPartFive_3').val() == 21) {
			$('#page_77_secondQuestionPartFive_3').css('color', 'green');
		} else {
			$('#page_77_secondQuestionPartFive_3').css('color', 'red');
		}
	});
	
	$('#page_77_secondQuestionPartSix_1').on('input', function () {
		if ((($('#page_77_secondQuestionPartSix_1').val() == 6) || ($('#page_77_secondQuestionPartSix_1').val() == 5)) && ($('#page_77_secondQuestionPartSix_2').val() != $('#page_77_secondQuestionPartSix_1').val())) {
			$('#page_77_secondQuestionPartSix_1').css('color', 'green');
		} else {
			$('#page_77_secondQuestionPartSix_1').css('color', 'red');
		}
	});
	
	$('#page_77_secondQuestionPartSix_2').on('input', function () {
		if ((($('#page_77_secondQuestionPartSix_2').val() == 5) || ($('#page_77_secondQuestionPartSix_2').val() == 6)) && ($('#page_77_secondQuestionPartSix_1').val() != $('#page_77_secondQuestionPartSix_2').val())) {
			$('#page_77_secondQuestionPartSix_2').css('color', 'green');
		} else if ((($('#page_77_secondQuestionPartSix_1').val() == 5) && ($('#page_77_secondQuestionPartSix_2').val() == 6)) || (($('#page_77_secondQuestionPartSix_1').val() == 6) && ($('#page_77_secondQuestionPartSix_2').val() == 5))) {
			$('#page_77_secondQuestionPartSix_2').css('color', 'green');
		} else {
			$('#page_77_secondQuestionPartSix_2').css('color', 'red');
		}
	});
	
	$('#page_77_secondQuestionPartSix_3').on('input', function () {
		if (($('#page_77_secondQuestionPartSix_3').val() == 30) || $('#page_77_secondQuestionPartSix_3').val() == '۳۰') {
			$('#page_77_secondQuestionPartSix_3').css('color', 'green');
		} else {
			$('#page_77_secondQuestionPartSix_3').css('color', 'red');
		}
	});

	$('#page_77_thirdQuestionPartOne').on('input', function () {
		if (($('#page_77_thirdQuestionPartOne').val() == 9) || $('#page_77_thirdQuestionPartOne').val() == '۹') {
			$('#page_77_thirdQuestionPartOne').css('color', 'green');
		} else {
			$('#page_77_thirdQuestionPartOne').css('color', 'red');
		}
	});

	$('#page_77_thirdQuestionPartTwo').on('input', function (e) {
		if (e.target.value.length > 40) {
			$('#page_77_thirdQuestionPartTwo').css('color', 'green');
		} else {
			$('#page_77_thirdQuestionPartTwo').css('color', 'red');
		}
	});
	
	$('#page_77_fourthQuestionPartOne').on('input', function () {
		if (($('#page_77_fourthQuestionPartOne').val() == 4) || ($('#page_77_fourthQuestionPartOne').val() == '۴')) {
			$('#page_77_fourthQuestionPartOne').css('color', 'green');
		} else {
			$('#page_77_fourthQuestionPartOne').css('color', 'red');
		}
	});
	
	$('#page_77_fourthQuestionPartTwo').on('input', function () {
		if (($('#page_77_fourthQuestionPartTwo').val() == 4) || ($('#page_77_fourthQuestionPartTwo').val() == '۴')) {
			$('#page_77_fourthQuestionPartTwo').css('color', 'green');
		} else {
			$('#page_77_fourthQuestionPartTwo').css('color', 'red');
		}
	});
	
	$('#page_77_fifthQuestion').on('input', function () {
		if (($('#page_77_fifthQuestion').val() == 3) || ($('#page_77_fifthQuestion').val() == '۳')) {
			$('#page_77_fifthQuestion').css('color', 'green');
		} else {
			$('#page_77_fifthQuestion').css('color', 'red');
		}
	});
	
	$('#page_77_sixthQuestion').on('input', function () {
		if (($('#page_77_sixthQuestion').val() == 5) || ($('#page_77_sixthQuestion').val() == '۵')) {
			$('#page_77_sixthQuestion').css('color', 'green');
		} else {
			$('#page_77_sixthQuestion').css('color', 'red');
		}
	});

	// Page 78
	
	$('#page_78_firstQuestionPartOne').on('input', function () {
		if (($('#page_78_firstQuestionPartOne').val() == 1) || ($('#page_78_firstQuestionPartOne').val() == '۱')) {
			$('#page_78_firstQuestionPartOne').css('color', 'green');
		} else {
			$('#page_78_firstQuestionPartOne').css('color', 'red');
		}
	});
	
	$('#page_78_firstQuestionPartTwo').on('input', function () {
		if (($('#page_78_firstQuestionPartTwo').val() == 4) || ($('#page_78_firstQuestionPartTwo').val() == '۴')) {
			$('#page_78_firstQuestionPartTwo').css('color', 'green');
		} else {
			$('#page_78_firstQuestionPartTwo').css('color', 'red');
		}
	});
	
	$('#page_78_firstQuestionPartThree').on('input', function () {
		if (($('#page_78_firstQuestionPartThree').val() == 12) || ($('#page_78_firstQuestionPartThree').val() == '۱۲')) {
			$('#page_78_firstQuestionPartThree').css('color', 'green');
		} else {
			$('#page_78_firstQuestionPartThree').css('color', 'red');
		}
	});
	
	$('#page_78_firstQuestionPartFour').on('input', function () {
		if (($('#page_78_firstQuestionPartFour').val() == 8) || ($('#page_78_firstQuestionPartFour').val() == '۸')) {
			$('#page_78_firstQuestionPartFour').css('color', 'green');
		} else {
			$('#page_78_firstQuestionPartFour').css('color', 'red');
		}
	});
	
	$('#page_78_secondQuestionPartOne').on('input', function () {
		if (($('#page_78_secondQuestionPartOne').val() == 27) || ($('#page_78_secondQuestionPartOne').val() == '۲۷')) {
			$('#page_78_secondQuestionPartOne').css('color', 'green');
		} else {
			$('#page_78_secondQuestionPartOne').css('color', 'red');
		}
	});
	
	$('#page_78_secondQuestionPartTwo').on('input', function () {
		if (($('#page_78_secondQuestionPartTwo').val() == 16) || ($('#page_78_secondQuestionPartTwo').val() == '۱۶')) {
			$('#page_78_secondQuestionPartTwo').css('color', 'green');
		} else {
			$('#page_78_secondQuestionPartTwo').css('color', 'red');
		}
	});
	
	$('#page_78_secondQuestionPartThree').on('input', function () {
		if (($('#page_78_secondQuestionPartThree').val() == 45) || ($('#page_78_secondQuestionPartThree').val() == '۴۵')) {
			$('#page_78_secondQuestionPartThree').css('color', 'green');
		} else {
			$('#page_78_secondQuestionPartThree').css('color', 'red');
		}
	});
	
	$('#page_78_secondQuestionPartFour_1').on('input', function () {
		if (($('#page_78_secondQuestionPartFour_1').val() == 45) || ($('#page_78_secondQuestionPartFour_1').val() == '۴۵')) {
			$('#page_78_secondQuestionPartFour_1').css('color', 'green');
		} else {
			$('#page_78_secondQuestionPartFour_1').css('color', 'red');
		}
	});
	
	$('#page_78_secondQuestionPartFour_2').on('input', function () {
		if (($('#page_78_secondQuestionPartFour_2').val() == 27) || ($('#page_78_secondQuestionPartFour_2').val() == '۲۷')) {
			$('#page_78_secondQuestionPartFour_2').css('color', 'green');
		} else {
			$('#page_78_secondQuestionPartFour_2').css('color', 'red');
		}
	});
	
	$('#page_78_secondQuestionPartFour_3').on('input', function () {
		if (($('#page_78_secondQuestionPartFour_3').val() == 72) || ($('#page_78_secondQuestionPartFour_3').val() == '۷۲')) {
			$('#page_78_secondQuestionPartFour_3').css('color', 'green');
		} else {
			$('#page_78_secondQuestionPartFour_3').css('color', 'red');
		}
	});
	
	$('#page_78_secondQuestionPartFive').on('input', function () {
		if (($('#page_78_secondQuestionPartFive').val() == 8) || ($('#page_78_secondQuestionPartFive').val() == '۸')) {
			$('#page_78_secondQuestionPartFive').css('color', 'green');
		} else {
			$('#page_78_secondQuestionPartFive').css('color', 'red');
		}
	});
});