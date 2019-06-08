$('#thumbnail img').click(function(){
    var src=$(this).attr('src');
    $('#gallary>img').attr('src',src);
});
