// Nav dropdown animation
$(document).ready(function () {
    $(".menu-text").click(function () {
        $(".top-layer-nav-list").slideToggle(200);
        $('#top-nav > ul li ul').hide();
    });
    // This animated the toggle.
    if ($('.target').is(':visible')) {}
});
$('#top-nav li ul').hide().removeClass('fallback');
$('#top-nav > .top-layer-nav-list > li').click(function () {
    $('#top-nav li ul').not($(this).children("ul").slideToggle(200)).hide();
    $('#top-nav li').not($(this).toggleClass('extended')).removeClass('extended');
});

