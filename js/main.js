// setup
let player_turn = "x"

// listen for clicks
const boxes = document.querySelectorAll("#board DIV")
boxes.forEach(box => box.addEventListener("click", handleBoxClick))

// listen for reset button
document.querySelector("button").addEventListener("click", resetEverything)

// restarts everything
function resetEverything() {

    // empty existing box.innerText
    boxes.forEach(box => box.innerText = "")

    // return to player x
    player_turn = "x"

}

// handles the click of a box
function handleBoxClick(e) {

    // determine which box was clicked
    const box = e.target
    console.log("I clicked on ", box)

    // make sure you cant replace an x or o
    if (box.innerText == "x" || box.innerText == "o") { 
       return
    }

    // fill in the player's icon
    box.innerText = player_turn

    // swich players' turns
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





