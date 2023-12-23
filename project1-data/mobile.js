// Check if the device is a mobile device
function isMobileDevice() {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
}

// Load the appropriate CSS file based on the device
window.onload = function() {
    var cssLink = document.getElementById('css-link');
    var image = document.getElementById('main-img');

    if (isMobileDevice()) {
        cssLink.href = './project1-data/style-mobile.css';
        image.src = './project1-data/images/image-product-mobile.jpg';

    } else {
        cssLink.href = './project1-data/style.css';
        image.src = './project1-data/images/image-product-desktop.jpg';
    }
};
