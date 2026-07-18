const data = [
    { img: "assets/Screenshot 2026-07-19 002608.png", text: "There is something effortlessly beautiful about the way you carry yourself in this picture. Your gentle smile, paired with the soft lighting and delicate flower filter, creates a peaceful atmosphere that feels warm and comforting." },
    { img: "assets/Screenshot 2026-07-19 002622.png", text: "Wrapped in a beautiful red saree, you bring a timeless charm that never goes out of style. The way you're looking away with that playful expression gives the photo a cinematic feel." },
    { img: "assets/Screenshot 2026-07-19 002642.png", text: "This picture feels like spring captured in a single frame. The soft pink outfit, the flower in your hand, and your calm expression blend together beautifully." },
    { img: "assets/Screenshot 2026-07-19 002654.png", text: "Against the warm evening sky, your smile becomes the brightest part of the picture. The floral outfit complements the soft sunset perfectly, creating a peaceful and elegant vibe." },
    { img: "assets/Screenshot 2026-07-19 002703.png", text: "There's something deeply artistic about this photograph. Looking toward the horizon with the city stretching behind you creates a feeling of quiet dreams and endless possibilities." },
    { img: "assets/Screenshot 2026-07-19 002717.png", text: "Golden sunlight has a way of making beautiful moments even more magical, and this picture proves it. The soft glow highlights your smile while creating a warm, comforting mood." },
    { img: "assets/Screenshot 2026-07-19 002727.png", text: "Wearing black with such confidence creates a striking contrast against the soft evening background. The elegance of your outfit, paired with your graceful posture, gives the image a bold yet sophisticated aesthetic." },
    { img: "assets/Screenshot 2026-07-19 002735.png", text: "There is something incredibly peaceful about the way you're looking down in this picture. The vibrant red saree adds warmth while your gentle expression keeps the mood soft and serene." },
    { img: "assets/Screenshot 2026-07-19 002747.png", text: "This photo perfectly balances elegance and happiness. The glowing lights behind you create a beautiful atmosphere, but your genuine smile remains the true highlight of the frame." },
    { img: "assets/Screenshot 2026-07-19 003559.png", text: "Looking through all these pictures together, one thing becomes clear: every photo carries its own unique mood, yet each one is connected by the same sense of grace and authenticity." },
    { img: "assets/Screenshot 2026-07-19 003607.png", text: "There is a quiet sophistication in the way you pose, making the entire moment feel genuine rather than forced. You are the embodiment of grace." },
    { img: "assets/Screenshot 2026-07-19 003617.png", text: "You truly belong to the category of people who make every picture special simply by being themselves. Your presence brings warmth to every frame." },
    { img: "assets/Screenshot 2026-07-19 003627.png", text: "Some people take good pictures because of the camera, but you make every picture special just by existing. You are my forever inspiration." }
];

const container = document.getElementById('diary-container');

// কন্টেন্ট রেন্ডার করা
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
