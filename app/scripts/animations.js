$(function(){
	var active;

	$('.typed').typed({
    	stringsElement: $('#typed-strings'),
    	typeSpeed: 10,
    	startDelay: 500,
    	callback: function() {
    		$('.typed-cursor').css('display','none');
    		$('.divider').css('width','40%');
    		setTimeout(invokeFade,1600);
    	}
	});

	$('li').mouseenter(function(e) {
		$(this).children('hr').css({
			'width':'100%',
			'float':'left'
		});
	})

	$('li').mouseleave(function(e) {
		if (!$(this).children('hr').hasClass('active')) {
			$(this).children('hr').css({
				'width':'0%',
				'float':'right'
			});
		}
	})

	$('li').on('click', function(e) {
		$('.container').css('overflow', 'visible');
		$('li').each(function(i) {
			$(this).children('hr').removeClass('active');
		});
		$(this).children('hr').addClass('active');
		active = $(this).index();
		$('.nav-item hr').each(function(i) {
			if (!$(this).hasClass('active')) {
				if (active > $(this).parent().index()) {
					$(this).css({
						'width':'0',
						'float':'right'
					});
				} else {
					$(this).css({
						'width':'0',
						'float':'left'
					});
				}
			}
		})
	})

	$('#about').on('click', function(e) {
		$('.info').fadeOut(300, function() {
			$('.info').html(info.about);
		}).fadeIn(300);
	})

	$('#experience').on('click', function(e) {
		$('.info').fadeOut(300, function() {
			$('.info').html(info.experience);
			$('.info img').mouseenter(function(e) {
				$(this).attr('src', 'images/link_hover.svg');
			})

			$('.info img').mouseleave(function(e) {
				$(this).attr('src', 'images/link.svg');
			})
		}).fadeIn(300);
	})

	$('#skillset').on('click', function(e) {		
        $('.info').fadeOut(300, function() {
			$('.info').html(info.skillset);
		}).fadeIn(300, function() {
			$('.skills h5').each(function(i) {
				var skill = $(this).text().replace(/[.\s]+/g, '');
				$('.rating-fill')[i].style.width = skills[skill];
			})
		});
	})

	$('#contact').on('click', function(e) {		
        $('.info').fadeOut(300, function() {
			$('.info').html(info.contact);
		}).fadeIn(300);
	})
});

function invokeFade() {
	fadeIn(0, $('a'), 400);
}

function fadeIn(i, elements, duration, callback){
    if(i >= elements.length)
        $.isFunction(callback) && callback();
    else
        elements.eq(i).animate({color: 'rgba(0,0,0,1)'},duration, function(){
        	$('li hr').eq(i).removeClass('disabled');
        	fadeIn(i+1, elements, duration, callback);
        }).css('display','inline');
}

