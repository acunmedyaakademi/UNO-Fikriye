//4 players were created and the list holding the deck for each of them was added, it was checked whether it was their turn or not.
let players = [
    { name: "Player 1", hand: [], isPlaying: true },
    { name: "Player 2", hand: [], isPlaying: false },
    { name: "Player 3", hand: [], isPlaying: false },
    { name: "Player 4", hand: [], isPlaying: false }
];


// let nameInput  = document.querySelector('#pName');
// let player3 = document.querySelector('#player3');

// const startBtn = document.getElementById('startBtn');
// startBtn.addEventListener('click', function (){
//     player3.querySelector("h3").innerHTML =nameInput.value
// }, startGame);


let currentPlayer = players[0];
let topCard = null;
let deck = [];
const colors = ['red', 'green', 'blue', 'yellow'];
const values = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', "R", "S", "W", "+2", "+4"];
//R-Reverse
//S-Skip
//W-Wild (color changing card)


//Cards: (0,W,+4):*4 - (1,2,3,4,5,6,7,8,9,R,S,+2):*8
function createDeck() {
    // Function to create playing cards
    for (let i = 0; i <= values.length - 1; i++) {
        for (let j = 0; j < colors.length; j++) {
            if (i === 0) {
                //Card value 0 is generated once for each color.
                deck.push({ value: values[i], color: colors[j] });
            }
            else if (values[i] === "W" || values[i] === "+4") {
                //Card value Wild and +4 generated once.
                deck.push({ value: values[i], color: colors[j] });
            }
            else {
                //Other card values are generated twice.
                deck.push({ value: values[i], color: colors[j] });
                deck.push({ value: values[i], color: colors[j] });
            }
        }
    }
}

function deckShow() {
    for (let i = 0; i < deck.length; i++) {
        console.log(deck[i]);
    }
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function startGame() {
    createDeck();
    shuffle(deck);
    console.table(deck); //Console
    //The dealer deals seven cards to each player.
    for (let i = 0; i < players.length; i++) {
        for (let j = 0; j < 7; j++) {
            players[i].hand.push(deck.pop()); 
            //The dealt cards are removed from the card deck.
        }
    }
    console.table(players); //Console
    topCard = deck.pop(); //The top card is revealed on the table
    console.log(topCard); //Console
    console.table(deck); //Console
}




function playReverse() {}

function playSkip() {}

function playWild() {}

function playPlusTwo() {}

function playPlusFour() {}