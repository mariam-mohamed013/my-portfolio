/* script.js */
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = e.target.name.value;
  const email = e.target.email.value;
  const message = e.target.message.value;
  window.location.href = `mailto:mariammohamedd013@gmail.com?subject=Portfolio Contact from ${name}&body=${message} (${email})`;
});

function goTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}