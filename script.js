const containerGrid = document.querySelector(".container-grid");

function createGrid(numberOfSquares) {
    for (let i=0; i<numberOfSquares; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.addEventListener("mouseover", () => {
            square.setAttribute("style", "background: black;");
        });
        containerGrid.appendChild(square);
    }
}

function resizeGrid(numberOfSquares) {
    const sizeOfSquare = Math.floor(950 / numberOfSquares);
    while (containerGrid.firstChild) {
        containerGrid.removeChild(containerGrid.lastChild);
    }
    createGrid(numberOfSquares);
}


const resizeInput = document.querySelector("#resize-input");
resizeInput.value = "enter a number 1-100...";

const resizeButton = document.querySelector("#resize-button");
resizeButton.addEventListener("click", () => {
    resizeGrid(resizeInput.value);
});

createGrid(256);


