// JavaScript Document


/* スライドショー */
const pics_src = ["images/header01.jpg", "images/header02.jpg", "images/header03.jpg", "images/header04.jpg"];
let num = 0;

function slideshow_timer() {
  if (num === 3) {
    num = 0;
  } else {
    num ++;
  }
  document.getElementById("slide-show").src = pics_src[num];
} 
setInterval(slideshow_timer, 4000);
