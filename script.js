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
const data = [
    { img: "assets/pic1.jpg", text: "There is something effortlessly beautiful about the way you carry yourself in this picture. Your gentle smile, paired with the soft lighting and delicate flower filter, creates a peaceful atmosphere that feels warm and comforting." },
    { img: "assets/pic2.jpg", text: "Wrapped in a beautiful red saree, you bring a timeless charm that never goes out of style. The way you're looking away with that playful expression gives the photo a cinematic feel." },
    { img: "assets/pic3.jpg", text: "This picture feels like spring captured in a single frame. The soft pink outfit, the flower in your hand, and your calm expression blend together beautifully." },
    { img: "assets/pic4.jpg", text: "Against the warm evening sky, your smile becomes the brightest part of the picture. The floral outfit complements the soft sunset perfectly, creating a peaceful and elegant vibe." },
    { img: "assets/pic5.jpg", text: "There's something deeply artistic about this photograph. Looking toward the horizon with the city stretching behind you creates a feeling of quiet dreams and endless possibilities." },
    { img: "assets/pic6.jpg", text: "Golden sunlight has a way of making beautiful moments even more magical, and this picture proves it. The soft glow highlights your smile while creating a warm, comforting mood." },
    { img: "assets/pic7.jpg", text: "Wearing black with such confidence creates a striking contrast against the soft evening background. The elegance of your outfit, paired with your graceful posture, gives the image a bold yet sophisticated aesthetic." },
    { img: "assets/pic8.jpg", text: "There is something incredibly peaceful about the way you're looking down in this picture. The vibrant red saree adds warmth while your gentle expression keeps the mood soft and serene." },
    { img: "assets/pic9.jpg", text: "This photo perfectly balances elegance and happiness. The glowing lights behind you create a beautiful atmosphere, but your genuine smile remains the true highlight of the frame." },
    { img: "assets/pic10.jpg", text: "Looking through all these pictures together, one thing becomes clear: every photo carries its own unique mood, yet each one is connected by the same sense of grace and authenticity." }
];

const container = document.getElementById('diary-container');
data.forEach((item) => {
    container.innerHTML += `
        <section class="diary-page">
            <div class="diary-frame">
                <span class="flower-icon">🌸</span>
                <img src="${item.img}" alt="Nisa">
            </div>
            <div class="text-section">
                <p>${item.text}</p>
            </div>
        </section>
    `;
});
