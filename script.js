
// Scroll related animations

const ImageSection1Mobile = document.querySelector(".image-section-1-mobile")
const ImageSection1Desktop = document.querySelector(".image-section-1-desktop")
const ImageSection2 = document.getElementById("image-section-2")
const ImageSection3Mobile = document.querySelector(".image-section-3-mobile")
const ImageSection3Desktop = document.querySelector(".image-section-3-desktop")

window.addEventListener("scroll", function () {

     const {scrollTop, clientHeight} =
     document.documentElement;

     const topElementViewport =
     ImageSection1Mobile.getBoundingClientRect().top

     const topElementViewportbis =
     ImageSection1Desktop.getBoundingClientRect().top

     const topElementViewport2 =
     ImageSection2.getBoundingClientRect().top

      const topElementViewport3 =
     ImageSection3Mobile.getBoundingClientRect().top

     const topElementViewport3bis =
     ImageSection3Desktop.getBoundingClientRect().top

     if (scrollTop > (scrollTop + topElementViewport).toFixed() - clientHeight ) {
          ImageSection1Mobile.classList.add("fadeIn")
     }

     if (scrollTop > (scrollTop + topElementViewportbis).toFixed() - clientHeight * 0.8 ) {
          ImageSection1Desktop.classList.add("fadeIn")
     }


     if (scrollTop > (scrollTop + topElementViewport2).toFixed() - clientHeight ) {
          ImageSection2.classList.add("fadeIn")


     }

     if (scrollTop > (scrollTop + topElementViewport3bis).toFixed() - clientHeight * 0.8 ) {
          ImageSection3Desktop.classList.add("fadeIn")


     }

     if (scrollTop > (scrollTop + topElementViewport3).toFixed() - clientHeight ) {
          ImageSection3Mobile.classList.add("fadeIn")

     }

})


// Burger menu animations

const icons = document.getElementById("icons")

icons.addEventListener("click", openMenu)

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

// Burger menu - Secondary animations

const submenu = document.querySelector(".burger-menu-submenu")
const subMenuSecondary = document.querySelector(".burger-menu-submenu-secondary")
const connect = document.getElementById("connect")
const connectImage = document.getElementById("connect-image")

connect.addEventListener("click", openSubMenuSecondary)

function openSubMenuSecondary () {
     submenu.classList.toggle("submenu-secondary-on")
     subMenuSecondary.classList.toggle("active")
     subMenuSecondary.classList.toggle("animations-down")
     connectImage.classList.toggle("arrow-active")

}







