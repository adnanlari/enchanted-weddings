const countdownButton = document.getElementById("countdown-toggle");
const countdownElement = document.getElementById("countdown");
const revealElements = document.querySelectorAll(".reveal");

function updateCountdown() {
  const weddingDate = new Date("2026-12-20T18:30:00+05:30");
  const now = new Date();
  const diff = weddingDate - now;

  if (diff <= 0) {
    countdownElement.textContent = "The celebration has begun.";
    return;
  }

  const totalHours = Math.floor(diff / (1000 * 60 * 60));
  const days = Math.floor(totalHours / 24);
  const hours = totalHours % 24;

  countdownElement.textContent = `${days} days and ${hours} hours to go.`;
}

if (countdownButton && countdownElement) {
  countdownButton.addEventListener("click", () => {
    updateCountdown();
  });
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      }
    });
  },
  {
    threshold: 0.18,
  }
);

revealElements.forEach((element) => observer.observe(element));
