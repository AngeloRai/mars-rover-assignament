const rover = {
    x: 0,
    y: 0,
    travelLog: [{ x: 0, y: 0 }],
    direction: 'n',
};

function commandRover(theRover, orders) {
    for (let i = 0; i < orders.length; i++) {
        let order = orders[i];
        console.log(`The Rover is pointing "${rover.direction.toUpperCase()} and it's position is x: ${rover.x}, y: ${rover.y}.`);
        
        switch (order) {
            case 'l' || 'L':
                turnLeft(theRover, order)
                break;
            case 'r' || 'R':
                turnRight(theRover, order)
                break;
            case 'f' || 'F':
                moveForward(theRover, order)
                break;
            case 'b' || 'B':
                moveBackward(theRover, order)
                break;
            default:
                 console.log("Guess that command didn't work! Command the rover with the letters 'l', 'r', 'f' and 'b'.");
        }
    }
}

function turnLeft(theRover, command) {
    if (theRover.direction === 'n') {
        rover.direction = 'w';
    } else if (theRover.direction === "e") {
        rover.direction = "n";
    } else if (theRover.direction === "s") {
        rover.direction = "e";
    } else if (theRover.direction === "w") {
        rover.direction = "s";
    }
}

function turnRight(theRover, command) {
    if (theRover.direction === "n") {
        theRover.direction = "e";
    } else if (theRover.direction === "e") {
        theRover.direction = "s";
    } else if (theRover.direction === "s") {
        theRover.direction = "w";
    } else if (theRover.direction === "w") {
        theRover.direction = "n";
    }
}

function moveForward(theRover, command) {
    if (theRover.direction === 'n') {
        rover.y--;
    } else if (theRover.direction === 'e') {
        rover.x++;
    } else if (theRover.direction === 's') {
        rover.y++;
    } else if (theRover.direction === 'w') {
        rover.x--;
    }
    let newPosition = { x: theRover.x, y: theRover.y };
    theRover.travelLog.push(newPosition);
}

function moveBackward(theRover, command) {

    if (theRover.direction === 'n') {
        rover.y++;
    } else if (theRover.direction === 'e') {
        rover.x--;
    } else if (theRover.direction === 's') {
        rover.y--;
    } else if (theRover.direction === 'w') {
        rover.x++;
    }
    let newPosition = { x: theRover.x, y: theRover.y };
    theRover.travelLog.push(newPosition);
}

commandRover(rover, "rffrfflbfrffb");
console.log("The rover went through the following path:");
console.log(rover.travelLog);
console.log(`The Rover's current coordinates: horizantal-x ${rover.x}/vertical-y ${rover.y}`);
