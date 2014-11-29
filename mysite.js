$(window).bind('scroll', function(e)
{
	parallaxScroll();
});
var desktop = true;
function parallaxScroll()
{
	var scrolled = $(window).scrollTop();
	$('#backgrounddiv').css('top', (0 - (scrolled * .5)) + 'px');
}
$('#nextpage').click(function()
{
	if ($(window).scrollTop() < $("#profileWithHeader").offset().top-10)
	{
		$('html, body').animate(
		{
			scrollTop: $('#profileWithHeader').offset().top
		}, 'slow');
	}
	else if ($(window).scrollTop() < $("#projectsWithHeader").offset().top-10)
	{
		$('html, body').animate(
		{
			scrollTop: $('#projectsWithHeader').offset().top
		}, 'slow');
	}
	else
	{
		$('html, body').animate(
		{
			scrollTop: $('#botTrans').offset().top
		}, 'slow');
	}
});
$('#prevpage').click(function()
{
	if ($(window).scrollTop() > $("#projectsWithHeader").offset().top+10)
	{
		$('html, body').animate(
		{
			scrollTop: $('#projectsWithHeader').offset().top
		}, 'slow');
	}
	else if ($(window).scrollTop() > $("#profileWithHeader").offset().top+10)
	{
		$('html, body').animate(
		{
			scrollTop: $('#profileWithHeader').offset().top
		}, 'slow');
	}
	else
	{
		$('html, body').animate(
		{
			scrollTop: $('#topTrans').offset().top
		}, 'slow');
	}
});
$(document).ready(function()
{
	var height = $("#firstPicture").height();
    $("#projectRow").height(height);
    $("#projectRow2").height(height);
	desktop = ($(window).width() >= 700)
	if(!desktop)
    {
    	document.getElementById("project1").style.marginLeft =  "-20px";
    	document.getElementById("project1").style.marginRight =  "-20px";
    	document.getElementById("project2").style.marginLeft =  "-20px";
    	document.getElementById("project2").style.marginRight =  "-20px";
    	document.getElementById("myimage").style.marginTop =  "0px";
    	$('#myimage').hide();
    }
	var scrollHeight = $("#scrolling").height();
	var windowHeight = $(window).height();
	var divHeight = (scrollHeight-windowHeight)/2;
	$("#backgrounddivmid").height(divHeight);
	
	var num = '1';
	for (var i = 0; i < 4; i++)
	{
		
		$('.project'+num+'slide').first().addClass('active'+num);
		$('.project'+num+'slide').hide();
		$('.active'+num).show();
		$('.project'+num+'describe').first().addClass('active'+num+'Describe');
		$('.project'+num+'describe').hide();
		if(!desktop) $('.active'+num+'Describe').show();

		if (num=='3') num = '4';
		if (num=='2') num = '3';
		if (num=='1') num = '2';
	};
});
function clickPic()
{
	$('.active1').removeClass('active1').addClass('oldActive');
	$('.active1Describe').removeClass('active1Describe').addClass('oldActiveDescribe');
	if ($('.oldActive').is(':last-child'))
	{
		$('.project1slide').first().addClass('active1');
		$('.project1describe').first().addClass('active1Describe');
	} else
	{
		$('.oldActive').next().addClass('active1');
		$('.oldActiveDescribe').next().addClass('active1Describe');
	}
	$('.oldActive').removeClass('oldActive');
	$('.oldActiveDescribe').removeClass('oldActiveDescribe');
	$('.project1slide').fadeOut();
	$('.project1describe').fadeOut();
	$('.active1').fadeIn();
	$('.active1Describe').fadeIn();
}
$('#project1').click(function()
{
	clickPic('1');
});
$('#project2').click(function()
{
	$('.active2').removeClass('active2').addClass('oldActive');
	$('.active2Describe').removeClass('active2Describe').addClass('oldActiveDescribe');
	if ($('.oldActive').is(':last-child'))
	{
		$('.project2slide').first().addClass('active2');
		$('.project2describe').first().addClass('active2Describe');
	} else
	{
		$('.oldActive').next().addClass('active2');
		$('.oldActiveDescribe').next().addClass('active2Describe');
	}
	$('.oldActive').removeClass('oldActive');
	$('.oldActiveDescribe').removeClass('oldActiveDescribe');
	$('.project2slide').fadeOut();
	$('.project2describe').fadeOut();
	$('.active2').fadeIn();
	$('.active2Describe').fadeIn();
});
$('#project1').mouseenter(function()
{
    if(desktop) {$('.active1Describe').fadeIn();}
}).mouseleave(function()
{
    if(desktop) {$('.active1Describe').fadeOut();}
});
$('#project2').mouseenter(function()
{
    if(desktop) {$('.active2Describe').fadeIn();}
}).mouseleave(function()
{
    if(desktop) {$('.active2Describe').fadeOut();}
});
$('#project3').mouseenter(function()
{
    if(desktop) {$('.active3Describe').fadeIn();}
}).mouseleave(function()
{
    if(desktop) {$('.active3Describe').fadeOut();}
});
$('#project4').mouseenter(function()
{
    if(desktop) {$('.active4Describe').fadeIn();}
}).mouseleave(function()
{
    if(desktop) {$('.active4Describe').fadeOut();}
});