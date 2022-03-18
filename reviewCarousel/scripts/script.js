const reviews = [
    {
        img: "styles/imgs/img1.jpeg",
        name: "Cool lion",
        job: "King of animals",
        about: "Just a lion"
    },
    {
        img: "styles/imgs/img2.jpeg",
        name: "Red panda",
        job: "idk",
        about: "Cute"
    },
    {
        img: "styles/imgs/img3.jpeg",
        name: "Fox",
        job: "hunter",
        about: "This text doesn't make sense"
    }
]

let currentReview = 0;

const img = document.getElementById("profile-img");
const name = document.getElementById("name");
const job = document.getElementById("job");
const about = document.getElementById("description");

const preBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

function updateInfo(person) {
    const info = reviews[person];
    img.src = info.img;
    name.textContent = info.name;
    job.textContent = info.job;
    about.textContent = info.about;
}

window.addEventListener("DOMContentLoaded", () => {
    updateInfo(0);
})

nextBtn.addEventListener("click", () => {
    ++currentReview > 2 ? currentReview = 0: currentReview;
    updateInfo(currentReview);
})

preBtn.addEventListener("click", () => {
    --currentReview < 0 ? currentReview = reviews.length - 1: currentReview;
    updateInfo(currentReview);
})

