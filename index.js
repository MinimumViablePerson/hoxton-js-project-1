// How Can We Change Turns
// False => X's Turn
// True => O's Turn

// All Possible Winning Combinations
const state = {
    changeTurn: null,
    winningCombinations3x3: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
}

function renderTiTac3x3() {

    const containerEl = document.createElement('div')
    containerEl.setAttribute('id', 'container')

    // Starting Page

    const startingPage = document.createElement('div')
    startingPage.setAttribute('id', 'startingPage')

    const titlegame = document.createElement('h2')
    titlegame.textContent = 'Tic Tac Toe'

    const divLine = document.createElement('div')
    divLine.setAttribute('id', 'line')

    const selectTitle = document.createElement('h4')
    selectTitle.textContent = 'Select Which You Want To Be?'

    const buttonDiv = document.createElement('div')
    buttonDiv.setAttribute('id', 'button')

    const buttonPlayerx = document.createElement('button')
    buttonPlayerx.setAttribute('id', 'playerX')
    buttonPlayerx.setAttribute('class', 'choose')
    buttonPlayerx.textContent = 'Player ( X )'

    const buttonPlayero = document.createElement('button')
    buttonPlayero.setAttribute('id', 'playerO')
    buttonPlayero.setAttribute('class', 'choose')
    buttonPlayero.textContent = 'Player ( O )'

    buttonDiv.append(buttonPlayerx, buttonPlayero)

    startingPage.append(titlegame, divLine, selectTitle, buttonDiv)



    // <!-- Main Page -->
    // <div id="mainPage">
    //     <div id="headerBtns">
    //         <button id="">X Turn</button>
    //         <button id="O_Turn">O Turn</button>
    //         <div id="showChange"></div>
    //     </div>
    //     <div id="gameBoard">
    //         <div class="boxes"></div>
    //         <div class="boxes"></div>
    //         <div class="boxes"></div>
    //         <div class="boxes"></div>
    //         <div class="boxes"></div>
    //         <div class="boxes"></div>
    //         <div class="boxes"></div>
    //         <div class="boxes"></div>
    //         <div class="boxes"></div>
    //     </div>
    // </div>

    // Main Page

    const mainPage = document.createElement('div')
    mainPage.setAttribute('id', 'mainPage')

    const headerButton = document.createElement('div')
    headerButton.setAttribute('id', 'headerBtns')

    const buttonX = document.createElement('button')
    buttonX.setAttribute('id', '')
    buttonX.textContent = 'X Turn'

    const buttonO = document.createElement('button')
    buttonO.setAttribute('id', 'O_Turn')
    buttonO.textContent = 'O Turn'

    const showChange = document.createElement('div')
    showChange.setAttribute('id', 'showChange')

    headerButton.append(buttonX, buttonO, showChange)



    const gameBoard = document.createElement('div')
    gameBoard.setAttribute('id', 'gameBoard')

    const divBoxes1 = document.createElement('div')
    divBoxes1.setAttribute('class', 'boxes')

    const divBoxes2 = document.createElement('div')
    divBoxes2.setAttribute('class', 'boxes')

    const divBoxes3 = document.createElement('div')
    divBoxes3.setAttribute('class', 'boxes')

    const divBoxes4 = document.createElement('div')
    divBoxes4.setAttribute('class', 'boxes')

    const divBoxes5 = document.createElement('div')
    divBoxes5.setAttribute('class', 'boxes')

    const divBoxes6 = document.createElement('div')
    divBoxes6.setAttribute('class', 'boxes')

    const divBoxes7 = document.createElement('div')
    divBoxes7.setAttribute('class', 'boxes')

    const divBoxes8 = document.createElement('div')
    divBoxes8.setAttribute('class', 'boxes')

    const divBoxes9 = document.createElement('div')
    divBoxes9.setAttribute('class', 'boxes')


    gameBoard.append(divBoxes1, divBoxes2, divBoxes3, divBoxes4, divBoxes5, divBoxes6, divBoxes7, divBoxes8, divBoxes9)

    const switchLink = document.createElement('a')
    switchLink.setAttribute('href', '/4x4game/index4x4.html')
    switchLink.textContent = 'Switch to 4x4 game'


    mainPage.append(headerButton, gameBoard, switchLink)


    // <!-- WInner Page -->
    // <div id="winner">
    //     <h2 id="winnerName">Player X Win The Game!</h2>
    //     <div id="button">
    //         <button id="quit">Play Again</button>
    //     </div>
    // </div>

    // WInner Page

    const divWiner = document.createElement('div')
    divWiner.setAttribute('id', 'winner')

    const winerName = document.createElement('h2')
    winerName.setAttribute('id', 'winnerName')
    winerName.textContent = 'Player X Win The Game!'

    const btnPlay = document.createElement('div')
    btnPlay.setAttribute('id', 'button')

    const btnQuit = document.createElement('button')
    btnQuit.setAttribute('id', 'quit')
    btnQuit.textContent = 'Play Again'

    btnPlay.append(btnQuit)

    divWiner.append(winerName, btnPlay)


    containerEl.append(startingPage, mainPage, divWiner)

    document.body.append(containerEl)

}

