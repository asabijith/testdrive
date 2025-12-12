// Create floating hearts background
function createFloatingHearts() {
    const container = document.getElementById('heartsContainer');
    const heartSymbols = ['❤️', '💕', '💖', '💗', '💝', '💓', '💞'];
    const butterflyGif = 'https://dl.dropbox.com/scl/fi/2u8j33dy17682nnvfshv6/AnimatedEmojies-512px-366.gif?rlkey=cjz2i4c4cyg8jtfrjuib6msu3&st=a53v60sj&dl=1';
    
    setInterval(() => {
        // Randomly choose between heart emoji or butterfly gif
        const useButterfly = Math.random() > 0.6; // 40% chance for butterfly
        
        if (useButterfly) {
            const butterfly = document.createElement('img');
            butterfly.className = 'floating-butterfly';
            butterfly.src = butterflyGif;
            butterfly.style.left = Math.random() * 100 + '%';
            butterfly.style.width = (Math.random() * 40 + 30) + 'px';
            butterfly.style.animationDuration = (Math.random() * 4 + 5) + 's';
            butterfly.style.animationDelay = Math.random() * 2 + 's';
            
            container.appendChild(butterfly);
            
            setTimeout(() => {
                butterfly.remove();
            }, 10000);
        } else {
            const heart = document.createElement('div');
            heart.className = 'heart';
            heart.textContent = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];
            heart.style.left = Math.random() * 100 + '%';
            heart.style.fontSize = (Math.random() * 20 + 15) + 'px';
            heart.style.animationDuration = (Math.random() * 3 + 4) + 's';
            heart.style.animationDelay = Math.random() * 2 + 's';
            
            container.appendChild(heart);
            
            setTimeout(() => {
                heart.remove();
            }, 8000);
        }
    }, 400);
}

// Navigate between screens
let currentScreen = 0;
const screens = ['introScreen', 'screen1', 'screen2', 'screen3', 'screen4', 'celebrationScreen'];

function nextScreen(screenIndex) {
    // Hide current screen
    document.getElementById(screens[currentScreen]).classList.remove('active');
    
    // Show next screen
    currentScreen = screenIndex;
    document.getElementById(screens[currentScreen]).classList.add('active');
    
    // Add special effects for certain screens
    if (currentScreen === 4) {
        // Proposal screen - add extra hearts
        createHeartBurst();
    }
}

// Create heart burst effect
function createHeartBurst() {
    const container = document.getElementById('heartsContainer');
    const butterflyGif = 'https://dl.dropbox.com/scl/fi/2u8j33dy17682nnvfshv6/AnimatedEmojies-512px-366.gif?rlkey=cjz2i4c4cyg8jtfrjuib6msu3&st=a53v60sj&dl=1';
    
    for (let i = 0; i < 25; i++) {
        setTimeout(() => {
            const useButterfly = Math.random() > 0.5;
            
            if (useButterfly) {
                const butterfly = document.createElement('img');
                butterfly.className = 'floating-butterfly';
                butterfly.src = butterflyGif;
                butterfly.style.left = Math.random() * 100 + '%';
                butterfly.style.width = (Math.random() * 50 + 35) + 'px';
                butterfly.style.animationDuration = '4s';
                container.appendChild(butterfly);
                
                setTimeout(() => butterfly.remove(), 6000);
            } else {
                const heart = document.createElement('div');
                heart.className = 'heart';
                heart.textContent = '💖';
                heart.style.left = Math.random() * 100 + '%';
                heart.style.fontSize = (Math.random() * 30 + 20) + 'px';
                heart.style.animationDuration = '4s';
                container.appendChild(heart);
                
                setTimeout(() => heart.remove(), 6000);
            }
        }, i * 100);
    }
}

// Handle Yes button
function handleYes() {
    nextScreen(5);
    createFireworks();
    createMassiveHeartExplosion();
    playConfetti();
}

// Move No button on hover (playful interaction)
function moveNoButton() {
    const noBtn = document.getElementById('noBtn');
    const maxX = window.innerWidth - noBtn.offsetWidth - 100;
    const maxY = window.innerHeight - noBtn.offsetHeight - 100;
    
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;
    
    noBtn.style.position = 'fixed';
    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
    noBtn.style.transition = 'all 0.3s ease';
}

