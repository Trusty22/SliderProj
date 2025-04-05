const left = document.querySelector(".left")
const right = document.querySelector(".right")
const slider = document.querySelector(".slider")
const images = document.querySelectorAll(".image")
const bottom = document.querySelector(".bottom")

let slideNum = 1;
const length = images.length;

for (let i = 0; i < length; i++) {
    const div = document.createElement("div")
    div.className = "button"
    bottom.appendChild(div);
}

const buttons = document.querySelectorAll(".button")
buttons[0].style.backgroundColor = "white"

const resetBg = () => {
    buttons.forEach(button => {
        button.style.backgroundColor = "transparent ";
    })
}
buttons.forEach((button, i) => {
    button.addEventListener("click", () => {
        resetBg();
        slider.style.transform = `translateX(-${i * 800}px)`
        slideNum = i + 1;
        button.style.backgroundColor = "white"
    })
})

const nextSlide = () => {
    slider.style.transform = `translateX(-${slideNum * 800}px)`;
    slideNum++;
}
const prevSlide = () => {
    slider.style.transform = `translateX(-${(slideNum - 2) * 800}px)`;
    slideNum--;
}
const getFirstSlide = () => {
    slider.style.transform = `translateX(0px)`;
    slideNum = 1;
}
const changeColor = () => {
    resetBg();
    buttons[slideNum - 1].style.backgroundColor = "white"
}
const getLastSlide = () => {
    slider.style.transform = `translateX(-${(length - 1) * 800}px)`
    slideNum = length;
}

right.addEventListener("click", () => {
    if (slideNum < images.length) {
        nextSlide();
    } else {
        getFirstSlide();
    }
    changeColor();
});

left.addEventListener("click", () => {
    if (slideNum > 1) {
        prevSlide();
    } else {
        getLastSlide();
    }
    changeColor();
});