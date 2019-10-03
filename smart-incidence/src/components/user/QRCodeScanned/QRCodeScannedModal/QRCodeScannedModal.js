import jsQR from 'jsqr';

// Installieren für QR Code Scannen eines Bilds
// npm install jsqr --save  

// Bekommmt hochgeladenes Image
function searchQR(img){
    
    // Data und Auflösung noch aus img ziehen, wie kann man das als Image behandeln?
    const code = jsQR(ImageData, width, height);
    if (code){
        console.log("found QR code", code);
    }
}