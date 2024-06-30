document.addEventListener("DOMContentLoaded", () => {
    const flowers = document.querySelectorAll(".flower");
    flowers.forEach((flower, index) => {
        flower.style.animationDelay = `${index * 0.5}s`;
        flower.style.width = "20px";
        flower.style.height = "20px";
    });
});
