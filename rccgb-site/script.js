// Countdown Timer
const eventDate = new Date("2025-08-08T10:00:00").getTime();
const countdownEl = document.getElementById("countdown");
if (countdownEl) {
  setInterval(() => {
    const now = Date.now();
    const distance = eventDate - now;
    if (distance < 0) return countdownEl.innerText = "We're at the park!";
    const d = Math.floor(distance / (1000*60*60*24));
    const h = Math.floor((distance % (1000*60*60*24)) / (1000*60*60));
    const m = Math.floor((distance % (1000*60*60)) / (1000*60));
    const s = Math.floor((distance % (1000*60)) / 1000);
    countdownEl.innerText = `${d}d ${h}h ${m}m ${s}s`;
  }, 1000);
}