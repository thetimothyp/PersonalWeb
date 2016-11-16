$(function(){
	$(".typed").typed({
    	stringsElement: $("#typed-strings"),
    	typeSpeed: 10,
    	startDelay: 500,
    	callback: function() {
    		$(".typed-cursor").delay(1220).fadeOut(100);
    	}
	});
});