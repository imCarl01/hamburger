document.getElementById("hamburger-icon").addEventListener("click", function() {
    document.getElementById("mobile-menu").classList.toggle("open");
});

document.getElementById("close-btn").addEventListener("click", function() {
    document.getElementById("mobile-menu").classList.remove("open");
});


