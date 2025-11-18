/* Typing text effect */
const roles = [
  "Full Stack Developer",
  "Java Backend Developer (Learning)",
  "Frontend Developer",
  "Problem Solver"
];
let idx = 0, char = 0, del = false;
const typing = document.getElementById("typing-text");

function type() {
  const text = roles[idx];
  typing.textContent = text.substring(0, char);

  if (!del && char < text.length) char++;
  else if (del && char > 0) char--;
  else { del = !del; if (!del) idx = (idx + 1) % roles.length }

  setTimeout(type, del ? 60 : 120);
}
type();

/* Scroll Active Nav */
const links = document.querySelectorAll(".nav-link");
window.addEventListener("scroll", () => {
  const pos = window.scrollY + 120;
  links.forEach(link => {
    const sec = document.querySelector(link.getAttribute("href"));
    if (pos >= sec.offsetTop && pos < sec.offsetTop + sec.offsetHeight) {
      links.forEach(l => l.classList.remove("active"));
      link.classList.add("active");
    }
  });
});

/* Mobile Menu */
document.getElementById("menu-toggle").onclick = () =>
  document.querySelector(".nav-links").classList.toggle("open");

/* Contact form message */
document.getElementById("contact-form")?.addEventListener("submit", e => {
  e.preventDefault();
  document.getElementById("form-status").textContent =
    "Message sent! I will get back to you soon.";
});

/* Footer Year */
document.getElementById("year").textContent = new Date().getFullYear();
