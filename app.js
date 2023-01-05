const hamBurger = document.getElementById("hamBurger");
const cross = document.getElementById("cross");
const dropDown = document.getElementById("dropDown");


hamBurger.addEventListener("click",()=>{
    hamBurger.style.display = "none";
    cross.style.display = "block";
    dropDown.style.display = "block";
});

cross.addEventListener("click",()=>{
    hamBurger.style.display = "block";
    cross.style.display = "none";
    dropDown.style.display = "none";
});