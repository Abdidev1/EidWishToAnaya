const terminalText = `> [SYSTEM_STARTUP]: Friendship_Core_v11.0
> [ANALYZING_HISTORY]: 2015 - 2026...
> [ERROR]: Recent conflict detected in 'Argument_Log.txt'.
> [PROCESS]: Patching friendship data...
> [STATUS]: Argument RESOLVED.
> [INTEGRITY]: 100% (STABLE).
> [ACTION]: Initialize 'Friendship_Stats' UI? [Y/N]`;

let i = 0;
const typewriterElem = document.getElementById('typewriter');
const confirmBtn = document.getElementById('confirm-btn');

function typeWriter() {
    if (i < terminalText.length) {
        typewriterElem.innerHTML += terminalText.charAt(i);
        i++;
        setTimeout(typeWriter, 35);
    } else {
        confirmBtn.classList.remove('hidden');
    }
}

typeWriter();

confirmBtn.addEventListener('click', () => {
    confirmBtn.classList.add('hidden');
    document.getElementById('crash-sequence').classList.remove('hidden');
    const terminal = document.getElementById('terminal-screen');
    
    setTimeout(() => { terminal.classList.add('glitch'); }, 400);

    setTimeout(() => {
        terminal.classList.add('hidden');
        document.getElementById('wrapped-screen').classList.remove('hidden');
        startWrapped();
    }, 1200);
});

const slides = document.querySelectorAll('.slide');
const progressBar = document.getElementById('bar');

function startWrapped() {
    showSlide(0);
}

function showSlide(index) {
    if (index >= slides.length) return;

    slides.forEach(s => s.classList.remove('active'));
    slides[index].classList.add('active');
    
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
    }, 4000);
}
