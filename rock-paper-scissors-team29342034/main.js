const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";

function getWinner(player1, player2) {
  /*
    S, P // WIN
    R, S // WIN
    P, R // WIN
    
    P, P // DRAW
    R, R // DRAW
    S, S // DRAW
    
    P, S // LOSE
    S, R // LOSE
    R, P // LOSE
    */

  if (
    (player1 === SCISSORS && player2 === PAPER) ||
    (player1 === ROCK && player2 === SCISSORS) ||
    (player1 === SCISSORS && player2 === PAPER)
  ) {
    return 1;
  } else if (
    (player1 === PAPER && player2 === SCISSORS) ||
    (player1 === SCISSORS && player2 === ROCK) ||
    (player1 === ROCK && player2 === PAPER)
  ) {
    return -1;
  }
  return 0;
}

function getRandomComputerMove() {
  // Should return one of: PAPER, SCISSORS, ROCK
  let n = Math.random() * 3;
  n = Math.floor(n);
  if (n === 0) {
    return PAPER;
  } else if (n === 1) {
    return SCISSORS;
  }
  return ROCK;
}
const counts = {
  WIN: 0,
  DRAW: 0,
  LOSE: 0,
  GAMES: 0,
  userName: "",
};

function updateInfo() {
  document.querySelector("#info__win").innerText = counts.WIN;
  document.querySelector("#info__lose").innerText = counts.LOSE;
  document.querySelector("#info__draw").innerText = counts.DRAW;
  document.querySelector("#info__game").innerText = counts.GAMES;
}

function getImageSrcFromMove(move) {
  const mapping = {
    [ROCK]: "rock.jpg",
    [PAPER]: "paper.jpg",
    [SCISSORS]: "scissors.png",
  };
  return "images/" + mapping[move];
}

function choiceHandler(event) {
  const playerMove = event.target.value;
  const computerMove = getRandomComputerMove();
  const score = getWinner(playerMove, computerMove);

  if (score === 1) {
    counts.WIN++;
  } else if (score === -1) {
    counts.LOSE++;
  } else {
    counts.DRAW++;
  }
  counts.GAMES++;

  const contestant1 = document.getElementById("contestant1");
  contestant1.src = getImageSrcFromMove(playerMove);

  const contestant2 = document.getElementById("contestant2");
  contestant2.src = getImageSrcFromMove(computerMove);

  console.log({ playerMove, computerMove, contestant1, contestant2 });

  contestant1.classList.remove("hidden-v");
  contestant1.classList.add("contestant-1");

  contestant2.classList.add("contestant-2");
  contestant2.classList.remove("hidden-v");

  updateInfo();
  setTimeout(() => {
    contestant1.classList.remove("contestant-1");
    contestant1.classList.add("hidden-v");

    contestant2.classList.remove("contestant-2");
    contestant2.classList.add("hidden-v");
  }, 2e3);
}

function restartGame() {
  counts.WIN = 0;
  counts.DRAW = 0;
  counts.LOSE = 0;
  counts.GAMES = 0;

  updateInfo();
}

/*

## Task 7: DOM

Refactor your application so that all interactions are through HTML elements rather than `confirm`, `alert` and `prompt`. Using the DOM allows our game to be event driven, so you may want to remove the while loop and instead compute the winner when an event is fired.

This will be deemed as complete when `confirm`, `alert` and `prompt` are no longer used, user interaction is handled with HTML elements and all the information is displayed on the page.

*/

const startButton = document.querySelector("#startGame");
startButton.addEventListener("click", function () {
  const userName = document.querySelector("#usernameInput");
  if (!isUserNameValid(userName.value)) {
    alert("Please enter a valid username.");
    return;
  }
  const userNameInTable = document.querySelector("#info__username");
  userNameInTable.innerText = titleCase(userName.value);

  document.querySelector("#start-screen").style.display = "none";
  document.querySelector("#game-screen").classList.remove("hidden");
});

const restartButton = document.querySelector("#restart-game");
restartButton.addEventListener("click", restartGame);

const dropDown = document.querySelector("#moves");
dropDown.addEventListener("change", choiceHandler);

function isUserNameValid(userName) {
  return (
    "string" === typeof userName && // Is a string
    userName.length <= 10 && // No more than 10 characters
    /^[a-zA-Z]/.test(userName) // begin with English letter
  );
}

function titleCase(someText) {
  return someText[0].toUpperCase() + someText.slice(1);
}

// Add an end game button which displays the final scores

/*
## Task 8: Validation

Create a username input and use the information in the game so that a player can see their name when looking at scores.

To make it more uniform we will restrict the number of characters a username can be.

This will be deemed as complete when the users cannot enter a name longer than 10 characters.

BONUS: Valid usernames should only start with letters, not numbers or symbols.
EXTRA BONUS: The first letter of the username should be capitalised.

*/
