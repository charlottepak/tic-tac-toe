//constants
const playerLookup = {
    '1': 'X',
    '-1': 'O',
    'null': 'transparent'
};

//variables
let board;  //array of column arrays
let turn;  // x or o
let winner;  

document.getElementById('board')
    .addEventListener('click', handleClick);

init();

function init() {
    board = [
        [null, null, null],
        [null, null, null],
        [null, null, null]
    ];

    turn = 1;
    winner = null
}   




function render() {
    // Render the board
    board.forEach(function(colArr, colIdx) {
      colArr.forEach(function(cell, rowIdx) {
        const div = document.getElementById(`c${colIdx}r${rowIdx}`);
        div.style.backgroundColor = playerLookup[cell];
      });
    });
    if (winner) {

    } else {
        msgEl.innerHTML = `<span style="color": ${playerLookup[turn]}">${playerLookup[turn].toUpperCase()}'s Turn`;
    }
  }

function handleClick(evt) {
   const colIdx = markerEls.indevOf(evt.target);
   if (colIdx === -1) return;
   
   const colArr = board[colIdx];
   const rowIdx = colArr.indexOf(null);
   
   if (colIdx === -1) return;

   colArr[rowIdx] = turn;


    turn *= -1;
    render();
}





