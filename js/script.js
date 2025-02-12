const text = "SUJi °";
const typingSpeed = 250; // Adjust typing speed (ms)
let a = 0;

function type() {
  const centeredElement = document.getElementById("centered");
  if (a === 0) centeredElement.textContent = ""; // Clear before typing

  if (a < text.length) {
    centeredElement.textContent += text.charAt(a);
    a++;
    setTimeout(type, typingSpeed);
  }
}

// Ensure script runs when DOM is fully loaded
document.addEventListener("DOMContentLoaded", type);
