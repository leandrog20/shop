window.addEventListener("scroll", () => {
    const header = document.querySelector("header");

    header.classList.toggle("scrolled", window.scrollY > 0);
})

window.addEventListener("scroll", () => {
    const header = document.querySelector("header");

    if(window.scrollY > 600) {
        document.querySelector("header img").src = "img/logo2.svg";
    } else {
        document.querySelector("header img").src = "img/logo.svg";
    }

    header.classList.toggle("headerColor", window.scrollY > 690);
})