document.addEventListener("DOMContentLoaded", function () {

    // ==============================
    // AUTOMATIC FLOATING HEARTS
    // ==============================

    function createHeart() {
        const heart = document.createElement("div");

        heart.className = "floating-heart";
        heart.textContent = "💙";

        heart.style.left = Math.random() * 100 + "vw";
        heart.style.bottom = "-30px";
        heart.style.fontSize = (15 + Math.random() * 25) + "px";
        heart.style.animationDuration = (3 + Math.random() * 3) + "s";

        document.body.appendChild(heart);

        setTimeout(function () {
            heart.remove();
        }, 6000);
    }

    // Create hearts automatically
    setInterval(createHeart, 700);


    // ==============================
    // SMOOTH NAVIGATION
    // ==============================

    const navLinks = document.querySelectorAll(".nav-links a");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetID = this.getAttribute("href");
            const target = document.querySelector(targetID);

            if (target) {
                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth"
                });
            }

        });

    });

});