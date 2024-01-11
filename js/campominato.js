// recupero elementi da html
const grid = document.getElementById("grid")
const button = document.getElementById("button")
const playerScore = document.getElementById("score")

//rows e cols
const rows = 10
const cols = 10
const totalCells = rows * cols





button.addEventListener("click", function () {

    button.innerText = "Ricomincia"
    grid.innerHTML = ""

    //info bombe
    let totalBombs = 16

    //score del player
    let score = 0
    playerScore.innerText = score

    //cell generator
    for (let i = 0; i < totalCells; i++) {
        //cella
        const cell = document.createElement("div")
        cell.className = "cell"
        cell.innerText = i + 1
        //aggiungere in pagina
        grid.appendChild(cell)

        cell.addEventListener("click", function () {
            if (cell.classList.contains("clicked")) return
            cell.classList.add("clicked")
            console.log(i + 1)
        })
    }

})
