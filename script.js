// EmailJS configuration: replace these three values with your EmailJS account details.
const EMAILJS_PUBLIC_KEY = "YOUR_EMAILJS_PUBLIC_KEY";
const EMAILJS_SERVICE_ID = "YOUR_EMAILJS_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = "YOUR_EMAILJS_TEMPLATE_ID";

document.getElementById("year").textContent = new Date().getFullYear();

const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");
menuToggle.addEventListener("click", () => nav.classList.toggle("open"));
nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => nav.classList.remove("open")));

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach(el => revealObserver.observe(el));

const sections = [...document.querySelectorAll("main section[id]")];
const navLinks = [...document.querySelectorAll(".nav-link")];
const sectionObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`));
    }
  });
}, { rootMargin: "-35% 0px -55% 0px" });
sections.forEach(section => sectionObserver.observe(section));

const pdfDialog = document.getElementById("pdfDialog");
document.querySelector('[data-preview="nsn"]').addEventListener("click", () => pdfDialog.showModal());
document.getElementById("closeDialog").addEventListener("click", () => pdfDialog.close());
pdfDialog.addEventListener("click", event => {
  if (event.target === pdfDialog) pdfDialog.close();
});

const form = document.getElementById("contactForm");
const status = document.getElementById("formStatus");
form.addEventListener("submit", async event => {
  event.preventDefault();
  if ([EMAILJS_PUBLIC_KEY, EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID].some(v => v.startsWith("YOUR_"))) {
    status.textContent = "To enable email sending, add your EmailJS Public Key, Service ID and Template ID in script.js.";
    status.style.color = "#e8bd76";
    return;
  }
  status.textContent = "Sending your message...";
  status.style.color = "#aeb8cb";
  try {
    emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });
    await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, form);
    status.textContent = "Message sent successfully. Thank you for reaching out!";
    status.style.color = "#79dca6";
    form.reset();
  } catch (error) {
    console.error("EmailJS error:", error);
    status.textContent = "Message could not be sent. Please check your EmailJS setup or email me directly.";
    status.style.color = "#f09a9a";
  }
});
