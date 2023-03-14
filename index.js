const hamburger = document.querySelector(".hamburger");
const newE = document.querySelector(".new");
const Menu = document.querySelector(".menu");

hamburger.addEventListener("click", () => {
    console.log('clicked')
    hamburger.classList.toggle("active");
    Menu.classList.toggle("active");
})

newE.addEventListener("click", () => {
    console.log('clicked')
    newE.classList.toggle("active");
    Menu.classList.toggle("active");
})


document.querySelectorAll(".nav-link").forEach(N => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    newE.classList.remove("active");
    Menu.classList.remove("active");
}))