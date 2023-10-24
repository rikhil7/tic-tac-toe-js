//list down all the winning combinations

let winningCombination = [
    [1, 2, 3], //vertical
    [4, 5, 6], //vertical
    [7, 8, 9], //vertical
    [1, 4, 7], //horizontal
    [2, 5, 8], //horizontal
    [3, 6, 9], //horizontal
    [1, 5, 9],
    [3, 5, 7]
];

//accessing all boxes

let boxElement = document.querySelectorAll(".box");

//providing event listener to all the boxes

for(elem of boxElement){
    elem.addEventListener("click", handleClick);
}
let isWon = false
let click = 0
let xAttempts = []
let oAttempts = []
function handleClick(event){
    console.log(event.target.id);
    let id = event.target.id
    let ptag = document.createElement("p")
    ptag.style.color = "#FAB201"
    // ptag.textContent = "X"
    boxElement[id-1].appendChild(ptag)
    if (click%2==0){
        ptag.textContent = "X"
        click++
        xAttempts.push(parseInt(id))
        result(xAttempts, "X")
    }
    else{
        ptag.textContent = "O"
        click++
        oAttempts.push(parseInt(id))
        result(oAttempts, "O")
    }
    if (click==9 && isWon==false){
        resultBox.style.visibility = "visible"
        messageBox.textContent = "It's a Draw"
    }
}
let resultBox = document.getElementById("result")
let messageBox = document.getElementById("message")
let play_again = document.getElementById("button")
play_again.addEventListener("click", ()=> {
    window.open("index.html", "_self")
})
function result(playerArray, player){
    for(let i=0; i<winningCombination.length; i++){
        let check = true
        for(let j=0; j<winningCombination[i].length; j++){
            if (playerArray.includes(winningCombination[i][j]) == false){
                check = false
                break
            }
        }
        if (check==true){
            isWon = true
            resultBox.style.visibility = "visible"
            console.log(player, "won the game")
            messageBox.textContent = player + " Won the match"
        }
    }
}