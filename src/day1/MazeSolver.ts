// Define possible directions to move in the maze (up, down, left, right).
const dir = [
    [-1, 0], // Move left
    [1, 0], // Move right
    [0, -1], // Move up
    [0, 1], // Move down
];

// Define a recursive function "walk" that explores the maze and finds a path.
function walk(
    maze: string[], // The maze represented as a grid of characters
    wall: string, // The character representing a wall in the maze
    curr: Point, // The current position (point) in the maze
    end: Point, // The destination position (point) in the maze
    seen: boolean[][], // A grid to keep track of visited positions
    path: Point[], // An array to store the path taken
): boolean {
    // Base case
    // Check if we're:
    // 1. Off the board (outside the maze boundaries)
    if (
        curr.x < 0 ||
        curr.x >= maze[0].length ||
        curr.y < 0 ||
        curr.y >= maze.length
    ) {
        return false;
    }
    // 2. On a wall (a blocked position in the maze)
    if (maze[curr.y][curr.x] === wall) {
        return false;
    }
    // 3. On the end (reached the destination)
    if (curr.x === end.x && curr.y === end.y) {
        path.push(end);
        return true;
    }
    // 4. On a visited square (a position that has already been explored)
    if (seen[curr.y][curr.x]) {
        return false;
    }

    // Recursive exploration
    // Before moving, mark the current position as visited.
    seen[curr.y][curr.x] = true;
    path.push(curr);

    // Explore in all possible directions
    for (let i = 0; i < dir.length; ++i) {
        const [x, y] = dir[i];
        if (
            walk(
                maze,
                wall,
                {
                    x: curr.x + x,
                    y: curr.y + y,
                },
                end,
                seen,
                path,
            )
        ) {
            return true;
        }
    }

    // After exploring all directions, backtrack by removing the current position.
    path.pop();

    return false;
}

// Export a function "solve" that finds a path through the maze.
export default function solve(
    maze: string[], // The maze represented as a grid of characters
    wall: string, // The character representing a wall in the maze
    start: Point, // The starting position (point) in the maze
    end: Point, // The destination position (point) in the maze
): Point[] {
    const seen: boolean[][] = []; // Create a grid to track visited positions.
    const path: Point[] = []; // Create an array to store the path.

    // Initialize the "seen" grid to mark all positions as not visited.
    for (let i = 0; i < maze.length; ++i) {
        seen.push(new Array(maze[0].length).fill(false));
    }

    // Start exploring the maze from the "start" position.
    walk(maze, wall, start, end, seen, path);

    // Return the path found through the maze.
    return path;
}
