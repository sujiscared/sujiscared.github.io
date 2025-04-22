document.addEventListener("DOMContentLoaded", () => {
  const centeredElement = document.getElementById("centered");
  const text = centeredElement.dataset.text || "SUJi °";
  const typingSpeed = 250; // ms
  const loopDelay = 2000;  // Delay before restarting loop

  let index = 0;

  function type() {
    if (index < text.length) {
      centeredElement.textContent += text.charAt(index);
      index++;
      setTimeout(type, typingSpeed);
    } else {
      setTimeout(() => {
        centeredElement.textContent = "";
        index = 0;
        type();
      }, loopDelay);
    }
  }

  // Start animation
  centeredElement.textContent = "";
  type();
});
