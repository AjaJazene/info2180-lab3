document.addEventListener("DOMContentLoaded", () => {
    // Select all div elements inside the #board element
    const squares = document.querySelectorAll("#board div");

    // Add the 'square' class to each div
    squares.forEach(square => {
        square.classList.add("square");
    });
});