// Create fireworks effect
function createFireworks() {
    const container = document.getElementById('fireworks');
    const colors = ['#ff6b6b', '#ee5a6f', '#f093fb', '#f5576c', '#38ef7d', '#11998e'];
    
    function createSingleFirework() {
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * (window.innerHeight * 0.5);
        
        for (let i = 0; i < 30; i++) {
            const particle = document.createElement('div');
            particle.className = 'firework';
            particle.style.left = x + 'px';
            particle.style.top = y + 'px';
            particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            
            const angle = (Math.PI * 2 * i) / 30;
            const velocity = 100 + Math.random() * 100;
            const xVel = Math.cos(angle) * velocity;
            const yVel = Math.sin(angle) * velocity;
            
            particle.style.setProperty('--x', xVel + 'px');
            particle.style.setProperty('--y', yVel + 'px');
            
            container.appendChild(particle);
            
            setTimeout(() => particle.remove(), 1500);
        }
    }
    
    // Create multiple fireworks
    for (let i = 0; i < 5; i++) {
        setTimeout(createSingleFirework, i * 300);
    }
    
    // Continue creating fireworks
    setInterval(() => {
        createSingleFirework();
    }, 1500);
}

// Create massive heart explosion
function createMassiveHeartExplosion() {
    const container = document.getElementById('heartsContainer');
    const heartSymbols = ['❤️', '💕', '💖', '💗', '💝', '💓', '💞', '💘', '💟'];
    const butterflyGif = 'https://dl.dropbox.com/scl/fi/2u8j33dy17682nnvfshv6/AnimatedEmojies-512px-366.gif?rlkey=cjz2i4c4cyg8jtfrjuib6msu3&st=a53v60sj&dl=1';
    
    for (let i = 0; i < 60; i++) {
        setTimeout(() => {
            const useButterfly = Math.random() > 0.6;
            
            if (useButterfly) {
                const butterfly = document.createElement('img');
                butterfly.className = 'floating-butterfly celebration-butterfly';
                butterfly.src = butterflyGif;
                butterfly.style.left = Math.random() * 100 + '%';
                butterfly.style.width = (Math.random() * 50 + 30) + 'px';
                butterfly.style.animationDuration = (Math.random() * 2 + 3) + 's';
                container.appendChild(butterfly);
                
                setTimeout(() => butterfly.remove(), 8000);
            } else {
                const heart = document.createElement('div');
                heart.className = 'heart';
                heart.textContent = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];
                heart.style.left = Math.random() * 100 + '%';
                heart.style.fontSize = (Math.random() * 40 + 25) + 'px';
                heart.style.animationDuration = (Math.random() * 2 + 3) + 's';
                container.appendChild(heart);
                
                setTimeout(() => heart.remove(), 8000);
            }
        }, i * 50);
    }
}

// Confetti effect
function playConfetti() {
    const colors = ['#ff6b6b', '#ee5a6f', '#f093fb', '#f5576c', '#38ef7d', '#11998e', '#ffd93d', '#ff9ff3'];
    
    for (let i = 0; i < 100; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.style.position = 'fixed';
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.top = '-10px';
            confetti.style.width = '10px';
            confetti.style.height = '10px';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
            confetti.style.zIndex = '1000';
            confetti.style.pointerEvents = 'none';
            
            document.body.appendChild(confetti);
            
            const fallDuration = Math.random() * 3 + 2;
            const drift = (Math.random() - 0.5) * 100;
            
            confetti.animate([
                { transform: `translateY(0) rotate(0deg) translateX(0)`, opacity: 1 },
                { transform: `translateY(${window.innerHeight}px) rotate(${Math.random() * 720}deg) translateX(${drift}px)`, opacity: 0 }
            ], {
                duration: fallDuration * 1000,
                easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
            });
            
            setTimeout(() => confetti.remove(), fallDuration * 1000);
        }, i * 30);
    }
}

// Add keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && currentScreen < 4) {
        nextScreen(currentScreen + 1);
    }
});

// Initialize
window.addEventListener('load', () => {
    createFloatingHearts();
    
    // Preload animations
    setTimeout(() => {
        document.getElementById('introScreen').classList.add('active');
    }, 100);
});