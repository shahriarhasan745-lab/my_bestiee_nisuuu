// Configuration
const config = {
  galleryPhotos: [
    "Screenshot 2026-07-19 002608.png",
    "Screenshot 2026-07-19 002622.png",
    "Screenshot 2026-07-19 002642.png",
    "Screenshot 2026-07-19 002654.png",
    "Screenshot 2026-07-19 002703.png",
    "Screenshot 2026-07-19 002717.png",
    "Screenshot 2026-07-19 002727.png",
    "Screenshot 2026-07-19 002735.png",
    "Screenshot 2026-07-19 002747.png",
    "Screenshot 2026-07-19 003607.png",
    "Screenshot 2026-07-19 003617.png",
    "Screenshot 2026-07-19 003627.png",
    "Screenshot 2026-07-19 003639.png",
    "Screenshot 2026-07-19 003648.png",
    "Screenshot 2026-07-19 003657.png",
    "Screenshot 2026-07-19 003708.png",
    "Screenshot 2026-07-19 003721.png",
    "Screenshot 2026-07-19 003730.png"
  ],
  letter: `Dear Nisa,

You are the most beautiful part of my life. 
Your smile makes every day brighter. 
Without you, this world feels incomplete.

Every moment spent with you is precious to me. 
You are my best friend, my happiness, and my peace.

I love you so much, Nisa. 
I will always be by your side.

With all my love,
Shahriar`
};

// Music Control
const music = document.getElementById('bg-music');
const musicBtn = document.getElementById('music-btn');

musicBtn.addEventListener('click', () => {
  if (music.paused) {
    music.play();
    musicBtn.textContent = '♫ Pause Music';
  } else {
    music.pause();
    musicBtn.textContent = '♫ Play Our Song';
  }
});

// Initialize Website
document.addEventListener('DOMContentLoaded', () => {
  
  // Populate Gallery
  const gallery = document.getElementById('gallery');
  config.galleryPhotos.forEach(src => {
    const div = document.createElement('div');
    div.innerHTML = `<img src="${src}" alt="memory">`;
    gallery.appendChild(div);
  });

  // Populate Love Letter
  document.getElementById('letter-text').innerHTML = config.letter.replace(/\n/g, '<br><br>');

  // GSAP Animations
  gsap.from("h1", { 
    y: 100, 
    opacity: 0, 
    duration: 1.5, 
    ease: "power4.out" 
  });
  
  gsap.from("#hero-photo", { 
    scale: 0.7, 
    opacity: 0, 
    duration: 1.8, 
    delay: 0.4 
  });
});
