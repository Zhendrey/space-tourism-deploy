const mainSections = document.querySelectorAll(".wrapper > section");
const headerNavigation = document.querySelectorAll(".header__navigation");
const headerMenu = document.querySelectorAll(".header__menu");
const headerBurger = document.querySelectorAll(".header__burger");
const backgroundHome = document.querySelectorAll("img.background");
const currentPages = document.querySelectorAll("a.header__link_current-page");
const explore = document.querySelector(".intro__explore");

//!EVENT LISTENERS AND FUNCTION CALLBACKS


//SMOOTH PAGE TRANSITION

function cleanUpClasses(){
    for (let i = 0; i < mainSections.length; i++) {
            headerNavigation[i].classList.remove("active");
            headerBurger[i].classList.remove("active");
            headerMenu[i].classList.remove("active");
    }
}

for (let i = 0; i < mainSections.length; i++) {
    headerBurger[i].addEventListener("click", function(event){
        if(event.target.closest(".header__burger")){
            headerNavigation[i].classList.toggle("active");
            headerBurger[i].classList.toggle("active");
            headerMenu[i].classList.toggle("active");
        }
    })
}

for (const element of headerMenu) {
    element.addEventListener("click", function(e){
        cleanUpClasses();
        const targetElem = e.target.closest(".header__link");
        console.log(targetElem);
        const currentSection = document.querySelector(`section${targetElem.hash}`);
        currentSection.classList.add("active");
        for (let i = 0; i < mainSections.length; i++) {
            if(mainSections[i] == currentSection) continue;
            mainSections[i].classList.remove("active")
        }
    })
}
explore.addEventListener("click", function(e){
    const targetElem = e.target.closest('.intro__explore');
    const prevSection = document.querySelector(`section${currentPages[0].hash}`)
    const sectionId = targetElem.hash;
    const nextSeciton = document.querySelector(`section${sectionId}`);
    if(targetElem){
        prevSection.classList.remove("active");
        nextSeciton.classList.add("active");
    }
})


window.addEventListener("resize", function(){
    for (let i = 0; i < mainSections.length; i++) {
        if(window.innerWidth < 769 &&  window.innerWidth > 376){
            backgroundHome[i].src = `../../assets/${currentPages[i].textContent.toLowerCase()}/background-${currentPages[i].textContent.toLowerCase()}-tablet.jpg`;
            backgroundHome[i].alt = `background-${currentPages[i].textContent.toLowerCase()}-tablet`;
        }else if(window.innerWidth < 376){
            backgroundHome[i].src = `../../assets/${currentPages[i].textContent.toLowerCase()}/background-${currentPages[i].textContent.toLowerCase()}-mobile.jpg`;
            backgroundHome[i].alt = `background-${currentPages[i].textContent.toLowerCase()}-mobile`;
        }else{
            backgroundHome[i].src = `../../assets/${currentPages[i].textContent.toLowerCase()}/background-${currentPages[i].textContent.toLowerCase()}-desktop.jpg`;
            backgroundHome[i].alt = `background-${currentPages[i].textContent.toLowerCase()}-desktop`;
        }
    }
})


//!SEPARATE CONDITIONS
for (let i = 0; i < backgroundHome.length; i++) {
    if(window.innerWidth < 769 &&  window.innerWidth > 376){
        backgroundHome[i].src = `../../assets/${currentPages[i].textContent.toLowerCase()}/background-${currentPages[i].textContent.toLowerCase()}-tablet.jpg`;
        backgroundHome[i].alt = `background-${currentPages[i].textContent.toLowerCase()}-tablet`;
    }else if(window.innerWidth < 376){
        backgroundHome[i].src = `../../assets/${currentPages[i].textContent.toLowerCase()}/background-${currentPages[i].textContent.toLowerCase()}-mobile.jpg`;
        backgroundHome[i].alt = `background-${currentPages[i].textContent.toLowerCase()}-mobile`;
    }else{
        backgroundHome[i].src = `../../assets/${currentPages[i].textContent.toLowerCase()}/background-${currentPages[i].textContent.toLowerCase()}-desktop.jpg`;
        backgroundHome[i].alt = `background-${currentPages[i].textContent.toLowerCase()}-desktop`;
    }
}