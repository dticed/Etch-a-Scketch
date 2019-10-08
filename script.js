const gridContainer = document.querySelector(".grid-container");
const blackButton = document.querySelector("#black-button");
const rainbowButton = document.querySelector("#rainbow-button");
const resetButton = document.querySelector("#reset-button");

let gridSize = 16;

function createGrid() {
    let gridRows = gridSize;
    let gridColumns = gridSize;

    for (var i = 0; i < gridRows; i++) {
        const row = document.createElement("div")
        row.classList.add('grid-row');
        gridContainer.appendChild(row);
        for (var j = 0; j < gridColumns; j++) {
            const column = document.createElement("div");
            column.classList.add('grid-column');
            row.appendChild(column);
        };
    };
};

function blackGrid(e) {
    if (e.target.classList[0] === 'grid-column') {
        e.target.style.backgroundColor = 'black';
    };
};

function clearGrid() {
    const pixel = document.querySelectorAll(".grid-column");
    for (i = 0; i < pixel.length; i++) {
        pixel[i].classList.remove;
    };
};

function getRandomColor() {
    const pixel = document.querySelector(".grid-column")
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    };
    return color;
};

function rainbowGrid(e) {
    if (e.target.classList[0] === 'grid-column') {
        e.target.style.backgroundColor = getRandomColor();
        console.log(e.target.id);
    };
};

function newGrid() {
    gridSize = 0;
    clearGrid();
    gridSize = parseInt(prompt("Resize grid:"), 10);
    gridContainer.textContent = '';
    createGrid();
};

function black() {
    gridContainer.removeEventListener('mouseover', rainbowGrid);
    gridContainer.addEventListener('mouseover', blackGrid);
};

function rainbow() {
    gridContainer.removeEventListener('mouseover', black);
    gridContainer.addEventListener('mouseover', rainbowGrid);
};


resetButton.addEventListener('click', newGrid);
rainbowButton.addEventListener('click', rainbow);
blackButton.addEventListener('click', black);

createGrid();