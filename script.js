


const icons = document.getElementById("icons")
const submenu = document.querySelector(".burger-menu-submenu")
const subMenuSecondary = document.querySelector(".burger-menu-submenu-secondary")
const connect = document.getElementById("connect")
const connectImage = document.getElementById("connect-image")

icons.addEventListener("click", openMenu)
connect.addEventListener("click", openSubMenuSecondary)


function openMenu () {
     if (icons.src.match("images/icon-hamburger.svg")) {
          icons.src = "images/icon-close.svg"
          submenu.style.display = "flex"
          icons.classList.toggle("animations")

     }

     else {
          icons.src = "images/icon-hamburger.svg"
          submenu.style.display = "none"
          icons.classList.toggle("animations")
          submenu.classList.remove("submenu-secondary-on")
          subMenuSecondary.classList.remove("active")
          connectImage.classList.remove("arrow-active")



     }
}

function openSubMenuSecondary () {
     submenu.classList.toggle("submenu-secondary-on")
     subMenuSecondary.classList.toggle("active")
     subMenuSecondary.classList.toggle("animations-down")
     connectImage.classList.toggle("arrow-active")

}





