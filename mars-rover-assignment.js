class Rover {
    constructor(direction, x, y) {
        this.direction = direction;
        this.x = x;
        this.y = y;
        this.travelLog = []
    }
}
const rover = new Rover('n', 0, 0)


function commandRover(theRover, orders) {
    for (let i = 0; i < orders.length; i++) {
        let order = orders[i];
        switch (order) {
            case 'l' || 'L':
                turnLeft(theRover, order)
                console.log(`"Left" command received and the current direction is ${theRover.direction.toUpperCase()}`);
                break;
            case 'r' || 'R':
                turnRight(theRover, order)
                console.log(`"Right" command received and the current position is ${theRover.direction.toUpperCase()}`);
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
    if (theRover.direction === 'n') return rover.direction = 'w';
    if (theRover.direction === "w") return rover.direction = "s";
    if (theRover.direction === "s") return rover.direction = "e";
    if (theRover.direction === "e") return rover.direction = "n";
}

function turnRight(theRover) {
    if (theRover.direction === "n") return rover.direction = "e";
    if (theRover.direction === "s") return rover.direction = "w";
    if (theRover.direction === "w") return rover.direction = "n";
    if (theRover.direction === "e") return rover.direction = "s";
}

function moveForward(theRover) {
    if (rover.x < 0 || rover.x > 9 || rover.y < 0 || rover.y > 9) return console.log("Look out! We are falling off our planet.");
    if (theRover.direction === 'n') {
        rover.y--;
    } else if (theRover.direction === 'e') {
        rover.x++;
    } else if (theRover.direction === 's') {
        rover.y++;
    } else if (theRover.direction === 'w') {
        rover.x--;
    }
    const newPosition = { x: rover.x, y: rover.y };
    rover.travelLog.push(newPosition);
}

function moveBackward(theRover) {
    if (rover.x < 0 || rover.x > 9 || rover.y < 0 || rover.y > 9) return console.log("Look out! We are falling off our planet.");
    if (theRover.direction === 'n') {
        rover.y++;
    } else if (theRover.direction === 'e') {
        rover.x--;
    } else if (theRover.direction === 's') {
        rover.y--;
    } else if (theRover.direction === 'w') {
        rover.x++;
    }
    const newPosition = { x: rover.x, y: rover.y };
    rover.travelLog.push(newPosition);
}

commandRover(rover, "rffrffffffllffffffff");
console.log("The rover went through the following path:");
console.log(rover.travelLog);

console.log(`The Rover's current position is: x: ${rover.travelLog[rover.travelLog.length - 1].x}, y: ${rover.travelLog[rover.travelLog.length - 1].y}`
