// recupero elementi da html
const grid = document.getElementById("grid")
const button = document.getElementById("button")
const playerScore = document.getElementById("score")

//rows e cols
const rows = 10
const cols = 10
const totalCells = rows * cols

//funzione generatore di bombe
const bombsGenerator = (maxBombNumber, totalBombs) => {
    const bombs = []
    while (bombs.length < totalBombs) {
        const randomNumber = Math.floor(Math.random() * maxBombNumber) + 1
        if (!bombs.includes(randomNumber)) bombs.push(randomNumber)

    }
    return bombs
}

//funzione fine gioco

const gameFinished = (score, bombs, hasWon) => {
    const message = hasWon ? "Hai vinto!" : `Hai perso, hai totalizzato ${score} punti!`
    alert(message)
}





button.addEventListener("click", function () {

    button.innerText = "Ricomincia"
    grid.innerHTML = ""

    //info bombe
    let totalBombs = 16

    //score del player
    let score = 0

    //punteggio massimo 
    const maxPoints = totalCells - totalBombs

    // richiamo funzione generatore bombe
    const bombs = bombsGenerator(totalCells, totalBombs)
    console.log(bombs)




    //cell generator
    for (let i = 1; i <= totalCells; i++) {
        //cella
        const cell = document.createElement("div")
        cell.className = "cell"
        cell.innerText = i
        //aggiungere in pagina
        grid.appendChild(cell)

        cell.addEventListener("click", function () {



            if (cell.classList.contains("clicked")) return
            cell.classList.add("clicked")
            console.log(i)

            const asTrampledBomb = bombs.includes(i)

            if (asTrampledBomb) {
                cell.classList.add("bomb")
                console.log("Hai pestato una bomba! Il tuo punteggio è: ", score)
                gameFinished(score, bombs, false)

            } else {
                playerScore.innerText = ++score;
                if (score === maxPoints) {
                    gameFinished(score, bombs, true)
                }

            }



        })
    }


})
