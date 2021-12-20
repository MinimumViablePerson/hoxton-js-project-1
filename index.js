/* <div id="container">
    <!-- Starting Page -->
    <div id="startingPage">
        <h2>Tic Tac Toe</h2>
        <div id="line"></div>
        <h4>Select Which You Want To Be?</h4>
        <div id="button">
            <button id="playerX" class="choose">Player ( X )</button>
            <button id="playerO" class="choose">Player ( O )</button>
        </div>
    </div> */

function renderTiTac() {

    const containerEl = document.createElement('div')
    containerEl.setAttribute('id', 'container')


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
    divBoxes1.setAttribute('id', 'boxes')

    const divBoxes2 = document.createElement('div')
    divBoxes2.setAttribute('id', 'boxes')

    const divBoxes3 = document.createElement('div')
    divBoxes3.setAttribute('id', 'boxes')

    const divBoxes4 = document.createElement('div')
    divBoxes4.setAttribute('id', 'boxes')

    const divBoxes5 = document.createElement('div')
    divBoxes5.setAttribute('id', 'boxes')

    const divBoxes6 = document.createElement('div')
    divBoxes6.setAttribute('id', 'boxes')

    const divBoxes7 = document.createElement('div')
    divBoxes7.setAttribute('id', 'boxes')

    const divBoxes8 = document.createElement('div')
    divBoxes8.setAttribute('id', 'boxes')

    const divBoxes9 = document.createElement('div')
    divBoxes9.setAttribute('id', 'boxes')

    gameBoard.append(divBoxes1, divBoxes2, divBoxes3, divBoxes4, divBoxes5, divBoxes6, divBoxes7, divBoxes8, divBoxes9)


    mainPage.append(headerButton, gameBoard)


    // <!-- WInner Page -->
    // <div id="winner">
    //     <h2 id="winnerName">Player X Win The Game!</h2>
    //     <div id="button">
    //         <button id="quit">Play Again</button>
    //     </div>
    // </div>

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

renderTiTac()