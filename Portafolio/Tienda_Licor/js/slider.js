

const slider = document.querySelector("#slider");
let sliderSection = document.querySelectorAll(".slider__section");
let sliderSectionLast = sliderSection[sliderSection.length-1];/*Aqui obtengo a la ultima imagen */

slider.insertAdjacentElement('afterbegin', sliderSectionLast);/*para mover la posición del ultimo*/

function Next(){
let sliderSectionFirst = document.querySelectorAll(".slider__section")[0];/*tomo el primer elemento */
slider.style.marginLeft = "-200%";
slider.style.transition = "all 0.5s";
setTimeout(function() {
    slider.style.transition = "none";
    slider.insertAdjacentElement('beforeend', sliderSectionFirst);
    slider.style.marginLeft = "-100%";
}, 500);
}

function Prev(){
    let sliderSection = document.querySelectorAll(".slider__section");
    let sliderSectionLast = sliderSection[sliderSection.length-1];  
    slider.style.marginLeft = "0%";
    slider.style.transition = "all 0.5s";
    setTimeout(function() {
        slider.style.transition = "none";
        slider.insertAdjacentElement('afterbegin', sliderSectionLast);
        slider.style.marginLeft = "-100%";
    }, 500);
    }
setInterval(function(){Next();},5000);
