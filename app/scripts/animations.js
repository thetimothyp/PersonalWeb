$(function(){
	$(".typed").typed({
    	stringsElement: $("#typed-strings"),
    	typeSpeed: 10,
    	startDelay: 500,
    	callback: function() {
    		$(".typed-cursor").css('display','none');
    		setTimeout(invokeFade,400);
    	}
	});
});

function invokeFade() {
	fadeIn(0, $('a'), 400);
}

function fadeIn(i, elements, duration, callback){
    if(i >= elements.length)
        $.isFunction(callback) && callback();
    else
        elements.eq(i).animate({color: 'rgba(0,0,0,1)'},duration, function(){
        	elements.eq(i).parent().removeClass('disabled');
        	fadeIn(i+1, elements, duration, callback);
        }).css("display","inline");        
}