var info = {
	about : '<p>Hello there! I\'m Tim Park, a designer and developer currently living \
		and working in Orange County, CA. Finishing a B.S in Computer Science at UC Irvine \
		this December 2016, I already have a fair bit of experience; my past positions include \
		in-house marketing designer for the UC Irvine Student Affairs Office, iBASEt, Givology, and \
		most recently, developer for Super Toy Box.<br><br>I have a passion for clean designs and \
		readable code, using the classic trifecta of HTML, CSS, and JavaScript to write out front ends \
		and hooking them up to databases and server logic with MongoDB and Node.js. As both designer and \
		developer, I construct seemless marriages between design and implementation.<br><br>Interested \
		working together? <a href=\'mailto:thetimothyp@gmail.com\' id=\'contact-body\'><strong>Feel free to reach out!</strong></a></p>',

	experience : 
		'<h5 class=\'first-header\'>Super Toy Box</h5> \
		<a target=\'_blank\' href=\'http://supertoybox.co/\'><img src=\'images/link.svg\'></a> \
		<h6>Developer</h6> \
		<p>Super Toy Box is a development studio based in Lake Forest, CA. As a developer, I\'ll do \
		anything from building out a web app front end with <strong>HTML, CSS,</strong> and <strong>JavaScript</strong> \
		to creating immersive VR experiences in <strong>Unity</strong>. Other responsibilities include \
		automating internal build processes with <strong>bash</strong> and <strong>Node.js</strong> scripting, \
		coding up enterprise iOS applications, and taking out the trash.</p> \
		\
		<h5>iBASEt</h5> \
		<a target=\'_blank\' href=\'http://www.ibaset.com/\'><img src=\'images/link.svg\'></a> \
		<h6>Graphic Designer</h6> \
		<p>As the sole graphic designer at iBASEt\'s headquarters in Foothill Ranch, CA, I was \
		responsible for the design needs of multiple departments. My duties would range from designing \
		small digital pieces like marketing materials for email and HubSpot campaigns, to leading the \
		branding design and execution for massive conferences like the company\'s annual user conference. \
		Tools used include <strong>Adobe Photoshop</strong> and <strong>Adobe Illustrator</strong>.</p> \
		\
		<h5 id=\'personal\'>Personal Projects</h5><br> \
		<h6 class=\'personal first\'>Writeboard</h6> \
		<a target=\'_blank\' href=\'http://writeboard-app.herokuapp.com/\'><img src=\'images/link.svg\'></a> \
		<p>A simple real time chatting and drawing web application. Users can draw on a communal \
		whiteboard and chat in real time within their current channel. Written in <strong>HTML, CSS, \
		</strong>and <strong>JavaScript</strong> on the front end. Powered by <strong>Node.js</strong> \
		and <strong>MongoDB</strong> in the back end.</p> \
		\
		<h6 class=\'personal\'>BattleGuides</h6> \
		<a target=\'_blank\' href=\'http://battleguides.herokuapp.com/\'><img src=\'images/link.svg\'></a> \
		<p>A guide-crafting web application for the online battle arena game BattleRite. Users are given \
		a chapter-by-chapter template to fill in to create player guides for specific champions. Again, \
		Written in <strong>HTML, CSS,</strong> and <strong>JavaScript</strong> on the front end, and powered \
		by <strong>Node.js</strong> and <strong>MongoDB</strong> in the back end.</p> \
		\
		<h6 class=\'personal\'>Dot</h6><img src=\'images/link.svg\'> \
		<p>An experiment in movement, fluidity, and 2D physics. User controls a dot with a tail. Not much to \
		it. (Written in vanilla <strong>JavaScript</strong>, rendered with <strong>HTML5</strong> canvas.)</p>',

	skillset : '<div class=\'skills\'> \
			<h5 class=\'first-header\'>HTML</h5> \
			<h5>CSS</h5> \
			<h5>JAVASCRIPT</h5> \
			<h5>MONGODB</h5> \
			<h5>NODE.JS</h5> \
			<h5>ADOBE CREATIVE SUITE</h5> \
		</div> \
		<div class=\'skill-bar\'> \
			<div class=\'rating\'></div> \
			<div class=\'rating\'></div> \
			<div class=\'rating\'></div> \
			<div class=\'rating\'></div> \
			<div class=\'rating\'></div> \
			<div class=\'rating\'></div> \
		</div> \
		<div class=\'skill-bar\'> \
			<div class=\'rating-fill\' id=\'HTML\'></div> \
			<div class=\'rating-fill\' id=\'CSS\'></div> \
			<div class=\'rating-fill\' id=\'JAVASCRIPT\'></div> \
			<div class=\'rating-fill\' id=\'MONGODB\'></div> \
			<div class=\'rating-fill\' id=\'NODEJS\'></div> \
			<div class=\'rating-fill\' id=\'ADOBECREATIVESUITE\'></div> \
		</div>',

	contact : '<h5 class=\'first-header email\'>GET IN TOUCH</h5> \
		<a href=\'mailto:thetimothyp@gmail.com\' class=\'email\'>thetimothyp@gmail.com</a><br><br> \
		<h5 class=\'email\'>FROM THE SOURCE</h5> \
		<a href=\'https://github.com/timothsp\' target=\'_blank\' class=\'email\'>https://github.com/timothsp</a>'
}

var skills = {
	HTML : '90%',
	CSS : '90%',
	JAVASCRIPT : '90%',
	MONGODB : '70%',
	NODEJS : '80%',
	ADOBECREATIVESUITE : '80%'
}