document.addEventListener('DOMContentLoaded', function () {
    function adjustCarouselHeight() {
        const carouselInner = document.querySelector('.carousel-inner');
        const activeSlide = document.querySelector('.carousel-item.active');
        const textMaxHeight = 400;

        if (activeSlide && carouselInner) {
            const caption = activeSlide.querySelector('.carousel-caption');

            // Get the height of the caption
            const textHeight = caption ? caption.scrollHeight : 0;

            // Adjust the height dynamically based on screen width
            if (window.innerWidth <= 320) {
                // For mobile (320px width)
                const extraSpace = textHeight > textMaxHeight ? 155 : 160;
                carouselInner.style.height = (Math.min(textHeight, textMaxHeight) + extraSpace) + 'px';
            } else {
                // For other screen sizes
                const extraSpace = textHeight > textMaxHeight ? 200 : 205;
                carouselInner.style.height = (Math.min(textHeight, textMaxHeight) + extraSpace) + 'px';
            }
        }
    }

    // Adjust height when the window resizes
    window.addEventListener('resize', adjustCarouselHeight);

    // Adjust height when the slide changes
    document.querySelector('.carousel').addEventListener('slid.bs.carousel', adjustCarouselHeight);

    // Initial height adjustment
    adjustCarouselHeight();
});
