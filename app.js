// Constants

winCombos = [ [0, 1, 2, 3, 4], [5, 6, 7, 8, 9], [10, 11, 12, 13, 14], [15, 16, 17, 18, 19], [20, 21, 22, 23, 24]]

// Variables

let board = []
let turn = null
let winner = null

// Cached Element References

const sq0 = document.getElementById("0")
const sq1 = document.getElementById("1")
const sq2 = document.getElementById("2")
const sq3 = document.getElementById("3")
const sq4 = document.getElementById("4")
const sq5 = document.getElementById("5")
const sq6 = document.getElementById("6")
const sq7 = document.getElementById("7")
const sq8 = document.getElementById("8")
const sq9 = document.getElementById("9")
const sq10 = document.getElementById("10")
const sq11 = document.getElementById("11")
const sq12 = document.getElementById("12")
const sq13 = document.getElementById("13")
const sq14 = document.getElementById("14")
const sq15 = document.getElementById("15")
const sq16 = document.getElementById("16")
const sq17 = document.getElementById("17")
const sq18 = document.getElementById("18")
const sq19 = document.getElementById("19")
const sq20 = document.getElementById("20")
const sq21 = document.getElementById("21")
const sq22 = document.getElementById("22")
const sq23 = document.getElementById("23")
const sq24 = document.getElementById("24")

const squares = [sq0, sq1, sq2, sq3, sq4, 
                sq5, sq6, sq7, sq8, sq9,
                sq10, sq11, sq12, sq13, sq14,
                sq15, sq16, sq17, sq18, sq19,
                sq20, sq21, sq22, sq23, sq24]
const gamesStatus = winner
const renderMsg = document.querySelector("#render-msg")
const reset = document.getElementById("reset")

// Event Listeners

squares.forEach(function(i){
  i.addEventListener('click', handleClick)
  i.addEventListener('mouseover', function(e){
    e.target.style.background = "rgb(273, 61, 0"
  })
  i.addEventListener('mouseout', function(e){
    e.target.style.background = "rgb(196, 19, 102)"
  })
})
reset.addEventListener('click', init)
reset.addEventListener('mouseover', function(e){
  e.target.style.backgroundColor = "rgb(273, 61, 0)"
})
reset.addEventListener('mouseout', function(e){
  e.target.style.backgroundColor = "rgb(196, 19, 0"
})

// Functions

function init(){
  board = [null, null, null, null, null,
          null, null, null, null, null,
          null, null, null, null, null,
          null, null, null, null, null,
          null, null, null, null, null]
  turn = 1
  winner = null
  render()
  squares.forEach(function(i){
    i.innerText = ''
  })
}

function render(){
  if(winner === null){
    if(turn === 1){
      renderMsg.innerText = "Player 1's turn (X)"
    }
    if(turn === -1){
      renderMsg.innerText = "Player 2's turn (0)"
    }
  }
}

function handleClick(event){
  if(winner === null && event.target.innerText === ''){
    if(turn === 1){
      event.target.style.color = 'black'
      event.target.style.innerText = 'X'
      board[event.target.id] = 1
      turn = -1
      render()
      checkWin()
      checkTie()
    } else {
      event.target.style.color = 'white'
      event.target.innerText = '0'
      board[event.target.id] = -1
      turn = 1
      render()
      checkWin()
      checkTie()
    }
  }
}

function checkWin(){
  for(let i = 0; i < winCombos.length; i ++){
    if(board[winCombos[i][0]] + board[[winCombos][i][1]] + board[winCombos[i][2]] + board[winCombos[i][3]] + board[winCombos[i][4]] == 5){
      winner = 1
      renderMsg.innerText = "Player 1 (X) wins!"
    }
    else if(board[winCombos[i][0]] + board[[winCombos][i][1]] + board[winCombos[i][2]] + board[winCombos[i][3]] + board[winCombos[i][4]] == -5){
      winner = -1
      renderMsg.innerText = "Player 2 (O) wins!"
    }
  }
  }

  function checkTie(){
    if(winner === null && board.every(function(i){
      return i !== null
    })){
      winner = 0
      renderMsg.innerText = "The game is a tie."
    }
  }

  init()