const container = document.querySelector(".container");

function createGrid(numberOfSquares) {
    for (let i=0; i<numberOfSquares; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.addEventListener("mouseover", () => {
            square.setAttribute("style", "background: black;");
        });
        container.appendChild(square);
    }
}

const resizeButton = document.querySelector("#resize-button");

createGrid(256);

