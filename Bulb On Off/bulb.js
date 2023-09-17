const bulb = document.querySelector(".bulb");

const on1 = document.querySelector(".on");

const off1 = document.querySelector(".off");

on1.addEventListener("click",function(){
    bulb.style.backgroundColor = "yellow";
});

off1.addEventListener("click",function(){
    bulb.style.backgroundColor = "transparent";
});