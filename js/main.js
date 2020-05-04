// setup
let player_turn = "x"
let winner_winner_chicken_dinner = false

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

    // empty msg
    document.querySelector("#msg").innerText = ""

    // reset winner
    winner_winner_chicken_dinner = false


}

// handles the click of a box
function handleBoxClick(e) {

    // determine which box was clicked
    const box = e.target
    console.log("I clicked on ", box)

    // make sure you cant replace an x or o
    if (box.innerText == "x" || box.innerText == "o" || winner_winner_chicken_dinner) { 
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

    // check if there are 3 x's or o's in any row or column or diagonal
    const winners = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        [1, 4, 7],
        [2, 5, 8],
        [3, 6, 9],
        [1, 5, 9],
        [3, 5, 7]
    ]
    winners.forEach(combo => {
        let result = checkForWinner(combo)
        if (result) {
            console.log(result, "wins")
            document.querySelector("#msg").innerText = `${result} wins!`
            winner_winner_chicken_dinner = true
            return
        }
    })

    // if there are then display the winner
    // if all boxes are filled and no winner, display draw

}

function checkForWinner(combo) {
    // console.log("Check for winner in boxes:", combo);
    const results = combo.map(idx => boxes[idx - 1].innerText)
    // console.log("I found: ", results)
    if (results.join("") == "xxx") {
        return "x"
    } else if (results.join("") == "ooo") {
        return "o"
    } 
    return null 
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





