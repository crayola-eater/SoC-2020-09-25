# Rock Paper Scissors!

## Task 1: Logic

To complete this ticket you will need a set of if statements that will determine the winner of rock paper scissors. The two moves should be stored in two variables like so...

```js
let playerMove = "rock";
let computerMove = "paper";
```

This will be deemed as complete when all permutations of the three possible moves for each player have been handled correctly.

e.g. rock vs rock is a draw, paper vs rock is a paper win, etc.

## Task 2: Functions

Take the if statements that you've written and put them into a function. The variables from before should now be taken in as parameters so that you can call the function with any two moves. Instead of printing the result to the console, the function should return...

- 1 if player1 wins
- 0 if it is a draw
- -1 if player1 loses (player2 wins)

The function should be able to be used like so...

```js
function getWinner(player1, player2) {
  // code goes here...
}

let result = getWinner("rock", "paper");
```

This will be deemed as complete when the function can be called with any combination of valid moves and returns the appropriate number.

## Task 3: User Input

Using `prompt`, get a user inputted value for the player move. Then call your function with that value and the hard coded computer move. Display the result using `alert`.

## Task 4: Computer Player

Write a function that generates a random computer move (`Math.random()` might be useful...). Use that function to make a dynamic game where the computer move is randomly chosen every time.

## Task 5: Game Loop

Now that we have a fully functioning game, our next step is to have it run as many times as people like without having to refresh the page.

Use a `while loop` and `confirm`.

This will be deemed as complete when a player can keep playing indefinitely, and has the option to stop playing after every round.

## Task 6: Scores

Keep track of how many games have been played as well as the number of wins, losses and draws.

This will be deemed as complete when the information is displayed after each round.

## Task 7: DOM

Refactor your application so that all interactions are through HTML elements rather than `confirm`, `alert` and `prompt`. Using the DOM allows our game to be event driven, so you may want to remove the while loop and instead compute the winner when an event is fired.

This will be deemed as complete when `confirm`, `alert` and `prompt` are no longer used, user interaction is handled with HTML elements and all the information is displayed on the page.

## Task 8: Validation

Create a username input and use the information in the game so that a player can see their name when looking at scores.

To make it more uniform we will restrict the number of characters a username can be.

This will be deemed as complete when the users cannot enter a name longer than 10 characters.

BONUS: Valid usernames should only start with letters, not numbers or symbols.
EXTRA BONUS: The first letter of the username should be capitalised.

## Task 9: Style and Animate

Use your remaining time to add some style flair and animation to the experience.

Some resources...

- [animations](https://animista.net/)
- [colour schemes](https://coolors.co/generate)
- [gradients](https://uigradients.com/)
- [box shadows](https://getcssscan.com/css-box-shadow-examples)
