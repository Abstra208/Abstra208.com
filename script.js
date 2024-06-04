window.addEventListener('scroll', function() {
    const maintext = document.querySelector('#intro_text .left');

    if (window.scrollY > 172) {
        // Let the text scroll normally
        maintext.style.position = 'relative';
        maintext.style.top = '71.5%';
    } else {
        // Move the text to the center of the viewport
        maintext.style.position = 'fixed';
        maintext.style.top = '50%';
        maintext.style.left = '50%';
        maintext.style.transform = 'translate(-50%, -50%)';
    }
});