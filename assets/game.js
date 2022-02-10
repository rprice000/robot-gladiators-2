// Line below is used to test to see if javascript file is connected to the HTML File
// window.alert("This is an alert! Javascript is running!");

// Line below sends a prompt asking for an input of some type
// window.prompt("What is your robot's name?");

// Line below takes input form the prompt and stores in as an object called playerName
// var playerName = window.prompt("What is your robot's name?");

// Line below will return variable playerName in an alert box after the user inputs a name from the window.prompt
// window.alert(playerName);
// Line below will return variable playerName in the console after the user inputs a name from the window.prompt 
// console.log(playerName);

// 3 Lines below show how console.log() can be used in different settings
// console.log("This logs a string, good for leaving yourself a message");
// console.log(10 + 10);
// console.log("Our robot's name is " + playerName);

// Line below creates a function named "fight"
// function fight() {
//     window.alert("The fight has begun!");
// }

// Line below calls the fight function.  It must go below the function definition it calls.
// fight();


/* THE ABOVE WAS COMMENTED OUT AT 3.1.6 */

// Line below sends a prompt asking for an input of some type
var playerName = window.prompt("What is your robot's name?");
// Line below sets variable playerHealth to equal 100
var playerHealth = 100;
// Line below sets variable playerAttack to equal 10
var playerAttack = 10;

// Line below console logs the variables playerName, playerAttack, playerHealth
console.log(playerName, playerAttack, playerHealth);

// Line below sets variable enemyName to Roborto
var enemyName = "Roborto";
// Line below sets variable enemyHealth to equal 50
var enemyHealth = 50;
// Line below sets variable enemyAttack to equal 12
var enemyAttack = 12;

// Following 3 lines sets variable fight to a function that give a alert box
var fight = function() {
  // Alert players that they are starting the round
  window.alert("Welcome to Robot Gladiators!");

  //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
  enemyHealth = enemyHealth - playerAttack;

  // Log a resulting message to the console so we know that it worked.
  console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");

  // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
  playerHealth = playerHealth - enemyAttack;

  // Log a resulting message to the console so we know that it worked.
  console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");
};

fight();