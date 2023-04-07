function generateBarCode()
{
    var nric = $('#text').val();
    var url = 'https://api.qrserver.com/v1/create-qr-code/?data=' + nric + '&amp;size=50x50';
    $('#barcode').attr('src', url);
}
function clickPress(event) {
    if (event.key == "Enter") {
        generateBarCode();
    }
}
