  (function($) {
    "use strict";
  
    new WOW().init();
  
    //navbar cart
    $(".cart_link > a").on("click", function () {
      $(".mini_cart").addClass("active");
    });
  
    $(".mini_cart_close > a").on("click", function () {
      $(".mini_cart").removeClass("active");
    });
} )(jQuery)
const carousel = document.querySelector(".carousel"),
firstImg = carousel.querySelectorAll("img")[0];
 const arrowIcons = document.querySelectorAll(".wrapper i");

let isDragStart = false ,prevPageX , prevScrollLeft;
let firstImgwidth = firstImg.clientWidth + 14;
let scrollWidth = carousel.scrollWidth - carousel.clientWidth;

const  showHideIcons = () => {
  arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
  arrowIcons[1].style.display = carousel.scrollLeft == scrollWidth ? "none" : "block";
}

arrowIcons.forEach(icon => {

  icon.addEventListener("click", () => {
           carousel.scrollLeft += icon.id == "left" ? -firstImgwidth : firstImgwidth;
          setTimeout(() => showHideIcons(), 60);
            });
  
});

const dragStart = (e) =>{
  isDragStart = true;
  prevPageX = e.pageX;
  prevScrollLeft = carousel.scrollLeft;
}
const dragging = (e) =>{
    if(!isDragStart) return;
    e.preventDefault();
    carousel.classList.add("dragging");
    let positionDiff = e.pageX - prevPageX;
  carousel.scrollLeft = prevScrollLeft - positionDiff;
}
const dragStop = () =>{
isDragStart = false;
carousel.classList.remove("dragging");
}


carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("mouseup", dragStop);