function generateBarCode()
{
    var nric = document.getElementById("text").value;
    var url = 'https://api.qrserver.com/v1/create-qr-code/?data=' + nric + '&amp;size=50x50';
    barcode.src = url;
}
function clickPress(event) {
    if (event.key == "Enter") {
        generateBarCode();
    }
}
