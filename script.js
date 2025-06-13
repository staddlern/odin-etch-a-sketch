let grid = document.querySelector("#grid");

function initializeGrid(x) {
    grid.innerHTML = "";

    for (let i = 0; i < x; i++) {
        let gridRow = document.createElement("div");
        gridRow.id = "gridRow-" + i;
        gridRow.style.display = "flex";
        for (let j = 0; j < x; j++) {
            let gridColumn = document.createElement("div");
            gridColumn.id = "gridColumn-" + i + "-" + j;
            gridColumn.style.padding = (100/(2*x)) + "%";
            gridColumn.addEventListener("mouseover", function(e) {
                e.target.style.background = "black";
            });
            gridRow.appendChild(gridColumn);
        }
        grid.appendChild(gridRow);
    }
}

function getGridNumber() {
    let choice = parseInt(prompt("Pick the number of squares on each size"));
    if (choice > 0 && choice < 101) {
        initializeGrid(choice);
    }
    else {
        alert("Invalid number picked. Pick between 1 and 100.");
    }
}

initializeGrid(16);