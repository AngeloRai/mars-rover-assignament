class Rover {
    constructor(direction, x, y) { //"direction" defines whether the rover is pointed N,E,S or W. and x and y deifine the position of the rover on a 10x10 grid
        this.direction = direction;
        this.x = x;
        this.y = y;
        this.travelLog = [];
    }
}
const rover = new Rover('n', 0, 0)


function commandRover(theRover, orders) {
    for (let i = 0; i < orders.length; i++) {
        let order = orders[i];
        
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

function turnLeft(theRover) {
    if (theRover.direction === 'n') {
        rover.direction = 'w';
    } else if (theRover.direction === "w") {
        rover.direction = "s";
    } else if (theRover.direction === "s") {
        rover.direction = "e";
    } else if (theRover.direction === "e") {
        rover.direction = "n";
    }
    console.log(`"Left" command received and the current direction is ${theRover.direction.toUpperCase()}`);
}

function turnRight(theRover) {
    if (theRover.direction === "n") {
        rover.direction = "e";
    } else if (theRover.direction === "e") {
        rover.direction = "s";
    } else if (theRover.direction === "s") {
        rover.direction = "w";
    } else if (theRover.direction === "w") {
        rover.direction = "n";
    }
    console.log(`"Right" command received and the current position is ${theRover.direction.toUpperCase()}`);
}

function moveForward(theRover) {
    if (rover.x >= 0 && rover.x <= 9 && rover.y >= 0 && rover.y <= 9) {
        if (theRover.direction === 'n') {
            rover.y--;
        } else if (theRover.direction === 'e') {
            rover.x++;
        } else if (theRover.direction === 's') {
            rover.y++;
        } else if (theRover.direction === 'w') {
            rover.x--;
        }
    } else {
        console.log("Look out! We are falling off our planet.");
        return
    }
    let newPosition = { x: rover.x, y: rover.y };
    rover.travelLog.push(newPosition);
}

function moveBackward(theRover) {
    if (theRover.x >= 0 && theRover.x <= 9 && theRover.y >= 0 && theRover.y <= 9) {
        if (theRover.direction === 'n') {
            rover.y++;
        } else if (theRover.direction === 'e') {
            rover.x--;
        } else if (theRover.direction === 's') {
            rover.y--;
        } else if (theRover.direction === 'w') {
            rover.x++;
        }
    } else {
        console.log("Look out! We are falling off our planet.");
        return
    }
    let newPosition = { x: rover.x, y: rover.y };
    rover.travelLog.push(newPosition);
}


commandRover(rover, "rffrffffffllffffbb");
console.log("The rover went through the following path:");
console.log(rover.travelLog);

console.log(`The Rover's current position is: x: ${rover.travelLog[rover.travelLog.length-1].x}, y: ${rover.travelLog[rover.travelLog.length-1].y}`);
