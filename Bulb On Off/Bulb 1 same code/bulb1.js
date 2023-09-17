const bulb = document.querySelector("#bulb1");

const on = document.querySelector("#on1");

on.addEventListener("click",() => {
    bulb.style.backgroundColor = "yellow";
})

const off = document.querySelector("#off1");


off.addEventListener("click", () => {
    bulb.style.backgroundColor = "transparent";
})