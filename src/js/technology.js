import { getTechnologyData, dynamicPading, dynamicTop } from "./functions.js";

const data = await getTechnologyData();

//SCREEN WIDTHS
const laptopL = 1440;
const tablet = 768;

//DOM ELEMENTS
const technologySlides = document.querySelectorAll(".technology .slide");
const content = document.querySelector(".technology .content");
const pagination = document.querySelector(".technology .swiper-pagination");

//APPLYING IMPORTED FUNCTIONS
dynamicPading(content, laptopL, tablet, parseInt(getComputedStyle(content).paddingLeft), 15);
dynamicTop(pagination, tablet, 360, parseInt(getComputedStyle(pagination).top), 180);


data.forEach((technology, index) => {
    const name = technologySlides[index].querySelector(".slide__name");
    const description = technologySlides[index].querySelector(".slide__text");
    const image = technologySlides[index].querySelector(".info__image img");

    name.textContent = technology.name.toUpperCase();
    description.textContent = technology.description;
    image.src = window.innerWidth > tablet ? technology.desktopImage : technology.tabletImage;
    image.alt = technology.name;
    window.addEventListener("resize", function(e){
        image.src = window.innerWidth > tablet ? technology.desktopImage : technology.tabletImage;
    })
});