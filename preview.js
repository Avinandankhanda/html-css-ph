$('#name').keyup(function(){
   var name= $('#name').val().toUpperCase();
   $('#preview').text(name);
});
$('#theme').change(function(){
    var theme=$('#theme').val();
   $('#preview').css({
       'background':theme
   });
});