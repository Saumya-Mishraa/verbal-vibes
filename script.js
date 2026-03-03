// 🌟 Navbar scroll effect
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  header.classList.toggle("scrolled", window.scrollY > 50);
});

// 🍔 Hamburger menu toggle
const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector("nav");

hamburger.addEventListener("click", () => {
  nav.classList.toggle("active");
  hamburger.classList.toggle("open");
});

// Close nav when clicking a link (on mobile)
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");
    hamburger.classList.remove("open");
  });
});

// ✨ Initialize AOS (Animate On Scroll)
AOS.init({
  duration: 1000, // animation speed
  once: true,     // animate only once
  offset: 100     // distance before triggering
});
const modal = document.getElementById("authModal");
const loginBtn = document.getElementById("loginBtn");
const signupBtn = document.getElementById("signupBtn");
const closeBtn = document.querySelector(".close");

const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");
const toSignup = document.getElementById("toSignup");
const toLogin = document.getElementById("toLogin");

// Open modal with Login form
loginBtn.onclick = () => {
  modal.style.display = "block";
  loginForm.style.display = "block";
  signupForm.style.display = "none";
}

// Open modal with Signup form
signupBtn.onclick = () => {
  modal.style.display = "block";
  loginForm.style.display = "none";
  signupForm.style.display = "block";
}

// Close modal
closeBtn.onclick = () => {
  modal.style.display = "none";
}

// Switch forms inside modal
toSignup.onclick = () => {
  loginForm.style.display = "none";
  signupForm.style.display = "block";
}

toLogin.onclick = () => {
  loginForm.style.display = "block";
  signupForm.style.display = "none";
}

// Close modal on clicking outside
window.onclick = (e) => {
  if(e.target == modal) {
    modal.style.display = "none";
  }
}

