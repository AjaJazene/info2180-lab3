document.addEventListener("DOMContentLoaded", () => {
    // Select all div elements inside the #board element
    const squares = document.querySelectorAll("#board div");

    // Initialize variables to track the game state
    let currentPlayer = "X"; // Keeps track of whose turn it is
    let gameActive = true; // Keeps track of game state
    const gameState = Array(9).fill(null); // Array to store X or O in each square
    const statusDiv = document.getElementById("status");
    const newGameButton = document.querySelector(".btn");
    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    // Add the 'square' class to each div
    squares.forEach((square,index) => {
        square.classList.add("square");

        square.addEventListener("click", () => {
            // Check if the square is already occupied
            if (gameActive && gameState[index] === null) { // Check if game is active and square is empty
                // Update the game state
                gameState[index] = currentPlayer;
                
                // Display X or O in the clicked square
                square.textContent = currentPlayer;
                
                // Add the appropriate class (X or O) for styling
                square.classList.add(currentPlayer);

                if (checkWin()) {
                    gameActive = false; // Stop the game after a win
                    statusDiv.textContent = `Congratulations! ${currentPlayer} is the Winner!`;
                    statusDiv.classList.add("you-won");
                } else {
                    // Switch to the other player for the next turn
                    currentPlayer = currentPlayer === "X" ? "O" : "X";
                }

              
            }
        }); 
        
       // Hover effect for styling
       square.addEventListener("mouseover", () => {
        if (gameActive && gameState[index] === null) {
            square.classList.add("hover");
        }
        });

        square.addEventListener("mouseout", () => {
            square.classList.remove("hover");
        });
    
    });

    function checkWin() {
        return winningCombinations.some(combination => {
            const [a, b, c] = combination;
            return gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c];
        });
    }



    newGameButton.addEventListener("click", () => {
        // Reset the game state
        gameState.fill(null);
        gameActive = true; // Reactivate the game

       

        // Reset to starting player
        currentPlayer = "X";

         // Clear all squares
         squares.forEach(square => {
            square.textContent = "";
            square.classList.remove("X", "O");
        });

        // Reset the status message
        statusDiv.textContent = "Move your mouse over a square and click to play an X or an O.";
        statusDiv.classList.remove("you-won");
    });    
});


