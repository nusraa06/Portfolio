// ===========================
// NAVBAR SHADOW ON SCROLL
// ===========================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.boxShadow = "0 5px 20px rgba(0,0,0,0.15)";
        header.style.background = "#ffffff";

    } else {

        header.style.boxShadow = "none";
        header.style.background = "rgba(255,255,255,0.95)";

    }

});

// ===========================
// ACTIVE NAVBAR LINK
// ===========================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});

// ===========================
// CONTACT FORM
// ===========================

const form = document.querySelector("form");

form.addEventListener("submit", function(e){

    e.preventDefault();

    alert("Thank you! Your message has been sent.");

    form.reset();

});

// ===========================
// BUTTON HOVER EFFECT
// ===========================

const buttons = document.querySelectorAll("button");

buttons.forEach(button => {

    button.addEventListener("mouseenter", () => {

        button.style.transform = "scale(1.05)";

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform = "scale(1)";

    });

});

// ===========================
// SKILL CARD ANIMATION
// ===========================

const skills = document.querySelectorAll(".skill-card");

skills.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-10px)";
        card.style.transition = "0.4s";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0px)";

    });

});

// ===========================
// PROJECT CARD ANIMATION
// ===========================

const projects = document.querySelectorAll(".project-card");

projects.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-10px)";
        card.style.transition = "0.4s";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0px)";

    });

});
function sendEmail(){

    const templateParams = {
        name:document.getElementById("name").value,
        email:document.getElementById("email").value,
        //subject:document.querySelector("#subject").value,
        message:document.getElementById("message").value
    };
   
    emailjs
    .send("service_s9y69zy", "template_spg40ug", templateParams)
    .then(() => alert("Email sent!!").catch(() => alert("Email not sent!!")))
}
