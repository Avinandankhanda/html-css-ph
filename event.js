$('#button1').click(function(){
$('p').fadeOut();
});
$('#button2').click(function(){
   $('p').fadeIn();
});    
$('#button3').mouseenter(function(){
    $('p').slideUp(1200);
});
$('p').animate({
    'paddingLeft':"600px"
});


