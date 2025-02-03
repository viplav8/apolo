// Image Slideshow
let images = ["images/1.jpg", "images/2.jpg", "images/3.jpg", "images/4.jpg"];
let currentIndex = 0;
const sliderImage = document.getElementById("slider-image");

function changeImage() {
    currentIndex = (currentIndex + 1) % images.length;
    sliderImage.src = images[currentIndex];
}

setInterval(changeImage, 2000); // Change image every 2 seconds

// Popup Functionality
function showPopup() {
    document.getElementById("popup").style.display = "block";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}

// Gift Popup
function showGiftPopup() {
    document.getElementById("gift-popup").style.display = "block";
}

function closeGiftPopup() {
    document.getElementById("gift-popup").style.display = "none";
}

// Floating Hearts Background
const canvas = document.getElementById("heartCanvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const hearts = [];

class Heart {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 15 + 5;  // Bigger Hearts
        this.speedY = Math.random() * 2 - 1;
        this.speedX = Math.random() * 2 - 1;
        this.alpha = Math.random() * 0.5 + 0.5;
    }

    draw() {
        ctx.globalAlpha = this.alpha;
        ctx.fillStyle = "red";
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.bezierCurveTo(
            this.x - this.size, this.y - this.size,
            this.x - this.size * 2, this.y + this.size,
            this.x, this.y + this.size * 2
        );
        ctx.bezierCurveTo(
            this.x + this.size * 2, this.y + this.size,
            this.x + this.size, this.y - this.size,
            this.x, this.y
        );
        ctx.fill();
        ctx.globalAlpha = 1;
    }

    update() {
        this.y -= this.speedY;
        this.x += this.speedX;
    }
}

function addHearts() {
    if (hearts.length < 100) {
        hearts.push(new Heart());
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    hearts.forEach((heart) => {
        heart.update();
        heart.draw();
    });
    requestAnimationFrame(animate);
}

setInterval(addHearts, 100);
animate();
