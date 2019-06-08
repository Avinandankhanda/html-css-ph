console.log();
var phone=$('#num').val();
$('#name').click(function(){
    $('h1').text('enter your name');
    $('input').css({'background':'blue'});
    $('input').attr('placeholder','taratari');
    $('h1').after('<h1>hiiii....</h1>')
    $('form').remove();
});
