document.addEventListener("DOMContentLoaded", function() {
    const flowers = document.querySelectorAll('.flower');

    flowers.forEach(flower => {
        flower.addEventListener('mouseover', () => {
            flower.style.animationPlayState = 'paused';
        });

        flower.addEventListener('mouseout', () => {
            flower.style.animationPlayState = 'running';
        });
    });
});
