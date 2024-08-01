const container = document.querySelector(".container");

function createGrid(numberOfSquares) {
    for (let i=0; i<numberOfSquares; i++) {
        const square = document.createElement("div");
        square.setAttribute("style", "width:100px; height:100px; border:2px solid black;");
        container.appendChild(square);
    }
}

createGrid(256);