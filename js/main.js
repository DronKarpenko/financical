$(document).ready(function() {

	// $("#advantages h2").waypoint(function() {
	// 	$("#advantages .condition-item").removeClass(".condition-item-off").addClass(".condition-item-on");
	// });

	$(".call-slider").slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		arrows: false,
		infinite: true
	});

	
	$(".review-slider").slick({
		slidesToScroll: 1,
		autoplay: true,
		arrows: false
	});

	$("header").on("click","a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 1500);
	});

	var waypointsvg = new Waypoint({

		element: $("#how_we_work"),
		handler: function(dir) {
			
			if (dir === "down") {

				$("#how_we_work .how_we_work-step").each(function(index) {
					var ths = $(this);
					setTimeout(function() {
						var myAnimation = new DrawFillSVG({
							elementId: "svg-step-" + index
						});
						ths.children(".step-inside").addClass("step-inside-on");
					}, 1000*index);
				});

			};
			this.destroy();
		},
		offset: '35%'
	});

});