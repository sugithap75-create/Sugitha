// Smooth scroll

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

  anchor.addEventListener("click", function(e) {

    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({

      behavior: "smooth"

    });

  });

});

// Contact form alert

document.querySelector(".contact-form").addEventListener("submit", e => {

  e.preventDefault();

  alert("Thanks for reaching out! (Demo form only)");

});