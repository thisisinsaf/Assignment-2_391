const fortunes = [
    "Good things are coming your way.",
    "You will achieve your goals.",
    "Happiness is around the corner.",
    "Success will find you soon.",
    "Believe in yourself.",
    "Opportunities will knock soon.",
    "Stay patient and trust the process.",
    "A pleasant surprise is waiting for you.",
    "Hard work will pay off.",
    "Your future is bright."
];

function getRandomFortune() {
    const randomIndex = Math.floor(Math.random() * fortunes.length);
    return fortunes[randomIndex];
}

window.onload = function () {
    const fortuneText = document.getElementById("fortune-text");
    fortuneText.textContent = getRandomFortune();
};


const buttons = document.querySelectorAll(".color-btn");
const box = document.getElementById("fortune-box");
const text = document.getElementById("fortune-text");
const newBtn = document.getElementById("new-fortune-btn");

buttons.forEach(button => {
    button.addEventListener("click", function () {
        const color = button.getAttribute("data-color");

        changeStyle(color);
    });
});

newBtn.addEventListener("click", function () {
    const newFortune = getRandomFortune();
    text.textContent = newFortune;
});

function changeStyle(color) {

    if (color === "green") {
        box.style.backgroundColor = "#a9f7bb";
        box.style.borderColor = "green";
        text.style.color = "green";
        text.style.fontSize = "18px";
        text.style.fontFamily = "Arial";
    }

    else if (color === "yellow") {
        box.style.backgroundColor = "#fff3cd";
        box.style.borderColor = "gold";
        text.style.color = "orange";
        text.style.fontSize = "18px";
        text.style.fontFamily = "Verdana";
    }

    else if (color === "blue") {
        box.style.backgroundColor = "#d1ecf1";
        box.style.borderColor = "blue";
        text.style.color = "blue";
        text.style.fontSize = "18px";
        text.style.fontFamily = "Tahoma";
    }

    else if (color === "orange") {
        box.style.backgroundColor = "#ffe5b4";
        box.style.borderColor = "orange";
        text.style.color = "darkorange";
        text.style.fontSize = "18px";
        text.style.fontFamily = "Georgia";
    }
}