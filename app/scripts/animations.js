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
		$('.container').css('overflow', 'visible');
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

	$("#about").on('click', function(e) {
		$('.info').fadeOut(300, function() {
			$('.info').html(info.about);
		}).fadeIn(300);
	})

	$("#experience").on('click', function(e) {
		$('.info').fadeOut(300, function() {
			$('.info').html(info.experience);
		}).fadeIn(300);
	})

	$("#contact").on('click', function(e) {		
        $('.info').fadeOut(300, function() {
			$('.info').html(info.contact);
		}).fadeIn(300);
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

var info = {
	about : "<p>Offering creative design solutions to solve business problems is what \
		I do best. I write in JavaScript, CSS, Java, and PHP. I also speak to databases and \
		make servers do stuff. I like working on scalability, performance, reusability, and \
		great user experiences. <br><br>As a designer and a developer, I write code that \
		conforms to industry standards and semantic best practices. I am able to transform \
		static artwork into pixel prefect, interactive and fully functional interfaces.</p>",

	experience : 
		"<h5 class='first-header'>Super Toy Box</h5> \
		<h6>Developer</h6> \
		<p>Super Toy Box is a development studio based in Lake Forest, CA. As a developer, I'll do \
		anything from building out a web app front end with <strong>HTML, CSS,</strong> and <strong>JavaScript</strong> \
		to creating immersive VR experiences in <strong>Unity</strong>. Other responsibilities include \
		automating internal build processes with <strong>bash</strong> and <strong>node</strong> scripting, \
		coding up enterprise iOS applications, and taking out the trash.</p> \
		\
		<h5>iBASEt</h5> \
		<h6>Graphic Designer</h6> \
		<p>As the sole graphic designer at iBASEt's headquarters in Foothill Ranch, CA, I was \
		responsible for the design needs of multiple departments. My duties would range from designing \
		small digital pieces like marketing materials for email and HubSpot campaigns, to leading the \
		branding design and execution for massive conferences like the company's annual user conference. \
		Tools used include <strong>Adobe Photoshop</strong> and <strong>Adobe Illustrator</strong></p>",

	contact : "<p>contact me.</p>"
}