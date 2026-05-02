onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);
};

window.addEventListener("click", () => {
  const music = document.getElementById("bg-music");
  music.play();
});

const music = document.getElementById("bg-music");

window.addEventListener("click", () => {
  music.muted = false;
  music.volume = 0.3; // soft volume
  music.play();
});
