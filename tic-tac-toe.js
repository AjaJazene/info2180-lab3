document.addEventListener("DOMContentLoaded", () => {
    // Select all div elements inside the #board element
    const squares = document.querySelectorAll("#board div");

    // Initialize variables to track the game state
    let currentPlayer = "X"; // Keeps track of whose turn it is
    const gameState = Array(9).fill(null); // Array to store X or O in each square

    // Add the 'square' class to each div
    squares.forEach((square,index) => {
        square.classList.add("square");

        square.addEventListener("click", () => {
            // Check if the square is already occupied
            if (gameState[index] === null) {
                // Update the game state
                gameState[index] = currentPlayer;
                
                // Display X or O in the clicked square
                square.textContent = currentPlayer;
                
                // Add the appropriate class (X or O) for styling
                square.classList.add(currentPlayer);

                // Switch to the other player for the next turn
                currentPlayer = currentPlayer === "X" ? "O" : "X";
            }
        });    
    });
});


