window.addEventListener('scroll', function() {
    const maintext = document.querySelector('#intro_text');

    if (window.scrollY > 200) {
        maintext.style.position = 'relative';
    } else {
        maintext.style.position = 'fixed';
    }
});