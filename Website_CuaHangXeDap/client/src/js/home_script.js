// Load Header & Footer vào các trang HTML
document.addEventListener("DOMContentLoaded", function() {
    fetch("../components/header.html")
        .then(response => response.text())
        .then(data => document.getElementById("header").innerHTML = data);

    fetch("../components/footer.html")
        .then(response => response.text())
        .then(data => document.getElementById("footer").innerHTML = data);
});

// Slider tự động
let index = 0;
const slides = document.querySelector(".slides");
function nextSlide() {
    index++;
    if (index >= slides.children.length) {
        index = 0;
    }
    slides.style.transform = `translateX(${-index * 100}%)`;
}
setInterval(nextSlide, 3000);
