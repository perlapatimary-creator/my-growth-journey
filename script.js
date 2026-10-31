/* =====================================
   MY GROWTH JOURNEY - COMMON JAVASCRIPT
===================================== */


// 1. ACTIVE SIDEBAR LINK

function setActiveNavigation() {

    const currentPage = window.location.pathname
        .split("/")
        .pop() || "index.html";

    const navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach(function(link) {

        const linkPage = link.getAttribute("href");

        link.classList.remove("active");

        if (linkPage === currentPage) {
            link.classList.add("active");
        }

    });

}


// 2. AUTOMATIC FOOTER YEAR

function updateFooterYear() {

    const footerText = document.querySelector(".footer span");

    if (footerText) {
        footerText.textContent =
            "My Growth Journey © " + new Date().getFullYear();
    }

}


// 3. BACK TO TOP BUTTON SUPPORT

function createBackToTopButton() {

    const button = document.createElement("button");

    button.type = "button";
    button.id = "backToTop";
    button.innerHTML = "↑";

    button.setAttribute("aria-label", "Back to top");

    button.style.cssText = `
        position: fixed;
        bottom: 25px;
        right: 25px;
        width: 45px;
        height: 45px;
        border: none;
        border-radius: 50%;
        background: #8D4E38;
        color: white;
        font-size: 22px;
        cursor: pointer;
        display: none;
        z-index: 999;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    `;

    document.body.appendChild(button);

    window.addEventListener("scroll", function() {

        if (window.scrollY > 300) {
            button.style.display = "block";
        } else {
            button.style.display = "none";
        }

    });

    button.addEventListener("click", function() {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}


// 4. INITIALIZE COMMON FEATURES

document.addEventListener("DOMContentLoaded", function() {

    setActiveNavigation();

    updateFooterYear();

    createBackToTopButton();

});