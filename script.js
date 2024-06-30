window.addEventListener('scroll', function() {
    const navigation = document.querySelector('nav');
    const navigationLeft = document.querySelector('nav .left');
    const navigationRight = document.querySelector('nav .right');

    const maxSize = 45; // Starting size for padding
    const minSize = 15; // Minimum size for padding
    const triggerScroll = 100; // Scroll distance to reach min padding
    const scrollRange = triggerScroll; // Define scrollRange for background color transition
    const ColorY = Math.min(window.scrollY, triggerScroll); // Limit scrollY to the maximum of the scroll range
    const opacity = ColorY / scrollRange;
    const backgroundColor = `rgba(0, 0, 0, ${opacity})`;

    // Calculate the current padding based on scroll position, ensuring it does not go below minSize
    let currentPadding = maxSize - ((maxSize - minSize) * (window.scrollY / triggerScroll));
    currentPadding = Math.max(currentPadding, minSize); // Ensure padding does not go below minSize

    // Apply the calculated padding to both left and right
    navigationLeft.style.padding = currentPadding + 'px';
    navigationRight.style.padding = currentPadding + 'px';
    navigation.style.backgroundColor = backgroundColor;
});