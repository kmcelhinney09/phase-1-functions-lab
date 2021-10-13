function distanceFromHqInBlocks(start, end= 42){
    const blocks = start >= end? start - end: end - start;
    return blocks;
}

function distanceFromHqInFeet(start,end=42){
    return  distanceFromHqInBlocks(start,end) * 264
}

function distanceTravelledInFeet(start, end){
    return distanceFromHqInFeet(start, end)
}

function calculatesFarePrice(start, end){
    const distance = distanceTravelledInFeet(start, end);
    console.log(distance);
    if (distance <= 400){
        return 0;
    } 
    else if(distance > 400 && distance <= 2000){
        return (distance-400)*0.02;
    }
    else if(distance > 2000 && distance <= 2500){
        return 25;
    }
    else{
        return 'cannot travel that far';
    }
}

