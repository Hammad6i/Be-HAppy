const messages = [
  "I don’t know how to say this...",
  "But whenever I see you,",
  "I feel something magical. ✨",
  "You're not just someone to me...",
  "You're my favorite part of every day.",
  "And I made this, just for you 💖"
];

function startStory() {
  document.querySelector(".container").classList.add("hidden");
  document.getElementById("messagePage").classList.remove("hidden");

  // Play music on user interaction
  const music = document.getElementById("bg-music");
  if (music) music.play().catch(e => console.log("Autoplay error:", e));

  typeLines(messages, 0);
}

function typeLines(lines, index) {
  if (index >= lines.length) {
    setTimeout(() => {
      document.getElementById("messagePage").classList.add("hidden");
      document.getElementById("finalPage").classList.remove("hidden");
    }, 2000);
    return;
  }

  const typewriter = document.getElementById("typeText");
  let charIndex = 0;
  typewriter.textContent = "";

  function typeChar() {
    if (charIndex < lines[index].length) {
      typewriter.textContent += lines[index][charIndex++];
      setTimeout(typeChar, 60);
    } else {
      setTimeout(() => typeLines(lines, index + 1), 1200);
    }
  }

  typeChar();
}
function startStory() {
  document.querySelector(".container").classList.add("hidden");
  document.getElementById("messagePage").classList.remove("hidden");

  // ✅ Safe music play after click
  const music = document.getElementById("bg-music");
  if (music.paused) {
    music.play().then(() => {
      console.log("Music playing");
    }).catch(error => {
      console.log("Autoplay blocked:", error);
    });
  }

  typeLines(messages, 0);
}
