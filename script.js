// Game Hub Configuration
const config = {
  isEnglish: true,
  isMusicOn: false,
  clickCount: 0,
  translations: {
    english: {
      live: '🟢 LIVE NOW',
      youtube: '📺 YouTube',
      subscribe: 'Subscribe',
      facebook: '📘 Facebook',
      follow: 'Follow',
      discord: '💬 Discord',
      join: 'Join',
      language: '🌐 Switch to Bangla',
      musicOff: '🔊 Music',
      musicOn: '🔇 Music'
    },
    bengali: {
      live: '🟢 লাইভ এখন',
      youtube: '📺 ইউটিউব',
      subscribe: 'সাবস্ক্রাইব',
      facebook: '📘 ফেসবুক',
      follow: 'ফলো করুন',
      discord: '💬 ডিসকর্ড',
      join: 'যোগ দিন',
      language: '🌐 ভাষা পরিবর্তন',
      musicOff: '🔊 সঙ্গীত',
      musicOn: '🔇 সঙ্গীত'
    }
  }
};

// Initialize on page load
window.addEventListener('DOMContentLoaded', () => {
  createParticles(50);
  addHoverEffects();
  setupEventListeners();
  createGlitchEffect();
});

// Create floating particles
function createParticles(count) {
  for (let i = 0; i < count; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = Math.random() * 100 + '%';
    const size = 4 + Math.random() * 6;
    particle.style.width = size + 'px';
    particle.style.height = size + 'px';
    particle.style.animationDuration = (4 + Math.random() * 6) + 's';
    particle.style.animationDelay = Math.random() * 2 + 's';
    document.body.appendChild(particle);
  }
}

// Add hover effects to buttons
function addHoverEffects() {
  const buttons = document.querySelectorAll('.link-button, button');
  buttons.forEach(btn => {
    btn.addEventListener('mouseenter', function() {
      this.style.transition = 'all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)';
      playClick();
    });
    btn.addEventListener('mouseleave', function() {
      this.style.transition = 'all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)';
    });
  });
}

// Setup event listeners
function setupEventListeners() {
  const langBtn = document.getElementById('langBtn');
  const musicBtn = document.getElementById('musicBtn');
  
  if (langBtn) langBtn.addEventListener('click', toggleLanguage);
  if (musicBtn) musicBtn.addEventListener('click', toggleMusic);
}

// Play click sound
window.playClick = function() {
  const clickSound = document.getElementById('clickSound');
  if (clickSound) {
    clickSound.currentTime = 0;
    clickSound.play().catch(e => console.log('Audio play error:', e));
  }
};

// Toggle music
window.toggleMusic = function() {
  const bgMusic = document.getElementById('bgMusic');
  const musicBtn = document.getElementById('musicBtn');
  
  if (!bgMusic || !musicBtn) return;
  
  config.isMusicOn = !config.isMusicOn;
  
  if (config.isMusicOn) {
    bgMusic.play().catch(e => console.log('Music play error:', e));
    const text = config.isEnglish ? config.translations.english.musicOn : config.translations.bengali.musicOn;
    musicBtn.textContent = text;
  } else {
    bgMusic.pause();
    const text = config.isEnglish ? config.translations.english.musicOff : config.translations.bengali.musicOff;
    musicBtn.textContent = text;
  }
};

// Toggle language
window.toggleLanguage = function() {
  config.isEnglish = !config.isEnglish;
  const lang = config.isEnglish ? config.translations.english : config.translations.bengali;
  
  document.getElementById('liveText').textContent = lang.live;
  document.getElementById('ytText').textContent = lang.youtube;
  document.getElementById('ytBtn').textContent = lang.subscribe;
  document.getElementById('fbText').textContent = lang.facebook;
  document.getElementById('fbBtn').textContent = lang.follow;
  document.getElementById('dcText').textContent = lang.discord;
  document.getElementById('dcBtn').textContent = lang.join;
  document.getElementById('langBtn').textContent = lang.language;
  document.getElementById('musicBtn').textContent = config.isMusicOn ? lang.musicOn : lang.musicOff;
  
  playClick();
};

// Create glitch effect
function createGlitchEffect() {
  const title = document.getElementById('title');
  if (!title) return;
  
  setInterval(() => {
    if (Math.random() > 0.95) {
      title.classList.add('glitch');
      setTimeout(() => title.classList.remove('glitch'), 100);
    }
  }, 1000);
}

