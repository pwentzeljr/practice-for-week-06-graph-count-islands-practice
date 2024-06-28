function getNeighbors(row, col, matrix) {

  // Check top
  // Check top right
  // Check right
  // Check bottom right
  // Check bottom
  // Check bottom left
  // Check left
  // Check top left
  // Return neighbors

  // Your code here
  const rv = [];

  const adj = [-1, 0, 1];

  for (const r of adj) {
    for (const c of adj) {
      if (!r && !c) continue;

      if (matrix[row + r] && matrix[row + r][col + c]) {
        rv.push([row + r, col + c]);
      }
    }
  }

  return rv;
}

function countIslands(matrix) {

  // Create a visited set to store visited nodes
  // Initialize count to 0
  // Iterate through all indices in matrix
    // If an index contains a 1 and has not been visited,
    // increment island count and start traversing neighbors
      // DO THE THING (increment island count by 1)
      // Initialize a stack with current index
      // Add stringified version of current index to the visited set
      // While stack contains elements
        // Pop element from stack
        // Get valid neighbors of current element
        // Iterate over neigbors
          // If neighbor has not been visited
            // Add neighbor to stack
            // Mark neighbor as visited
  // Return island count

  // Your code here
  const visited = new Set();
  let count = 0;

  for (let r = 0; r < matrix.length; r++) {
    for (let c = 0; c < matrix[0].length; c++) {
      if (matrix[r][c] && !visited.has(`${r},${c}`)) {
        count++;
        visited.add(`${r},${c}`)

        const stack = [[r,c]];

        while (stack.length > 0) {
          curr = stack.pop()
          const neigbors = getNeighbors(curr[0], curr[1], matrix);

          for (const neigbor of neigbors) {
            if (!visited.has(neigbor.toString())) {
              stack.push(neigbor);
              visited.add(neigbor.toString());
            }
          }
        }
      }
    }
  }
  return count;

}

// Uncomment the lines below for local testing
// const matrix = [
//                 [1,1,1,0,0],
//                 [0,1,1,0,1],
//                 [0,1,1,0,1]
//               ]

// console.log(getNeighbors(1, 1, matrix)); // [[0, 0], [0, 1], [0, 2], [1, 2], [2, 1], [2, 2]]
// console.log(getNeighbors(2,4, matrix)) // [[1,4]]

// const matrix2 = [
//                     [1,1,1,0,1],
//                     [0,0,0,0,1],
//                     [1,0,0,1,0],
//                 ]

// console.log(countIslands(matrix)) // 2
// console.log(countIslands(matrix2)); // 3

module.exports = [countIslands, getNeighbors];
