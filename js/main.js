$(".menu-text").click(function () {
	$(".top-layer-nav-list").slideToggle(200);
    $('#top-nav > ul li ul').hide();
});
$('#top-nav > .top-layer-nav-list > li').click(function () {
    $('#top-nav li ul').not($(this).children("ul").slideToggle(200)).hide();
    $('#top-nav li').not($(this).toggleClass('extended')).removeClass('extended');
});