function render() {
    document.body.innerHTML = ''
    renderTiTac3x3()
}

render()


//X => <i class="fas fa-times"></i>
//O => <i class="fas fa-circle-notch"></i>

// Selecting All "Starting Page" Tags
let startingPage = document.querySelector("#startingPage");
let choose = document.querySelectorAll(".choose");

// Selecting All "Main Page" Tags
let mainPage = document.querySelector("#mainPage");
let showChange = document.querySelector("#showChange");
let boxes = document.querySelectorAll(".boxes");

// Selecting All "Winner Page" Tags
let winner = document.querySelector("#winner");
let winnerName = document.querySelector("#winnerName");
let quit = document.querySelector("#quit");

// Select Button 3x3

function renderfunction3x3() {

    // Select Which You Want To Be>
    // X or O
    choose.forEach(chooseNow => {
        chooseNow.addEventListener("click", () => {
            if (chooseNow.id === "playerX") {
                state.changeTurn = false;
                // console.log(state.changeTurn);
                showChange.style.left = `0px`;
            } else {
                state.changeTurn = true;
                // console.log(state.changeTurn);
                showChange.style.left = `160px`;
            }
            startingPage.style.display = "none";
            mainPage.style.display = "block";
        })
    });

    boxes.forEach(items => {
        items.addEventListener("click", () => {
            // Add "X" Icon If "state.changeTurn" = False
            // Add "O" Icon If "state.changeTurn" = True
            if (state.changeTurn == false) {
                items.innerHTML = `<i class="fas fa-times"></i>`;
                items.id = "X";
                items.style.pointerEvents = "none";
                showChange.style.left = `160px`;

                // change The "state.changeTurn" Value False Into True
                state.changeTurn = true;
            } else {
                items.innerHTML = `<i class="fas fa-circle-notch"></i>`;
                items.id = "O";
                items.style.pointerEvents = "none";
                showChange.style.left = `0px`;

                // change The "state.changeTurn" Value False Into True
                state.changeTurn = false;
            }
            winningFunc();
            drawFunc();
        })
    })


    let winningFunc = () => {
        for (let a = 0; a <= 7; a++) {
            let b = state.winningCombinations3x3[a];
            // console.log(b);

            if (boxes[b[0]].id == "" || boxes[b[1]].id == "" || boxes[b[2]].id == "") {
                continue;
            } else if (boxes[b[0]].id == "X" && boxes[b[1]].id == "X" && boxes[b[2]].id == "X") {
                // console.log("X is The Winner");

                // Adding Winner text
                winnerName.innerText = `Player X Win The Game!`;

                // show "Winner Page" & Hide "Mai Page"
                mainPage.style.display = "none";
                winner.style.display = "block";
            } else if (boxes[b[0]].id == "O" && boxes[b[1]].id == "O" && boxes[b[2]].id == "O") {
                // console.log("O is The Winner");

                // Adding Winner text
                winnerName.innerText = `Player O Win The Game!`;

                // show "Winner Page" & Hide "Mai Page"
                mainPage.style.display = "none";
                winner.style.display = "block";
            } else {
                continue;
            }
        }
    }

    // Match Draw Function
    let drawFunc = () => {
        if (boxes[0].id != "" && boxes[1].id != "" &&
            boxes[2].id != "" && boxes[3].id != "" &&
            boxes[4].id != "" && boxes[5].id != "" &&
            boxes[6].id != "" && boxes[7].id != "" && boxes[8].id != "") {
            // Adding "Draw" text
            winnerName.innerText = `Match Draw!`;

            // show "Winner Page" & Hide "Mai Page"
            mainPage.style.display = "none";
            winner.style.display = "block";
        }
    }
}
renderfunction3x3()


// Reset Game
quit.addEventListener("click", () => {
    window.location.reload();
})