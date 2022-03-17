const incr = document.getElementById("inc");
const decr = document.getElementById("dec");
const reset = document.getElementById("res");

function changeValue(value) {
    let elem = document.querySelector(".value");
    if (value === 0)
        elem.innerHTML = '0';
    elem.innerHTML = parseInt(elem.innerHTML) + value;
}

incr.addEventListener("click", () => changeValue(1));
reset.addEventListener("click", () => changeValue(0));
decr.addEventListener("click", () => changeValue(-1));
