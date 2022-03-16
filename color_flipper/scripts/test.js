const btn = document.getElementById("super_but")
const color_str = document.querySelector(".color_str");

const random_hex_color_code = () => {
    let n = (Math.random() * 0xfffff * 1000000).toString(16);
    return '#' + n.slice(0, 6);
};

btn.addEventListener("click", () => {
    let bc_color = random_hex_color_code();
    color_str.textContent = bc_color;
    document.body.style.backgroundColor = bc_color;
});