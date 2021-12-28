// How Can We Change Turns
// False => X's Turn
// True => O's Turn

const board3x3 = ['', '', '', '', '', '', '', '', '']
const board4x4 = [
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  ''
]

const winningCombinations3x3 = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

const winningCombinations4x4 = [
  [0, 1, 2, 3],
  [4, 5, 6, 7],
  [8, 9, 10, 11],
  [12, 13, 14, 15],
  [0, 4, 10, 12],
  [1, 5, 9, 13],
  [2, 6, 10, 14],
  [3, 7, 11, 15],
  [0, 5, 10, 15],
  [3, 6, 9, 12]
]

// All Possible Winning Combinations
const state = {
  board: ['', '', '', '', '', '', '', '', ''],
  winningCombinations: [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ],
  turn: null,
  boardSize: 3
}

function checkIfDraw () {
  return state.board.every(tile => tile !== '')
}

function checkIfWinner () {
  return state.winningCombinations.some(combinations =>
    combinations.every(index => state.board[index] === state.turn)
  )
}

function getStatus () {
  if (state.turn === null) return 'choosingPlayer'
  if (checkIfDraw()) return 'draw'
  if (checkIfWinner()) return 'finished'
  return 'playing'
}

function renderStartingPage (containerEl) {
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
  buttonPlayerx.addEventListener('click', function () {
    state.turn = 'X'
    render()
  })

  const buttonPlayero = document.createElement('button')
  buttonPlayero.setAttribute('id', 'playerO')
  buttonPlayero.setAttribute('class', 'choose')
  buttonPlayero.textContent = 'Player ( O )'
  buttonPlayero.addEventListener('click', function () {
    state.turn = 'O'
    render()
  })

  buttonDiv.append(buttonPlayerx, buttonPlayero)

  const sizePickSection = document.createElement('div')

  const pickBoardSizeH2 = document.createElement('h4')
  pickBoardSizeH2.textContent = 'Pick a board size'
  sizePickSection.append(pickBoardSizeH2)

  for (const size of [3, 4]) {
    const labelEl = document.createElement('label')
    labelEl.setAttribute('class', 'size-radio-label')
    labelEl.textContent = size

    const radioEl = document.createElement('input')
    radioEl.setAttribute('type', 'radio')
    radioEl.setAttribute('name', 'size')
    radioEl.value = size
    if (size === state.boardSize) radioEl.checked = true
    radioEl.addEventListener('click', function () {
      state.boardSize = size
      if (state.boardSize === 3) {
        state.board = board3x3.slice()
        state.winningCombinations = winningCombinations3x3.slice()
      }
      if (state.boardSize === 4) {
        state.board = board4x4.slice()
        state.winningCombinations = winningCombinations4x4.slice()
      }
      render()
    })

    labelEl.append(radioEl)
    sizePickSection.append(labelEl)
  }

  startingPage.append(
    titlegame,
    divLine,
    selectTitle,
    buttonDiv,
    sizePickSection
  )
  containerEl.append(startingPage)
}

function renderMainPage (containerEl) {
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
  showChange.setAttribute('class', state.turn)

  headerButton.append(buttonX, buttonO, showChange)

  const gameBoard = document.createElement('div')
  gameBoard.setAttribute('id', 'gameBoard')
  gameBoard.setAttribute(
    'style',
    `grid-template-columns: repeat(${state.boardSize}, auto);`
  )

  for (const index in state.board) {
    const tile = state.board[index]
    const tileEl = document.createElement('div')
    tileEl.setAttribute('class', 'boxes')

    if (tile === 'X') tileEl.innerHTML = `<i class="fas fa-times"></i>`
    if (tile === 'O') tileEl.innerHTML = `<i class="fas fa-circle-notch"></i>`
    if (tile === '') {
      tileEl.addEventListener('click', function () {
        state.board[index] = state.turn
        if (!checkIfWinner()) state.turn = state.turn === 'X' ? 'O' : 'X'
        render()
      })
    }

    gameBoard.append(tileEl)
  }

  mainPage.append(headerButton, gameBoard)
  containerEl.append(mainPage)
}

function renderWinnerPage (containerEl) {
  const divWiner = document.createElement('div')
  divWiner.setAttribute('id', 'winner')

  const winerName = document.createElement('h2')
  winerName.setAttribute('id', 'winnerName')
  winerName.textContent = `Player ${state.turn} Wins The Game!`

  const btnPlay = document.createElement('div')
  btnPlay.setAttribute('id', 'button')

  const playAgainBtn = document.createElement('button')
  playAgainBtn.setAttribute('id', 'quit')
  playAgainBtn.textContent = 'Play Again'
  playAgainBtn.addEventListener('click', function () {
    state.board = ['', '', '', '', '', '', '', '', '']
    state.turn = null
    render()
  })

  btnPlay.append(playAgainBtn)

  divWiner.append(winerName, btnPlay)
  containerEl.append(divWiner)
}

function renderTicTac () {
  const containerEl = document.createElement('div')
  containerEl.setAttribute('id', 'container')

  if (getStatus() === 'choosingPlayer') renderStartingPage(containerEl)
  if (getStatus() === 'playing') renderMainPage(containerEl)
  if (getStatus() === 'finished') renderWinnerPage(containerEl)

  document.body.append(containerEl)
}

function render () {
  document.body.innerHTML = ''
  renderTicTac()
}

render()
