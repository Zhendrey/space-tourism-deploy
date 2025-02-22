export async function getDestinationData(){
    try{
        const data = await fetch('src/json/destination.json');
        const response = await data.json();
        return response;
    }catch(error){
        console.error('error', error.message);
    }
}
export async function getCrewData(){
    try{
        const data = await fetch('src/json/crew.json');
        const response = await data.json();
        return response;
    }catch(error){
        console.error('error', error.message);
    }
}
export async function getTechnologyData(){
    try{
        const data = await fetch('src/json/technology.json');
        const response = await data.json();
        return response;
    }catch(error){
        console.error('error', error.message);
    }
}

function formatNumber(num){
    if(num >= 1000000){
        const units = ['', '', ' MIL.', ' BIL.', ' T.', ' Qd.', ' Qt.', ' Sex.', ' Spt.', ' Oct.', ' Non.'];
        const unit = Math.floor(Math.log10(Math.abs(num)) / 3);
        const value = (num / Math.pow(1000, unit));
        return value + units[unit];
    }else{
        return num.toLocaleString(undefined, {minimumFractionDigits: 0});
    }
}

export function increaseOpacity(styles){
    styles.opacity = 0;
    let opacity = 0.00;
    const opacityIncrement = setInterval(() => {
        opacity += 0.01;
        styles.opacity = opacity;
        if(Math.floor(opacity) == 1){
            clearInterval(opacityIncrement);
            console.log(`The final opacity is: ${Math.floor(opacity)}`);
        }   
    }, 1);
}

export function modifyContent(
    data, 
    currentId,
    planetImage,
    planetName,
    description,
    distance,
    travelTime
){
    const planetData = data[currentId];    
    planetImage.src = planetData.image;
    planetImage.alt = planetData.name;
    planetName.textContent = planetData.name.toUpperCase();
    description.textContent = planetData.description;
    distance.textContent = formatNumber(Number(planetData.distance)) + " " + ' KM';
    travelTime.textContent = planetData.travel.toUpperCase();
    console.log(Number(planetData.distance));
}

export function dynamicPading(content, maxWidth, minWidth, minPadding, maxPadding){
    const viewportAvgDifference = (maxWidth - minWidth) / 2;
    const paddingAvgDifference = (minPadding - maxPadding) / 2;
    const magicNum = paddingAvgDifference / viewportAvgDifference;
    
    content.style.paddingLeft = window.innerWidth >= minWidth ? minPadding + "px" : '';
    if(window.innerWidth > minWidth){
        let initialPaddingNum = parseInt(content.style.paddingLeft);
        let widthDifference = maxWidth - window.innerWidth;
        const paddingSubtractor = magicNum * widthDifference;
        content.style.paddingLeft = `${initialPaddingNum - paddingSubtractor}px`
    }
}
export function dynamicTop(pagination, maxWidth, minWidth, maxTop, minTop){
    const viewportAvgDifference = (maxWidth - minWidth) / 2;
    const topAvgDifference = (maxTop - minTop) / 2;
    const magicNum = topAvgDifference / viewportAvgDifference;

    pagination.style.top = window.innerWidth < maxWidth ? maxTop + 'px' : '';
    if(window.innerWidth < maxWidth){
        let initialTopNum = parseInt(pagination.style.top);
        let widthDifference = --maxWidth - window.innerWidth;
        const topSubtractor = magicNum * widthDifference;
        pagination.style.top = `${initialTopNum - topSubtractor}px`
    }
}