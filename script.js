const allowedPhoneNumber = "April 13"; // change to her number

window.onload = function () {
    startHearts();
};

function login() {
    const phone = document.getElementById("phoneInput").value.trim();
    const error = document.getElementById("error");

    if (phone === allowedPhoneNumber) {
        document.getElementById("loginPage").classList.add("hidden");
        document.getElementById("letterPage").classList.remove("hidden");
    } else {
        error.textContent = "Wrong number my love 😢";
    }
}

function logout() {
    document.getElementById("loginPage").classList.remove("hidden");
    document.getElementById("letterPage").classList.add("hidden");
}

/* ❤️ Floating Hearts */
function startHearts() {
    setInterval(() => {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "❤️";

        heart.style.left = Math.random() * 100 + "vw";
        heart.style.fontSize = (Math.random() * 20 + 15) + "px";
        heart.style.animationDuration = (Math.random() * 3 + 4) + "s";

        document.getElementById("hearts").appendChild(heart);

        setTimeout(() => heart.remove(), 7000);
    }, 300);
}