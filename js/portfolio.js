//hamburger function
let hamburger = document.querySelector("#nav img");
let hamburgercontainer = document.querySelector("#hamburger");
let links = document.querySelectorAll("#hamburger .allLinks li a")
let flag=1
hamburger.addEventListener("click", ()=>{
    if(flag==1){
        hamburger.src = "./logo images/close.svg";
        hamburger.style.position = "fixed";
        hamburgercontainer.style.right = "0";
        flag=0
    }
    else{
        hamburger.src = "./logo images/hamburger.svg"
        hamburger.style.position = "relative";
        hamburgercontainer.style.right = "-100%";
        flag=1
    } 
})
links.forEach(link => {
    link.addEventListener("click", () => {
        hamburger.src = "./logo images/hamburger.svg";
        hamburger.style.position = "relative";
        hamburgercontainer.style.right = "-100%";
        flag = 1;
    });
});
