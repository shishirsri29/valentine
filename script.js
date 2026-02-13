// --- 1. TYPING EFFECT ---
// This handles the romantic opening lines
var typed = new Typed('#typed-text', {
    strings: [
        `Hey ${personName}...`, 
        "Every moment with you is a dream...",
        "I wanted to ask you something special.",
        "Something from the heart.".
		"..."
    ],
    typeSpeed: 50,
    backSpeed: 30,
    showCursor: false,
    onComplete: (self) => {
        // Wait for 1000ms (1 second) before showing the question
        setTimeout(() => {
            const questionArea = document.getElementById('question');
            questionArea.classList.remove('hidden');
            questionArea.classList.add('fade-in'); // Adds the smooth fade effect
        }, 1000); 
    }
});

// --- 2. THE RUNAWAY "NO" BUTTON ---
// Makes the 'No' button move randomly when hovered
const noBtn = document.getElementById("noBtn");
noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 50);
    noBtn.style.position = "absolute";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
});

// --- 3. THE "YES" CELEBRATION ---
// Changes the card content and triggers confetti
document.getElementById("yesBtn").addEventListener("click", () => {
    const textContent = document.querySelector('.text-content');
    
    // Update the inner HTML but KEEP the timer structure so it keeps working
    textContent.innerHTML = `
        <h1>Yay! Thank you! Pooja!! ❤️</h1>
        <p>You've made me the happiest person ever.</p>
        <img src="catlove.gif" style="width:200px; border-radius:10px;">
        
        <div id="clock-container" class="timer-card">
            <p class="timer-label">Time spent loving you:</p>
            <div id="timer">
                <span id="days">00</span>d : 
                <span id="hours">00</span>h : 
                <span id="minutes">00</span>m : 
                <span id="seconds">00</span>s
            </div>
        </div>
    `;

    // Confetti Animation
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

// --- 4. THE TIMER LOGIC ---
// Calculates time since your anniversary
function updateTimer() {
    // Your anniversary: December 11, 2022
    const startDate = new Date("2022-12-11T00:00:00"); 
    const now = new Date();
    const diff = now - startDate;

    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const m = Math.floor((diff / (1000 * 60)) % 60);
    const s = Math.floor((diff / 1000) % 60);

    // Check if elements exist before updating (prevents errors during transitions)
    if(document.getElementById("days")) {
        document.getElementById("days").innerText = d;
        document.getElementById("hours").innerText = h.toString().padStart(2, '0');
        document.getElementById("minutes").innerText = m.toString().padStart(2, '0');
        document.getElementById("seconds").innerText = s.toString().padStart(2, '0');
    }
}
setInterval(updateTimer, 1000);
updateTimer(); 

// --- 5. THE MOUSE TRAIL LOGIC ---
// Creates floating hearts that follow the cursor
document.addEventListener('mousemove', (e) => {
    const heart = document.createElement('span');
    heart.innerHTML = '❤️'; 
    heart.className = 'heart-trail';
    
    heart.style.left = e.clientX + 'px';
    heart.style.top = e.clientY + 'px';
    
    const size = Math.random() * 15 + 10; 
    heart.style.fontSize = size + 'px';

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 1000);
});