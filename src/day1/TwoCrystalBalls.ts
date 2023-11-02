export default function two_crystal_balls(breaks: boolean[]): number {
    // Calculate the number of jumps to make
    const numJumps = Math.floor(Math.sqrt(Math.sqrt(breaks.length)));

    // Start from the first jump point
    let currentFloor = numJumps;

    // First phase: Jump to find a potential breaking floor
    while (currentFloor < breaks.length) {
        // If the crystal ball breaks, we found the potential breaking floor
        if (breaks[currentFloor]) {
            break;
        }
        // Move to the next jump point
        currentFloor += numJumps;
    }

    // Go back to the last jump point
    currentFloor -= numJumps;

    // Second phase: Linear search from the last known safe floor
    for (
        let i = 0;
        i < numJumps && currentFloor < breaks.length;
        i++, currentFloor++
    ) {
        // If the crystal ball breaks, return the floor.
        if (breaks[currentFloor]) {
            return currentFloor;
        }
    }

    // If the ball never breaks, return -1 to show it's safe for all floors.
    return -1;
}
