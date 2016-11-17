$(function(){
	$(".typed").typed({
    	stringsElement: $("#typed-strings"),
    	typeSpeed: 10,
    	startDelay: 500,
    	callback: function() {
    		$(".typed-cursor").css('display','none');
    		$(".divider").css('width','40%');
    		setTimeout(invokeFade,1600);
    	}
	});

	$("li").mouseenter(function(e) {
		$(this).children("hr").css({
			'width':'100%',
			'float':'left'
		});
	})

	$("li").mouseleave(function(e) {
		if (!$(this).children("hr").hasClass("active")) {
			$(this).children("hr").css({
				'width':'0%',
				'float':'right'
			});
		}
	})

	$("li").on('click', function(e) {
		$('li').each(function(i) {
			$(this).children("hr").removeClass('active');
		});
		$(this).children("hr").addClass('active');
		$('.nav-item hr').each(function(i) {
			if (!$(this).hasClass('active')) {
				$(this).css({
					'width':'0',
					'float':'right'
				});
			}
		})
	})
});

function invokeFade() {
	fadeIn(0, $('a'), 600);
}

function fadeIn(i, elements, duration, callback){
    if(i >= elements.length)
        $.isFunction(callback) && callback();
    else
        elements.eq(i).animate({color: 'rgba(0,0,0,1)'},duration, function(){
        	$('li hr').eq(i).removeClass('disabled');
        	fadeIn(i+1, elements, duration, callback);
        }).css("display","inline");        
}