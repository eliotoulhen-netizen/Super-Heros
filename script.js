const heros = [
  "⚡ Captain Volt",
  "🌑 Nyx",
  "🔮 Arcanor",
  "🦾 Iron Titan",
  "🐉 Dragon Fury",
  "🌊 Tidal Queen"
];

document.getElementById("quizBtn").addEventListener("click", () => {
  const r = heros[Math.floor(Math.random() * heros.length)];
  document.getElementById("result").textContent = "Tu es " + r + " !";
});

document.getElementById("year").textContent = new Date().getFullYear();
