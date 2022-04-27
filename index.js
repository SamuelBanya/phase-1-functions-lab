// Code your solution in this file!
function distanceFromHqInBlocks(blockAmount) {
    console.log("distanceFromHqInBlocks function called");
    console.log("blockAmount: " + blockAmount);
    
    if (blockAmount >= 42) {
        let distance = blockAmount - 42;

        console.log('distance: ' + distance);
        
        return distance;
    }

    else {
        let distance = 42 - blockAmount;

        console.log('distance: ' + distance);        
        
        return distance;
    }
}

function distanceFromHqInFeet(distanceInBlocks) {
    console.log("distanceFromHqInFeet function called");
    console.log("distanceInBlocks: " + distanceInBlocks);
    
    // call the distanceFromHqInBlocks function from inside the distanceFromHqInFeet function,
    // passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks

    // the return value of distanceFromHqInBlocks can then be used to calculate feet
    let distance = distanceFromHqInBlocks(distanceInBlocks);
    
    let distanceInFeet = 264 * distance;

    console.log("distanceInFeet: " + distanceInFeet);

    return distanceInFeet;
}

function distanceTravelledInFeet(start, destination) {
    console.log("distanceTravelledInFeet function called");
    console.log("start: " + start);
    console.log("destination: " + destination);
    
    let distanceInFeet;
    if (start > destination) {
        distanceInFeet = (start - destination) * 264;

        console.log("distanceInFeet: " + distanceInFeet);
        
        return distanceInFeet
    }
    
    if (destination > start) {
        distanceInFeet = (destination - start) * 264;

        console.log("distanceInFeet: " + distanceInFeet);        
        
        return distanceInFeet;
    }
    // returns the number of feet traveled
}

function calculatesFarePrice(start, destination) {
    console.log("calculatesFarePrice function called");
    
    let farePrice;

    let distance = distanceTravelledInFeet(start, destination);

    console.log("start: " + start);
    console.log("destination: " + destination);
    console.log("distance: " + distance);

    if (distance <= 400) {
        farePrice = 0;

        console.log("farePrice: " + farePrice);

        return farePrice;
    }

    
    if (distance > 400 && distance <= 2000) {
        // One 'gotcha':
        // The first 400 feet is free, so you actually need to subtract 400 from the distance
        // This is due to the 'indexTest.js' test that mentions this within a comment:
        distance = distance - 400;
        farePrice = 0.02 * distance;
        
        console.log("farePrice: " + farePrice);

        return farePrice;
    }

    if (distance > 2000 && distance < 2500) {
        // Flat rate for this range is: $25
        farePrice = 25;

        console.log("farePrice: " + farePrice);
        
        return farePrice;
    }

    if (distance > 2500) {
        console.log("cannot travel that far");
        return "cannot travel that far";
    }    
}

// Test this function call to make sure the 'farePrice' is accurate:
// 1. First Function Call To Test:
// it('charges 2 cents per foot when total feet travelled is between 400 and 2000 (remember the first 400 feet are free!)', function() {
// total feet travelled is 528, minus the first 400 feet, comes to 128 -> 2.56
// expect(calculatesFarePrice(34, 32)).to.equal(2.56);

calculatesFarePrice(34, 32);
