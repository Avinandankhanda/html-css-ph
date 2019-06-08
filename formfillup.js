$(document).on('change', 'select', function() {
    if($('#education').val()!="sob pass")
{
    $('#upload').remove();
}
else{
    $('form').append('<input type="file" name="upload-" id="upload">');
}
});