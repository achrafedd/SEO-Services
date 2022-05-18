const barrs = document.querySelector(".fa-bars");
const times = document.querySelector(".fa-times");
const nav = document.querySelector(".navigation ul");
const questions = document.querySelectorAll(".question");
const answers = document.querySelectorAll(".answer");
const up = document.querySelector(".up");

barrs.addEventListener("click", () => {
    nav.classList.add("active");
})

times.addEventListener("click", () => {
    nav.classList.remove("active");
})

questions.forEach((q) => {
    q.addEventListener("click", () => {
        questions.forEach(q => {
            q.classList.remove("active")
        })
        answers.forEach(a => {
            a.classList.remove("active")
        })
        q.classList.add("active")
        q.nextElementSibling.classList.add("active")
    })
})

document.onscroll = () => {
    if (window.scrollY >= 900) {
        up.style.display = "flex";
    }else {
        up.style.display = "none";
    }
}

up .addEventListener("click", () => {
    window.scrollTo(0, 0)
})