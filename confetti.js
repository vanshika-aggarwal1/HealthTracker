const canvas = document.getElementById("confettiCanvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const confettiCount = 150;
const confetti = [];
const colors = [
  "#ff0a54",
  "#ff477e",
  "#ff7096",
  "#ff85a1",
  "#fbb1bd",
  "#f9bec7",
];

function random(min, max) {
  return Math.random() * (max - min) + min;
}

function Confetto() {
  this.x = random(0, canvas.width);
  this.y = random(-canvas.height, 0);
  this.size = random(5, 10);
  this.speed = random(1, 3);
  this.color = colors[Math.floor(Math.random() * colors.length)];
  this.tilt = random(-10, 10);
  this.tiltAngle = 0;
}

Confetto.prototype.update = function () {
  this.y += this.speed;
  this.tiltAngle += 0.05;
  this.x += Math.sin(this.tiltAngle) * 2;
  if (this.y > canvas.height) {
    this.y = random(-20, 0);
    this.x = random(0, canvas.width);
  }
};

Confetto.prototype.draw = function () {
  ctx.beginPath();
  ctx.lineWidth = this.size;
  ctx.strokeStyle = this.color;
  ctx.moveTo(this.x + this.tilt, this.y);
  ctx.lineTo(this.x + this.tilt + this.size, this.y + this.size);
  ctx.stroke();
};

function createConfetti() {
  for (let i = 0; i < confettiCount; i++) {
    confetti.push(new Confetto());
  }
}

let animationFrame;

function animateConfetti() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  confetti.forEach((c) => {
    c.update();
    c.draw();
  });
  animationFrame = requestAnimationFrame(animateConfetti);
}

function startConfetti() {
  const popSound = document.getElementById("popSound");
  popSound.currentTime = 0;
  popSound.play();

  // Clear existing confetti and re-create
  confetti.length = 0;
  createConfetti();
  animateConfetti();

  // Stop confetti after 50 seconds (50,000 milliseconds)
  setTimeout(() => {
    cancelAnimationFrame(animationFrame);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }, 12000);
}
