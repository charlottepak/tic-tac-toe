//constants
const playerLookup = {
    '1': 'X',
    '-1': 'O',
    'null': 'transparent'
};

// //variables
// let board;  //array of column arrays
// let turn;  // x or o
// let winner;  

// document.getElementById('board')
//     .addEventListener('click', handleClick);

// init();

// function init() {
//     board = [
//         [null, null, null],
//         [null, null, null],
//         [null, null, null]
//     ];

//     turn = 1;
//     winner = null
// }

let player_turn = "x"

const boxes = document.querySelectorAll("#board DIV")
boxes.forEach(box => box.addEventListener("click", handleBoxClick))

function handleBoxClick(e) {
    const box = e.target
    console.log("I clicked on ", box)
    /* display x
    switch playerß
    */
    box.innerText = player_turn
    if (player_turn == "o") {
        player_turn = "x"
    } else {
        player_turn = "o"
    }
}
/*

- setup

- what you're gonna do
listen for click 
if a box is click and doesnt already have an x or o then add x or o
switch player
repeat until player has 3 x's or o's in a row
disply winner
if no x's or o's line up to 3 then it's a tie
display outcome

- cleanup
replay
*/





