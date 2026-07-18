// Configuratioconst photos = [
  "Screenshot 2026-07-19 002608.png","Screenshot 2026-07-19 002622.png",
  "Screenshot 2026-07-19 002642.png","Screenshot 2026-07-19 002654.png",
  "Screenshot 2026-07-19 002703.png","Screenshot 2026-07-19 002717.png",
  "Screenshot 2026-07-19 002727.png","Screenshot 2026-07-19 002735.png",
  "Screenshot 2026-07-19 002747.png","Screenshot 2026-07-19 003559.png",
  "Screenshot 2026-07-19 003607.png","Screenshot 2026-07-19 003617.png",
  "Screenshot 2026-07-19 003627.png","Screenshot 2026-07-19 003639.png",
  "Screenshot 2026-07-19 003648.png","Screenshot 2026-07-19 003657.png",
  "Screenshot 2026-07-19 003708.png","Screenshot 2026-07-19 003721.png",
  "Screenshot 2026-07-19 003730.png"
];

document.addEventListener('DOMContentLoaded', () => {
  const gallery = document.getElementById('gallery');
  photos.forEach(src => {
    const div = document.createElement('div');
    div.className = "frame";
    div.innerHTML = `<img src="${src}" class="w-full">`;
    gallery.appendChild(div);
  });

  // Animations
  gsap.from("h1, h2", { y: 60, opacity: 0, duration: 1.2, stagger: 0.2 });
  gsap.from(".frame", { scale: 0.85, opacity: 0, duration: 1, stagger: 0.15 });

  // Music
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
});
