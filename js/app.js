$(document).ready(function () {
	//variables
	const mainSection = $(".main-section");
	var earthFix = 5700 + $("header").innerHeight();

	$(".main-section").css({ marginTop: earthFix });

	if ($(window).scrollTop() >= earthFix) {
		$(".planet-section").removeClass("fix");
		$(".planet-section").css({ top: earthFix });
	} else {
		$(".planet-section").addClass("fix");
		$(".planet-section").css({ top: 0 });
	}

	anime({
		targets: ".stars div",
		translateY: -earthFix,
		duration: earthFix * 100,
		loop: true,
		easing: "linear",
	});
	var fix = 1000 - $("header").innerHeight();
	$(window).scroll(function () {
		//console.log($(window).scrollTop());
		show($(".info1"), 500, 6000);
		show($(".info2"), 1000, 6000);
		show($(".info3"), 1500, 6000);
		show($(".info4"), 2000, 6000);

		if ($(window).scrollTop() >= earthFix - fix) {
			$(".planet-section").removeClass("fix");
			
			$(".planet-section").css({ top: earthFix - fix });
		} else {
			$(".planet-section").addClass("fix");
			$(".planet-section").css({ top: 0 });
		}
	});

	
});

async function show(i, show, hide) {
	var scrollpos = $(window).scrollTop();
	console.log(scrollpos);

	if (scrollpos >= show && scrollpos <= hide) {
		$(i).show();
		$(i).css({ opacity: "1", transform: "translateY(50px)" });
	} else {
		$(i).css({ opacity: "0", transform: "translateY(100px)" });
		$(i).css({ transform: "translateY(0)" });
		$(i).hide();
	}
}
