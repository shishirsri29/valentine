// 1. Typing Effect
var typed = new Typed('#typed-text', {
    strings: [
        "Every moment with you is a dream...",
        "I wanted to ask you something special.",
        "Something from the heart."
    ],
    typeSpeed: 50,
    backSpeed: 30,
    onComplete: (self) => {
        document.getElementById('question').classList.remove('hidden');
    }
});

// 2. The Runaway "No" Button
const noBtn = document.getElementById("noBtn");
noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 50);
    noBtn.style.position = "absolute";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
});

// 3. The "Yes" Celebration
document.getElementById("yesBtn").addEventListener("click", () => {
    // Change content
    document.querySelector('.card').innerHTML = `
        <h1>Yay! See you soon! ❤️</h1>
        <p>You've made me the happiest person ever.</p>
        <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOHpueXh6eXpueXh6eXpueXh6eXpueXh6eXpueXh6eXpueXh6JnB2PTE/MDJ9IbxxvDUQM/giphy.gif" style="width:200px; border-radius:10px;">
    `;

    // Rose Petal Confetti
    var duration = 15 * 1000;
    var animationEnd = Date.now() + duration;
    var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min, max) { return Math.random() * (max - min) + min; }

    var interval = setInterval(function() {
        var timeLeft = animationEnd - Date.now();
        if (timeLeft <= 0) return clearInterval(interval);

        var particleCount = 50 * (timeLeft / duration);
        confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
        confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
    }, 250);
});
