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
			$('img').mouseenter(function(e) {
				$(this).attr('src', 'images/link_hover.svg');
			})

			$('img').mouseleave(function(e) {
				$(this).attr('src', 'images/link.svg');
			})
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
		<a target='_blank' href='http://supertoybox.co/'><img src='images/link.svg'></a> \
		<h6>Developer</h6> \
		<p>Super Toy Box is a development studio based in Lake Forest, CA. As a developer, I'll do \
		anything from building out a web app front end with <strong>HTML, CSS,</strong> and <strong>JavaScript</strong> \
		to creating immersive VR experiences in <strong>Unity</strong>. Other responsibilities include \
		automating internal build processes with <strong>bash</strong> and <strong>Node.js</strong> scripting, \
		coding up enterprise iOS applications, and taking out the trash.</p> \
		\
		<h5>iBASEt</h5> \
		<a target='_blank' href='http://www.ibaset.com/'><img src='images/link.svg'></a> \
		<h6>Graphic Designer</h6> \
		<p>As the sole graphic designer at iBASEt's headquarters in Foothill Ranch, CA, I was \
		responsible for the design needs of multiple departments. My duties would range from designing \
		small digital pieces like marketing materials for email and HubSpot campaigns, to leading the \
		branding design and execution for massive conferences like the company's annual user conference. \
		Tools used include <strong>Adobe Photoshop</strong> and <strong>Adobe Illustrator</strong>.</p> \
		\
		<h5 id='personal'>Personal Projects</h5><br> \
		<h6 class='personal first'>Writeboard</h6> \
		<a target='_blank' href='http://writeboard-app.herokuapp.com/'><img src='images/link.svg'></a> \
		<p>A simple real time chatting and drawing web application. Users can draw on a communal \
		whiteboard and chat in real time within their current channel. Written in <strong>HTML, CSS, \
		</strong>and <strong>JavaScript</strong> on the front end. Powered by <strong>Node.js</strong> \
		and <strong>MongoDB</strong> in the back end.</p> \
		\
		<h6 class='personal'>BattleGuides</h6> \
		<a target='_blank' href='http://battleguides.herokuapp.com/'><img src='images/link.svg'></a> \
		<p>A guide-crafting web application for the online battle arena game BattleRite. Users are given \
		a chapter-by-chapter template to fill in to create player guides for specific champions. Again, \
		Written in <strong>HTML, CSS,</strong> and <strong>JavaScript</strong> on the front end, and powered \
		by <strong>Node.js</strong> and <strong>MongoDB</strong> in the back end.</p> \
		\
		<h6 class='personal'>Dot</h6><img src='images/link.svg'> \
		<p>An experiment in movement, fluidity, and 2D physics. User controls a dot with a tail. Not much to \
		it. (Written in vanilla <strong>JavaScript</strong>, rendered with <strong>HTML5</strong> canvas.)</p>",

	contact : "<p>contact me.</p>"
}