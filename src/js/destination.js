import { 
    getDestinationData, 
    modifyContent, 
    increaseOpacity
    } from "./functions.js";
//VARIABLES
const data = await getDestinationData();

//DOM VARIABLES
const destinationImage = document.querySelector(".destination__image img");
const destinationBody = document.querySelector(".destination__body");
const destinationPlanets = destinationBody.querySelector(".destination__planets");
const destinationPlanet = destinationBody.querySelectorAll(".destination__planet");
const destinationPlanetName = destinationBody.querySelector(".destination__planet-name");
const destinationText = destinationBody.querySelector(".destination__text p");
const distanceNumber = destinationBody.querySelector("h3.distance__number");
const travelNumber = destinationBody.querySelector("h3.travel-time__number");

//MAIN CODE
[...destinationPlanet].forEach((planet, index)=> planet.id = index)
const pressedPlanets = [0];

destinationPlanets.addEventListener("click", function(event){
    const targetElem = event.target.closest(".destination__planet");
    const targetId = targetElem.id;
    if(targetElem){
        pressedPlanets.push(Number(targetId));
        const previousPlanet = pressedPlanets[pressedPlanets.length - 2];
        destinationPlanet[previousPlanet].classList.remove("active");
        increaseOpacity(destinationImage.style);
        increaseOpacity(destinationPlanetName.style);
        increaseOpacity(destinationText.style);
        increaseOpacity(distanceNumber.style);
        increaseOpacity(travelNumber.style);
        targetElem.classList.toggle("active");
        modifyContent(
            data,
            targetId,
            destinationImage,
            destinationPlanetName,
            destinationText,
            distanceNumber,
            travelNumber
        );
    }
})