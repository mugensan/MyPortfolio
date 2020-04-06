const Portfolio = function() {
	function makeWords() {
		var words = [
			{
				text: "Kotlin",
				weight: 12,
				// color: "Black"
			}, {
				text: "css3",
				weight: 8
			}, {
				text: "javascript",
				weight: 9
			}, {
				text: "Android Studio",
				weight: 10
			}, {
				text: "Algorithms",
				weight: 10.5
			}, {
				text: "Python",
				weight: 9
			}, {
				text: "Java",
				weight: 11
			},
			{
				text: "MVVM",
				weight: 8.5
			},
			{
				text: "RxJava",
				weight: 8.5
			},
			{
				text: "Retrofit",
				weight: 8.5
			},
			 {
				text: "Mobile Applications",
				weight: 9.5
			}
		];
		return words;
	}

	function makeWordCloud(words) {
		$('.teaching-domains').jQCloud(words, {delay: 120});
	}

	function displayWordCloud() {
		var count = 1;
		$(window).on('scroll', function() {
			var y_scroll_pos = window.pageYOffset;
			var scroll_pos_test = 2700; // set to whatever you want it to be
			var words = makeWords();
			if (y_scroll_pos > scroll_pos_test && count <= 1) {
				makeWordCloud(words);
				count++;
			}
		});
	}

	function designForm() {
		$("#my-modal form").addClass("my-form");
	}

	function typeAnimation() {
		Typed.new("#writing-text", {
			strings: [
				"Am a Android Developer. ","Full-Stack Web Developer.", "Love everything about code.", "Also teach programming to people.", "Problem Solver!"
			],
			// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
			stringsElement: null,
			// typing speed
			typeSpeed: 1,
			contentType: 'text',
			callback: function() {
				$("#writing-text").css({"color": "#fff", "background-color": "#C8412B"});
			},
			preStringTyped: function() {},
			onStringTyped: function() {}
		});
	}

	return {
		displayWordCloud: displayWordCloud,
		typeAnimation: typeAnimation
	}

}();


Portfolio.displayWordCloud();
Portfolio.typeAnimation();
