const containerGrid = document.querySelector(".container-grid");

function createGrid(numberOfSquares) {
    while (containerGrid.firstChild) {
        containerGrid.removeChild(containerGrid.lastChild);
    }

    for (let i=0; i<numberOfSquares ** 2; i++) {
        const percentWidth = 100 / numberOfSquares;
        const square = document.createElement("div");
        square.classList.add("square");
        square.setAttribute("style", `height:${percentWidth}%; width:${percentWidth}%;`);
        square.addEventListener("mouseover", () => {
            square.classList.add("square-clicked");
        });
        containerGrid.appendChild(square);
    }
}


const resizeInput = document.querySelector("#resize-input");
resizeInput.value = "enter a number 1-100...";

const resizeButton = document.querySelector("#resize-button");
resizeButton.addEventListener("click", () => {
    createGrid(resizeInput.value);
});

createGrid(16);


