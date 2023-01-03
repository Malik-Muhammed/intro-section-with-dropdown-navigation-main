const hamburgerIcon = document.querySelector("#hamburger-icon");
const navItems = document.querySelector(".middle-nav-items");
const dropdownContainer = document.querySelectorAll(".dropdownContainer");
const dropdownContainerArray = [...dropdownContainer];
const leftNavItems = document.querySelector(".left-nav-items");
const rightNavItems = document.querySelector(".right-nav-items");


hamburgerIcon.addEventListener("click", ()=>{
    if(!navItems.classList.contains("showNav")){
        navItems.classList.add("showNav")
        hamburgerIcon.src = "./images/icon-close-menu.svg"
    }

    else{
        navItems.classList.remove("showNav")
        hamburgerIcon.src = "./images/icon-menu.svg";
        
    }
})
 
dropdownContainerArray.forEach(element=>{

    const button = element.querySelector(".dropdownButton"),
    dropdownContent = element.querySelector(".dropdownContent"),
    dropdownArrow = element.querySelector(".icon");

    button.addEventListener("click", ()=>{
        if(!dropdownContent.classList.contains("show")){
            dropdownContent.classList.add("show")
            dropdownArrow.classList.add("open")
            dropdownArrow.classList.remove("close") 
             
        }

        else{
            dropdownContent.classList.remove("show")
            dropdownArrow.classList.remove("open")
            dropdownArrow.classList.add("close")
           

        }
    })
})



 


