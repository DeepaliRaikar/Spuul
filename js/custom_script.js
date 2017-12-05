var extrasHandle = $(".extrasHandle");

	// var extrasHandleHeight = extrasHandle.height();
	// extrasHandle.css("top", "-"+extrasHandleHeight);
	extrasHandle.click(function(){
		if(!isScrolledIntoView($("footer"))){
		 	console.log("reached");
			$(".wrapper.bringToTop").css({
		 		'top': '-5% !important'
		 	});
			$(".wrapper").toggleClass("bringToTop");
		}
		else{
			$(".wrapper").toggleClass("bringToTop");

		}
		if($(".wrapper").hasClass("bringToTop")){
			$(".extrasHandle img").css({
				'transform': 'rotate(180deg)'
			})
			$("select").css("opacity","1");
		}
		else{
			$(".extrasHandle img").css({
				'transform': 'rotate(0deg)'
			})
			$('video').trigger('pause');
			$("select").css("opacity","0");
		}

	})
	$(window).scroll(function(){
		 if(isScrolledIntoView($("footer"))){
		 	$(".wrapper").css({
		 		'top': '56%'
		 	});
		 	$(".wrapper.bringToTop").css({
		 		'top': '-13% !important'
		 	});
		 	console.log("visible footer");

		 }
		 else if(!isScrolledIntoView($("footer"))){
		 	$(".wrapper").css({
		 		'top': '64%'
		 	});
		 	
		 	$(".wrapper.bringToTop").css({
		 		'top': '-5% !important'
		 	});

		 	if($(".wrapper").hasClass("bringToTop")){
		 		$(".wrapper").toggleClass("bringToTop");
		 		$(".extrasHandle img").css({
					'transform': 'rotate(0deg)'
				});
				$("select").css("opacity","0");
		 	}
		 	console.log("not visible  footer");

		 }
	});
	
	function isScrolledIntoView(elem)
	{
	    var docViewTop = $(window).scrollTop();
	    var docViewBottom = docViewTop + $(window).height();

	    var elemTop = $(elem).offset().top;
	    var elemBottom = elemTop + $(elem).height();

	    return ((elemTop <= docViewBottom) && (elemTop >= docViewTop));
	}
	$(".videoPlayer").click(function(){
		$(".videoPlayer").trigger('pause');
		$(this).trigger('play');
	})