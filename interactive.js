$('#heard span').click(function(){
    $('#heard span').toggleClass('glyphicon-heart').toggleClass('glyphicon-heart-empty');
});
$('#show-password span').click(function(){
    $('#show-password span').toggleClass('glyphicon-eye-open').toggleClass('glyphicon-eye-close');
    if ($('#password').attr('type')!='password'){
        $('#password').attr('type','text')
    }
    else{
        $('#password').attr('type','password')
    }
});
