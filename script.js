const frame = document.getElementById("frame");
const totalFrames = 216;

// Preload images for smoothness
const images = [];
for (let i = 1; i <= totalFrames; i++) {
  const img = new Image();
  img.src = `images/ezgif-frame-${String(i).padStart(3, "0")}.jpg`;
  images.push(img);
}

window.addEventListener("scroll", () => {
  requestAnimationFrame(updateFrame);
});

function updateFrame() {
  const scrollTop = window.scrollY;
  const maxScroll = document.body.scrollHeight - window.innerHeight;

  const scrollFraction = scrollTop / maxScroll;
  let frameIndex = Math.floor(scrollFraction * totalFrames);

  frameIndex = Math.min(totalFrames - 1, Math.max(0, frameIndex));

  frame.src = images[frameIndex].src;
}
