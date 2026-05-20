// ANIMASI BINTANG CANVAS
const canvas = document.getElementById('star-canvas');
if (canvas) {
  const ctx = canvas.getContext('2d');
  let w = window.innerWidth, h = window.innerHeight;
  let stars = [];
  function resize() {
    w = window.innerWidth;
    h = window.innerHeight;
    canvas.width = w;
    canvas.height = h;
  }
  window.addEventListener('resize', resize);
  resize();

  for (let i = 0; i < 120; i++) {
    stars.push({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 1.6 + 0.3,
      s: Math.random() * 0.9 + 0.3
    });
  }

  function drawStars() {
    ctx.clearRect(0, 0, w, h);
    ctx.save();
    for (let s of stars) {
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = "#ffe599ee";
      ctx.shadowColor = "#eeffd7";
      ctx.shadowBlur = 4;
      ctx.fill();
      s.x += s.s;
      if (s.x > w + 5) s.x = -5;
    }
    ctx.restore();
    requestAnimationFrame(drawStars);
  }
  drawStars();
  canvas.style.cssText="position:fixed;top:0;left:0;width:100vw;height:100vh;pointer-events:none;z-index:0";
}

// JS Reading (card flip)
if (window.location.pathname.includes("reading.html")) {
  // Minimal demo, bisa tambah banyak kartu sesuka hati
  const tarotCards = [
    {
      name:"The Fool",
      image:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/RWS_Tarot_00_Fool.jpg/200px-RWS_Tarot_00_Fool.jpg",
      meaning:"Awal baru, potensi, perjalanan baru."
    },
    {
      name: "The Magician",
      image:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/RWS_Tarot_01_Magician.jpg/200px-RWS_Tarot_01_Magician.jpg",
      meaning: "Kekuatan manifestasi, sumber daya, kreativitas."
    },
    {
      name:"The Lovers",
      image:"https://upload.wikimedia.org/wikipedia/commons/0/0a/RWS_Tarot_06_Lovers.jpg",
      meaning:"Pilihan besar, relasi, harmoni."
    }
  ];
  let flipped = false;
  window.drawCard = function() {
    if (flipped) {
      document.getElementById("tarotCard").classList.remove("flipped");
      flipped = false;
      document.getElementById('drawn-img').src = "";
      document.getElementById('drawn-name').textContent = "";
      document.getElementById('drawn-meaning').textContent = "";
      return;
    }
    const i = Math.floor(Math.random()*tarotCards.length);
    const c = tarotCards[i];
    document.getElementById('drawn-img').src = c.image;
    document.getElementById('drawn-name').textContent = c.name;
    document.getElementById('drawn-meaning').textContent = c.meaning;
    document.getElementById("tarotCard").classList.add("flipped");
    flipped = true;
  }
}
