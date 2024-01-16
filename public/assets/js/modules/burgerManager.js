const burgerManager = ()=>{
    console.log("hello burger");
    const burger = document.getElementById("burger");
    const navMenu = document.getElementById("navMenu");
    const user = document.getElementById("user");
    let displayMenu = false;
    burger.addEventListener("click",()=>{
        displayMenu = !displayMenu;
        if(displayMenu){
            navMenu.style.display = "flex";
            navMenu.style.flexDirection = "column";
            user.style.display = "block"
        } else {
            navMenu.style.display = "none";
            user.style.display = "none"
        }
    })
}
export { burgerManager }