// Keyboard shortcuts
document.addEventListener('keydown', (event) => {
  if (event.key === 'm' || event.key === 'M') toggleMusic();
  if (event.key === 'l' || event.key === 'L') toggleLanguage();
});
// Game Hub Configuration
const config = {
  isEnglish: true,
  isMusicOn: false,
  clickCount: 0,
  translations: {
    english: {
      live: '🟢 LIVE NOW',
      youtube: '📺 YouTube',
      subscribe: 'Subscribe',
      facebook: '📘 Facebook',
      follow: 'Follow',
      discord: '💬 Discord',
      join: 'Join',
      language: '🌐 Switch to Bangla',
      musicOff: '🔊 Music',
      musicOn: '🔇 Music'
    },
    bengali: {
      live: '🟢 লাইভ এখন',
      youtube: '📺 ইউটিউব',
      subscribe: 'সাবস্ক্রাইব',
      facebook: '📘 ফেসবুক',
      follow: 'ফলো করুন',
      discord: '💬 ডিসকর্ড',
      join: 'যোগ দিন',
      language: '🌐 ভাষা পরিবর্তন',
      musicOff: '🔊 সঙ্গীত',
      musicOn: '🔇 সঙ্গীত'
    }
  }
};

// Initialize on page load
window.addEventListener('DOMContentLoaded', () => {
  createParticles(50);
  addHoverEffects();
  setupEventListeners();
  createGlitchEffect();
});

// Create floating particles
function createParticles(count) {
  for (let i = 0; i < count; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = Math.random() * 100 + '%';
    const size = 4 + Math.random() * 6;
    particle.style.width = size + 'px';
    particle.style.height = size + 'px';
    particle.style.animationDuration = (4 + Math.random() * 6) + 's';
    particle.style.animationDelay = Math.random() * 2 + 's';
    document.body.appendChild(particle);
  }
}

// Add hover effects to buttons
function addHoverEffects() {
  const buttons = document.querySelectorAll('.link-button, button');
  buttons.forEach(btn => {
    btn.addEventListener('mouseenter', function() {
      this.style.transition = 'all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)';
      playClick();
    });
    btn.addEventListener('mouseleave', function() {
      this.style.transition = 'all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)';
    });
  });
}

// Setup event listeners
function setupEventListeners() {
  const langBtn = document.getElementById('langBtn');
  const musicBtn = document.getElementById('musicBtn');
  
  if (langBtn) langBtn.addEventListener('click', toggleLanguage);
  if (musicBtn) musicBtn.addEventListener('click', toggleMusic);
}

// Play click sound
window.playClick = function() {
  const clickSound = document.getElementById('clickSound');
  if (clickSound) {
    clickSound.currentTime = 0;
    clickSound.play().catch(e => console.log('Audio play error:', e));
  }
};

// Toggle music
window.toggleMusic = function() {
  const bgMusic = document.getElementById('bgMusic');
  const musicBtn = document.getElementById('musicBtn');
  
  if (!bgMusic || !musicBtn) return;
  
  config.isMusicOn = !config.isMusicOn;
  
  if (config.isMusicOn) {
    bgMusic.play().catch(e => console.log('Music play error:', e));
    const text = config.isEnglish ? config.translations.english.musicOn : config.translations.bengali.musicOn;
    musicBtn.textContent = text;
  } else {
    bgMusic.pause();
    const text = config.isEnglish ? config.translations.english.musicOff : config.translations.bengali.musicOff;
    musicBtn.textContent = text;
  }
};

// Toggle language
window.toggleLanguage = function() {
  config.isEnglish = !config.isEnglish;
  const lang = config.isEnglish ? config.translations.english : config.translations.bengali;
  
  document.getElementById('liveText').textContent = lang.live;
  document.getElementById('ytText').textContent = lang.youtube;
  document.getElementById('ytBtn').textContent = lang.subscribe;
  document.getElementById('fbText').textContent = lang.facebook;
  document.getElementById('fbBtn').textContent = lang.follow;
  document.getElementById('dcText').textContent = lang.discord;
  document.getElementById('dcBtn').textContent = lang.join;
  document.getElementById('langBtn').textContent = lang.language;
  document.getElementById('musicBtn').textContent = config.isMusicOn ? lang.musicOn : lang.musicOff;
  
  playClick();
};

// Create glitch effect
function createGlitchEffect() {
  const title = document.getElementById('title');
  if (!title) return;
  
  setInterval(() => {
    if (Math.random() > 0.95) {
      title.classList.add('glitch');
      setTimeout(() => title.classList.remove('glitch'), 100);
    }
  }, 1000);
}

// Keyboard shortcuts
document.addEventListener('keydown', (event) => {
  if (event.key === 'm' || event.key === 'M') toggleMusic();
  if (event.key === 'l' || event.key === 'L') toggleLanguage();
});
