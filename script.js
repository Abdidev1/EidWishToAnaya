const terminalText = `> [SYSTEM_STARTUP]: Friendship_Core_v11.0
> [ANALYZING_HISTORY]: 2015 - 2026...
> [ERROR]: Recent conflict detected in 'Argument_Log.txt'.
> [PROCESS]: Patching friendship data...
> [STATUS]: Argument RESOLVED.
> [INTEGRITY]: 100% (STABLE).
> [ACTION]: Initialize 'Friendship_Stats' UI? [Y/N]`;

let i = 0;
const speed = 40; 
const typewriterElem = document.getElementById('typewriter');
const confirmBtn = document.getElementById('confirm-btn');

function typeWriter() {
    if (i < terminalText.length) {
        typewriterElem.innerHTML += terminalText.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    } else {
        confirmBtn.classList.remove('hidden');
    }
}

// Start the terminal
typeWriter();

// Handle Button Click & Transition
confirmBtn.addEventListener('click', () => {
    const terminal = document.getElementById('terminal-screen');
    terminal.classList.add('glitch');
    
    setTimeout(() => {
        terminal.classList.add('hidden');
        document.getElementById('wrapped-screen').classList.remove('hidden');
        startWrapped();
    }, 500);
});

// Wrapped Slide Logic
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const progressBar = document.getElementById('bar');

function startWrapped() {
    showSlide(0);
}

function showSlide(index) {
    if (index >= slides.length) return;

    slides.forEach(s => s.classList.remove('active'));
    slides[index].classList.add('active');

    // Progress bar animation
    progressBar.style.transition = 'none';
    progressBar.style.width = '0%';
    
    setTimeout(() => {
        progressBar.style.transition = 'width 4s linear';
        progressBar.style.width = '100%';
    }, 50);

    setTimeout(() => {
        if (index < slides.length - 1) {
            showSlide(index + 1);
        }
    }, 4000); // 4 seconds per slide
}
