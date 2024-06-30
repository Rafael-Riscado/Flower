document.addEventListener("DOMContentLoaded", () => {
    const flowers = document.querySelectorAll(".flower");
    flowers.forEach((flower, index) => {
        flower.style.animationDelay = `${index * 0.5}s`;
    });
});
